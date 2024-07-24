import React, { useEffect, useState } from "react";
import { getAuth, updateProfile, updatePassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { toast } from "react-toastify";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import Spinner from "../components/Spinner"; // Importieren Sie Ihre Spinner-Komponente
import profilePic from "../assets/images/image.png"; // Standardprofilbild importieren

export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [changeDetail, setChangeDetail] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    birthDate: "",
    gender: "",
    photoURL: "",
    images: [],
    imgUrls: [],
  });

  const {
    name,
    email,
    password,
    birthDate,
    gender,
    photoURL,
    images,
    imgUrls,
  } = formData;

  useEffect(() => {
    async function fetchUserData() {
      if (!auth.currentUser) {
        return;
      }
      const docRef = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setFormData({
          name: data.name || "",
          email: data.email || "",
          password: "",
          birthDate: data.birthDate || "",
          gender: data.gender || "",
          photoURL: data.photoURL || "",
          imgUrls: data.imgUrls || [],
        });
      } else {
        console.log("No such document!");
      }
      setLoading(false);
    }

    fetchUserData();
  }, [auth.currentUser]);

  function onLogout() {
    auth.signOut();
    navigate("/");
  }

  function onChange(e) {
    if (e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        images: Array.from(e.target.files),
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
      }));
    }
  }

  async function storeImage(image) {
    return new Promise((resolve, reject) => {
      const storage = getStorage();
      const filename = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`;
      const storageRef = ref(storage, filename);
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        },
      );
    });
  }

  async function onSubmit() {
    setLoading(true);
    try {
      let updatedImgUrls = imgUrls;
      let newPhotoURL = photoURL;
      if (images && images.length > 0) {
        updatedImgUrls = await Promise.all(
          images.map((image) => storeImage(image)),
        ).catch((error) => {
          toast.error("Images not uploaded");
          setLoading(false);
          return;
        });
        newPhotoURL = updatedImgUrls[0];
        setFormData((prevState) => ({
          ...prevState,
          photoURL: newPhotoURL,
          imgUrls: updatedImgUrls,
        }));
      }

      // Update profile if displayName or photoURL has changed
      if (
        auth.currentUser.displayName !== name ||
        auth.currentUser.photoURL !== newPhotoURL
      ) {
        await updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: newPhotoURL,
        });
      }

      // Update password if it has been provided
      if (password) {
        await updatePassword(auth.currentUser, password);
      }

      // Update Firestore document
      const docRef = doc(db, "users", auth.currentUser.uid);
      await updateDoc(docRef, {
        name: name,
        email: email,
        birthDate: birthDate,
        gender: gender,
        photoURL: newPhotoURL,
        imgUrls: updatedImgUrls,
      });

      toast.success("Profile details updated");
    } catch (error) {
      console.error("Error updating profile details:", error);
      toast.error("Could not update the profile details");
    }
    setLoading(false);
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="flex justify-center mb-6 p-5 w-64 h-64">
          <img
            src={photoURL || profilePic}
            alt="Profile"
            className="w-full h-full object-cover rounded-full mx-auto mt-4 mb-6"
          />
        </div>
        <div className="w-full md:w-[50%] mt-6 px-3 text-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
          >
            <input
              type="text"
              id="name"
              value={name}
              disabled={!changeDetail}
              onChange={onChange}
              className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${changeDetail && " focus:bg-fuchsia-100"}`}
            />

            <input
              type="email"
              id="email"
              value={email}
              disabled={true}
              onChange={onChange}
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-gray-100 border border-gray-300 rounded transition ease-in-out cursor-not-allowed"
            />

            <input
              type="password"
              id="password"
              value={password}
              disabled={!changeDetail}
              onChange={onChange}
              placeholder="New Password"
              className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${changeDetail && " focus:bg-fuchsia-100"}`}
            />

            <input
              type="date"
              id="birthDate"
              value={birthDate}
              disabled={!changeDetail}
              onChange={onChange}
              className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${changeDetail && " focus:bg-fuchsia-100"}`}
            />

            <select
              id="gender"
              value={gender}
              disabled={!changeDetail}
              onChange={onChange}
              className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${changeDetail && " focus:bg-fuchsia-100"}`}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            {changeDetail && (
              <input
                type="file"
                id="images"
                onChange={onChange}
                accept=".jpg,.png,.jpeg"
                multiple
                className="mb-6 w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600"
              />
            )}

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className="flex items-center">
                Do you want to change your details?
                <span
                  onClick={() => {
                    if (changeDetail) onSubmit();
                    setChangeDetail((prevState) => !prevState);
                  }}
                  className="text-fuchsia-600 hover:text-fuchsia-800 transition ease-in-out duration-200 ml-1 cursor-pointer"
                >
                  {changeDetail ? "Apply change" : "Edit"}
                </span>
              </p>

              <p
                onClick={onLogout}
                className="text-cyan-400 hover:text-cyan-700 transition duration-200 ease-in-out cursor-pointer"
              >
                Sign out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
