import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { db } from "../firebase";
import { toast } from "react-toastify";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import StoneItem from "../components/StoneItem";
import { FaPlus } from "react-icons/fa";

export default function Collection() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [stones, setStones] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStones() {
      if (!auth.currentUser) {
        return;
      }

      setLoading(true);
      const stonesRef = collection(db, "stones");
      const q = query(stonesRef, where("userId", "==", auth.currentUser.uid));
      const querySnapshot = await getDocs(q);
      const stonesList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setStones(stonesList);
      setLoading(false);
    }

    fetchStones();
  }, [auth.currentUser]);

  if (!auth.currentUser) {
    return <p>You need to be logged in to view your collection.</p>;
  }

  function onEdit(stoneID) {
    navigate(`/EditStone/${stoneID}`);
  }

  async function onDelete(stoneID) {
    if (window.confirm("Are you sure")) {
      await deleteDoc(doc(db, "stones", stoneID));
      const updatedStones = stones.filter((stone) => stone.id !== stoneID);
      setStones(updatedStones);
      toast.success("Successfully deleted the stone ");
    }
  }
  return (
    <>
      <div className="max-w-6xl px-3 mt-6 mx-auto">
        {!loading && stones && stones.length > 0 && (
          <>
            <h2 className="text-2xl px-3 mt-6 font-semibold text-center ">
              My Stones
            </h2>
            <ul className="sm:grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4  ">
              {stones.map((stone) => (
                <StoneItem
                  key={stone.id}
                  id={stone.id}
                  stone={stone.data}
                  onDelete={() => onDelete(stone.id)}
                  onEdit={() => onEdit(stone.id)}
                />
              ))}
            </ul>
          </>
        )}
      </div>
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
    </>
  );
}
