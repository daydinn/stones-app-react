import React, { useEffect, useState } from 'react';
import { getAuth, updateProfile, updateEmail, updatePassword } from "firebase/auth";
import { useNavigate, Link } from 'react-router-dom';
import { db } from '../firebase';
import { toast } from "react-toastify";
import { collection, deleteDoc,doc, getDoc,getDocs,orderBy, where, query, updateDoc } from "firebase/firestore";
import { GiCrystalGrowth } from "react-icons/gi";
import StoneItem from '../components/StoneItem';



export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [changeDetail, setChangeDetail] = useState(false);
  const[loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    birthDate: "",
    gender: "",
    photoURL: ""
  });

  const { name, email, password, birthDate, gender, photoURL } = formData;


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
          password: "", // Don't fetch the password
          birthDate: data.birthDate || "",
          gender: data.gender || "",
          photoURL: data.photoURL || ""
        });
      } else {
        console.log("No such document!");
      }
    }

    fetchUserData();
  }, [auth.currentUser.uid]);

  function onLogout() {
    auth.signOut();
    navigate("/");
  }

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }


 

  async function onSubmit() {
    try {
      if (auth.currentUser.displayName !== name || auth.currentUser.photoURL !== photoURL) {
        await updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL
        });
      }

      if (auth.currentUser.email !== email) {
        await updateEmail(auth.currentUser, email);
      }

      if (password) {
        await updatePassword(auth.currentUser, password);
      }

      const docRef = doc(db, "users", auth.currentUser.uid);
      await updateDoc(docRef, {
        name: name,
        email: email,
        birthDate: birthDate,
        gender: gender,
        photoURL: photoURL
      });

      toast.success("Profile details updated");
    } catch (error) {
      toast.error("Could not update the profile details");
    }
  }

 


 
  return (
    <>
    <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
      <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
      <div className="w-full md:w-[50%] mt-6 px-3 ">
        <form>
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
            disabled={!changeDetail}
            onChange={onChange}
            className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${changeDetail && " focus:bg-fuchsia-100"}`}
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

          <input
            type="file"
            id="images"
            onChange={onChange}
            accept=".jpg,.png,.jpeg"
            multiple
            required
            className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600"
          />

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
