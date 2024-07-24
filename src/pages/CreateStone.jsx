import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { db } from "../firebase";
import {
  crystalNames,
  characteristicsList,
  elementsList,
  chakrasList,
  zodiacsList,
  planetsList,
} from "../config/stonesconfig";

const initialFormData = {
  custom: false,
  own: false,
  favorite: false,
  wishlist: false,
  name: "",
  characteristics: [],
  chakras: [],
  zodiacs: [],
  planets: [],
  elements: [],
  hardness: "",
  numerology: "",
  affirmations: "",
  care: "",
  notes: "",
  images: [],
};

export default function CreateStone() {
  const auth = getAuth();
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const {
    custom,
    own,
    favorite,
    wishlist,
    name,
    characteristics,
    chakras,
    zodiacs,
    planets,
    elements,
    hardness,
    numerology,
    affirmations,
    care,
    notes,
    images,
  } = formData;
  const navigate = useNavigate();

  function handleCheckboxChange(e) {
    const { id, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: checked,
      name: id === "custom" && !checked ? "" : prevState.name,
    }));
  }

  function onChange(e) {
    let boolean = null;
    if (e.target.value === "true") {
      boolean = true;
    }
    if (e.target.value === "false") {
      boolean = false;
    }
    if (e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        images: Array.from(e.target.files),
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value,
      }));
    }
  }

  const handleToggle = (type, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [type]: prevState[type].includes(value)
        ? prevState[type].filter((item) => item !== value)
        : [...prevState[type], value],
    }));
  };

  const storeImage = async (image) => {
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const user = auth.currentUser;
    if (user) {
      try {
        const imgUrls = await Promise.all(
          images.map((image) => storeImage(image)),
        );
        const formDataCopy = {
          ...formData,
          imgUrls,
          userId: user.uid,
          timestamp: serverTimestamp(),
        };
        delete formDataCopy.images;
        await addDoc(collection(db, "stones"), formDataCopy);
        toast.success("Stone created successfully");
        navigate("/profile");
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("Failed to create stone");
      }
    } else {
      toast.error("You need to be logged in to create a stone");
    }
    setLoading(false);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <main className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
      <h1 className="text-3xl text-center font-bold mb-6">Add a new stone</h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="custom"
            checked={custom}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <label htmlFor="custom" className="text-lg font-semibold">
            Custom
          </label>
        </div>
        {custom ? (
          <div>
            <label htmlFor="name" className="block text-lg font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={onChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            />
          </div>
        ) : (
          <div>
            <label htmlFor="name" className="block text-lg font-semibold">
              Select Crystal Name
            </label>
            <select
              id="name"
              value={name}
              onChange={onChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select a crystal</option>
              {crystalNames.map((crystal) => (
                <option key={crystal} value={crystal}>
                  {crystal}
                </option>
              ))}
            </select>
          </div>
        )}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="own"
              checked={own}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label htmlFor="own" className="text-lg font-semibold">
              Own
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="favorite"
              checked={favorite}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label htmlFor="favorite" className="text-lg font-semibold">
              Favorite
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="wishlist"
              checked={wishlist}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label htmlFor="wishlist" className="text-lg font-semibold">
              Wishlist
            </label>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Characteristics</h3>
          <div className="flex overflow-x-auto space-x-6 p-2 border border-gray-300 rounded-md scrollbar-hide">
            {characteristicsList.map((char) => (
              <div
                key={char.name}
                onClick={() => handleToggle("characteristics", char.name)}
                className="flex flex-col items-center cursor-pointer"
              >
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full ${characteristics.includes(char.name) ? "bg-purple-500 text-white" : "bg-gray-200 text-gray-700"}`}
                >
                  {char.icon}
                </div>
                <span className="text-xs text-center mt-2">{char.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Elements</h3>
          <div className="flex overflow-x-auto space-x-6 p-2 border border-gray-300 rounded-md scrollbar-hide">
            {elementsList.map((element) => (
              <div
                key={element.name}
                onClick={() => handleToggle("elements", element.name)}
                className="flex flex-col items-center cursor-pointer"
              >
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full ${elements.includes(element.name) ? "bg-purple-500 text-white" : "bg-gray-200 text-gray-700"}`}
                >
                  <img
                    src={element.icon}
                    alt={element.name}
                    className="w-10 h-10"
                  />
                </div>
                <span className="text-xs text-center mt-2">{element.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Chakras</h3>
          <div className="flex overflow-x-auto space-x-6 p-2 border border-gray-300 rounded-md scrollbar-hide">
            {chakrasList.map((chakra) => (
              <div
                key={chakra.name}
                onClick={() => handleToggle("chakras", chakra.name)}
                className="flex flex-col items-center cursor-pointer"
              >
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full ${chakras.includes(chakra.name) ? "bg-purple-500 text-white" : "bg-gray-200 text-gray-700"}`}
                >
                  <img
                    src={chakra.icon}
                    alt={chakra.name}
                    className="w-10 h-10"
                  />
                </div>
                <span className="text-xs text-center mt-2">{chakra.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Zodiac Signs</h3>
          <div className="flex overflow-x-auto space-x-6 p-2 border border-gray-300 rounded-md scrollbar-hide">
            {zodiacsList.map((zodiac) => (
              <div
                key={zodiac.name}
                onClick={() => handleToggle("zodiacs", zodiac.name)}
                className="flex flex-col items-center cursor-pointer"
              >
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full ${zodiacs.includes(zodiac.name) ? "bg-purple-500 text-white" : "bg-gray-200 text-gray-700"}`}
                >
                  {zodiac.icon}
                </div>
                <span className="text-xs text-center mt-2">{zodiac.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Planets</h3>
          <div className="flex overflow-x-auto space-x-6 p-2 border border-gray-300 rounded-md scrollbar-hide">
            {planetsList.map((planet) => (
              <div
                key={planet.name}
                onClick={() => handleToggle("planets", planet.name)}
                className="flex flex-col items-center cursor-pointer"
              >
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full ${planets.includes(planet.name) ? "bg-purple-500 text-white" : "bg-gray-200 text-gray-700"}`}
                >
                  <img
                    src={planet.icon}
                    alt={planet.name}
                    className="w-10 h-10"
                  />
                </div>
                <span className="text-xs text-center mt-2">{planet.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Notes</h3>
          <textarea
            id="notes"
            value={notes}
            onChange={onChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Hardness</h3>
          <input
            type="number"
            id="hardness"
            value={hardness}
            onChange={onChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Numerology</h3>
          <input
            type="number"
            id="numerology"
            value={numerology}
            onChange={onChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Affirmations</h3>
          <textarea
            id="affirmations"
            value={affirmations}
            onChange={onChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Care</h3>
          <textarea
            id="care"
            value={care}
            onChange={onChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Images</h3>
          <input
            type="file"
            id="images"
            onChange={onChange}
            accept=".jpg,.png,.jpeg,.webp"
            multiple
            required
            className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-fuchsia-500 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-fuchsia-600-500 transition duration-150 ease-in-out hover:shadow-lg hover: hover:bg-green-300 active:bg-cyan-800"
        >
          Create Stone
        </button>
      </form>
    </main>
  );
}
