import React, { useEffect, useState } from 'react';
import { getAuth } from "firebase/auth";
import { useNavigate, Link } from 'react-router-dom';
import { db } from '../firebase';
import { toast } from "react-toastify";
import { collection, deleteDoc,doc, getDoc,getDocs,orderBy, where, query, updateDoc } from "firebase/firestore";
import { GiCrystalGrowth } from "react-icons/gi";
import StoneItem from '../components/StoneItem';


export default function Collection() {
  const auth = getAuth();
  const navigate = useNavigate();
  const[stones, setStones] = useState(null);
  const[loading, setLoading] = useState(true);
  const [crystals, setCrystals] = useState([]); // Assuming you have a way to fetch crystals data


 
  
  useEffect(() => {
    async function fetchStones() {
      if (!auth.currentUser) {
        return;
      }
  
      setLoading(true);
      const stonesRef = collection(db, 'stones');
      const q = query(stonesRef, where('userId', '==', auth.currentUser.uid));
      const querySnapshot = await getDocs(q);
      const stonesList = querySnapshot.docs.map(doc => ({
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
  
function onEdit(stoneID){
  navigate(`/EditStone/${stoneID}`);
    
  }


  async function onDelete(stoneID){
  if(window.confirm("Are you sure")){
    await deleteDoc(doc(db,"stones", stoneID))
    const updatedStones= stones.filter(
      (stone)=> stone.id !==stoneID
   
  );
   setStones(updatedStones)
   toast.success("Successfully deleted the stone ")
  }

  }
  return (
    <>

    <button
    type="submit"
    className="w-full bg-green-300 text-white uppercase px-7 py-3 text-sm font-medium rounded shadow-md hover:bg-green-400 transition duration-150 ease-in-out hover:shadow-lg active:bg-green-500"
  >
    <Link
      to="/CreateStone"
      className="flex justify-center items-center"
    >
      <GiCrystalGrowth className="mr-2 text-3xl text-fuchsia-600 bg-cyan-200 rounded p-1 border-2 h-12 w-12" />
      Add a new crystal
    </Link>
  </button>

<div className="max-w-6xl px-3 mt-6 mx-auto">
  {!loading && stones && stones.length > 0 && (
    <>
      <h2 className="text-2xl text-center font-semibold">My Stones</h2>
      <ul className="sm:grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4  ">
        {stones.map((stone) => (
          <StoneItem 
            key={stone.id}
            id={stone.id}
            stone={stone.data}
            onDelete={()=>onDelete(stone.id)}
            onEdit={()=>onEdit(stone.id)}

          />
        ))}
      </ul>
    </>
  )}
</div>

</>
);
}
