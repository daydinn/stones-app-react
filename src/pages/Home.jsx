import React, { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import StoneItem from "../components/StoneItem";
import { db } from "../firebase";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";


export default function Home() {
  const [stones, setStones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortCriteria, setSortCriteria] = useState("name");

  useEffect(() => {
    async function fetchStones() {
      try {
        const stonesRef = collection(db, "stones");
        const q = query(stonesRef, orderBy(sortCriteria));
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
  }, [sortCriteria]);

  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
  };

  if (loading) {
    return <Spinner />;
  }
  
  return (
    <div className="max-w-6xl px-3 mt-6 mx-auto">
      <div className="flex justify-end mb-4">
        <label className="mr-2 text-lg">Sort by:</label>
        <select 
          value={sortCriteria} 
          onChange={handleSortChange}
          className="border rounded px-2 py-1"
        >
          <option value="name">Name</option>
          <option value="timestamp">Creation date</option>
          <option value="elements">Elements</option>
          <option value="chakras">Chakras</option>
          <option value="zodiacs">Zodiacs</option>
          <option value="characteristics">Characteristics</option>
          
        </select>
      </div>
      {stones.length > 0 ? (
        <div className="">
          <h2 className="px-3 text-2xl mt-6 font-semibold text-center">
            All Stones
          </h2>
          <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {stones.map((stone) => (
              <StoneItem key={stone.id} stone={stone.data} id={stone.id} />
            ))}
          </ul>
        </div>
      ) : (
        <p>No stones available</p>
      )}

<div className="mx-auto text-center">
        <button
          type="submit"
          className="w-1/8  mx-auto text-center mb-5 text-stone-200 uppercase px-7 py-3 text-sm font-medium rounded-full shadow-md hover:bg-green-200 transition duration-150 ease-in-out hover:shadow-lg active:bg-green-300 "
        >
          <Link to="/CreateStone" className="flex justify-center items-center">
            <FaPlus className=" text-3xl text-green-500 p-1  h-20 w-20" />
          </Link>
        </button>
      </div>
    </div>
  );
}
