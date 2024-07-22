import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import Spinner from '../components/Spinner';
import { db } from '../firebase';
import { IoReturnUpBackOutline } from 'react-icons/io5';
import {
  characteristicsList,
  elementsList,
  chakrasList,
  zodiacsList,
  planetsList
} from '../config/stonesconfig';

export default function Stone() {
  const params = useParams();
  const navigate = useNavigate();
  const [stone, setStone] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStone() {
      const docRef = doc(db, 'stones', params.stoneId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setStone(docSnap.data());
        setLoading(false);
      }
    }
    fetchStone();
  }, [params.stoneId]);

  if (loading) {
    return <Spinner />;
  }

  return (
    
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
             <IoReturnUpBackOutline  onClick={() => navigate(-1)} className="w-12 h-12 text-cyan-500 cursor-pointer hover:text-cyan-700 hover:scale-110 transition-scale duration-150 ease-in  mb-5" />

        
        
      
    
      <div className="flex justify-center">
        <div className="max-w-4xl w-full p-4 border rounded-lg shadow-lg bg-white">
          <div className="flex justify-center mb-4">
            <img
              className="w-80 h-64 object-cover   rounded-t-lg"
              loading="lazy"
              src={stone.imgUrls[0]}
              alt={stone.name}
            />
          </div>
          <h1 className="text-2xl font-bold mb-2 text-center">{stone.name}</h1>

          <div className="p-4 border rounded-lg shadow-sm mb-4">
            <h2 className="text-xl font-semibold">Characteristics</h2>
            <div className="flex flex-wrap gap-2">
              {stone.characteristics.map((char, index) => {
                const icon = characteristicsList.find(item => item.name === char)?.icon;
                return (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200">
                      {icon}
                    </div>
                    <span className="text-xs mt-1">{char}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="p-4 border rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold">Chakras</h2>
              <div className="flex flex-wrap gap-2">
                {stone.chakras.map((chakra, index) => {
                  const icon = chakrasList.find(item => item.name === chakra)?.icon;
                  return (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200">
                        <img src={icon} alt={chakra} className="w-10 h-10" />
                      </div>
                      <span className="text-xs mt-1">{chakra}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="p-4 border rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold">Elements</h2>
              <div className="flex flex-wrap gap-2">
                {stone.elements.map((element, index) => {
                  const icon = elementsList.find(item => item.name === element)?.icon;
                  return (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200">
                        <img src={icon} alt={element} className="w-10 h-10" />
                      </div>
                      <span className="text-xs mt-1">{element}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="p-4 border rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold">Zodiacs</h2>
              <div className="flex flex-wrap gap-2">
                {stone.zodiacs.map((zodiac, index) => {
                  const icon = zodiacsList.find(item => item.name === zodiac)?.icon;
                  return (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200">
                        {icon}
                      </div>
                      <span className="text-xs mt-1">{zodiac}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="p-4 border rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold">Planets</h2>
              <div className="flex flex-wrap gap-2">
                {stone.planets.map((planet, index) => {
                  const icon = planetsList.find(item => item.name === planet)?.icon;
                  return (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200">
                        <img src={icon} alt={planet} className="w-10 h-10" />
                      </div>
                      <span className="text-xs mt-1">{planet}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="p-4 border rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold">Hardness</h2>
              <p>{stone.hardness}</p>
            </div>
            <div className="p-4 border rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold">Numerology</h2>
              <p>{stone.numerology}</p>
            </div>
          </div>

          <div className="p-4 border rounded-lg shadow-sm mb-4">
            <h2 className="text-xl font-semibold">Affirmations</h2>
            <p>{stone.affirmations}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold">Notes</h2>
              <p>{stone.notes}</p>
            </div>
            <div className="p-4 border rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold">Care</h2>
              <p>{stone.care}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
