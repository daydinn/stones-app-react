import React, { useEffect, useState } from 'react';
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import StoneItem from "../components/StoneItem";
import { db } from "../firebase";
import Spinner from "../components/Spinner"; // Importieren Sie Ihre Spinner-Komponente


export default function Home() {
  const [stones, setStones] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function fetchStones() {
      try {
        const stonesRef = collection(db, "stones");
        const q = query(stonesRef, orderBy("timestamp", "desc"));
        const querySnap = await getDocs(q);
        const stonesArray = [];
        querySnap.forEach((doc) => {
          stonesArray.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setStones(stonesArray);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    fetchStones();
  }, []);

  if (loading) {
    return <Spinner />; 
  }
  return (
    <div className="max-w-6xl px-3 mt-6 mx-auto">
      {stones.length > 0 ? (
        <div className="">
          <h2 className="px-3 text-2xl mt-6 font-semibold text-center">All Stones</h2>
          <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {stones.map((stone) => (
              <StoneItem
                key={stone.id}
                stone={stone.data}
                id={stone.id}
              />
            ))}
          </ul>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}
