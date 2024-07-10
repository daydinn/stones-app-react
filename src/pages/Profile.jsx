import React, { useEffect, useState } from 'react';
import { getAuth, updateProfile, updateEmail, updatePassword } from "firebase/auth";
import { useNavigate, Link } from 'react-router-dom';
import { db } from '../firebase';
import { toast } from "react-toastify";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { GiCrystalGrowth } from "react-icons/gi";

export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [changeDetail, setChangeDetail] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    birthDate: "",
    gender: "",
    photoURL: ""
  });
  const [crystals, setCrystals] = useState([]); // Assuming you have a way to fetch crystals data

  const { name, email, password, birthDate, gender, photoURL } = formData;

  useEffect(() => {
    async function fetchUserData() {
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
            className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${changeDetail && "bg-fuchsia-200 focus:bg-fuchsia-300"}`}
          />

          <input
            type="email"
            id="email"
            value={email}
            disabled={!changeDetail}
            onChange={onChange}
            className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${changeDetail && "bg-fuchsia-200 focus:bg-fuchsia-300"}`}
          />

          <input
            type="password"
            id="password"
            value={password}
            disabled={!changeDetail}
            onChange={onChange}
            placeholder="New Password"
            className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${changeDetail && "bg-fuchsia-200 focus:bg-fuchsia-300"}`}
          />

          <input
            type="date"
            id="birthDate"
            value={birthDate}
            disabled={!changeDetail}
            onChange={onChange}
            className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${changeDetail && "bg-fuchsia-200 focus:bg-fuchsia-300"}`}
          />

          <select
            id="gender"
            value={gender}
            disabled={!changeDetail}
            onChange={onChange}
            className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${changeDetail && "bg-fuchsia-200 focus:bg-fuchsia-300"}`}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <input
            type="text"
            id="photoURL"
            value={photoURL}
            disabled={!changeDetail}
            onChange={onChange}
            placeholder="Photo URL"
            className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${changeDetail && "bg-fuchsia-200 focus:bg-fuchsia-300"}`}
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
        <button
          type="submit"
          className="w-full bg-green-300 text-white uppercase px-7 py-3 text-sm font-medium rounded-full shadow-md hover:bg-green-400 transition duration-150 ease-in-out hover:shadow-lg active:bg-green-500"
        >
          <Link
            to="/CreateStone"
            className="flex justify-center items-center"
          >
            <GiCrystalGrowth className="mr-2 text-3xl text-fuchsia-600 bg-cyan-200 rounded-full p-1 border-2 h-12 w-12" />
            Add your crystal
          </Link>
        </button>

        <h2 className="text-2xl font-semibold mt-8">Your Crystals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {crystals.map(crystal => (
            <div key={crystal.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">{crystal.name}</h3>
              <p><strong>Characteristics:</strong> {crystal.characteristics.join(', ')}</p>
              <p><strong>Chakras:</strong> {crystal.chakras.join(', ')}</p>
              <p><strong>Zodiacs:</strong> {crystal.zodiacs.join(', ')}</p>
              <p><strong>Planets:</strong> {crystal.planets.join(', ')}</p>
              <p><strong>Hardness:</strong> {crystal.hardness}</p>
              <p><strong>Numerology:</strong> {crystal.numerology}</p>
              <p><strong>Affirmations:</strong> {crystal.affirmations}</p>
              <p><strong>Care:</strong> {crystal.care}</p>
              <p><strong>Notes:</strong> {crystal.notes}</p>
              {crystal.images.length > 0 && (
                <div className="flex flex-wrap mt-2">
                  {crystal.images.map((image, index) => (
                    <div key={index} className="relative w-24 h-24 m-1">
                      <img src={URL.createObjectURL(image)} alt={`crystal-${index}`} className="w-full h-full object-cover rounded-md" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
