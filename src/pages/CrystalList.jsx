import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { getAuth } from "firebase/auth";

export default function CrystalList() {
  const [crystals, setCrystals] = useState([]);
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      const fetchCrystals = async () => {
        const q = query(
          collection(db, "crystals"),
          where("userId", "==", user.uid),
        );
        const querySnapshot = await getDocs(q);
        const crystalsArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCrystals(crystalsArray);
      };
      fetchCrystals();
    }
  }, [user]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
      <h1 className="text-3xl text-center font-bold mb-6">My Crystals</h1>
      {crystals.map((crystal) => (
        <div
          key={crystal.id}
          className="p-4 mb-4 bg-gray-100 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold mb-2">{crystal.name}</h2>
          <p>
            <strong>Characteristics:</strong>{" "}
            {crystal.characteristics.join(", ")}
          </p>
          <p>
            <strong>Chakras:</strong> {crystal.chakras.join(", ")}
          </p>
          <p>
            <strong>Zodiac Signs:</strong> {crystal.zodiacs.join(", ")}
          </p>
          <p>
            <strong>Planets:</strong> {crystal.planets.join(", ")}
          </p>
          <p>
            <strong>Hardness:</strong> {crystal.hardness}
          </p>
          <p>
            <strong>Numerology:</strong> {crystal.numerology}
          </p>
          <p>
            <strong>Affirmations:</strong> {crystal.affirmations}
          </p>
          <p>
            <strong>Care:</strong> {crystal.care}
          </p>
          <p>
            <strong>Notes:</strong> {crystal.notes}
          </p>
          <div className="flex flex-wrap mt-2">
            {crystal.images.map((image, index) => (
              <div key={index} className="relative w-24 h-24 m-1">
                <img
                  src={image}
                  alt={`crystal-${index}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
