import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../firebase';
import { FaBalanceScale } from "react-icons/fa";
import { GiBullseye, GiCrystalGrowth, GiStarSwirl, GiGroundSprout, GiAllSeeingEye, GiEyeShield, GiPsychicWaves, GiMeditation, GiQueenCrown, GiGrassMushroom, GiLindenLeaf } from "react-icons/gi";
import { PiFlowerLotus, PiFeatherFill, PiBirdBold, PiCloverFill, PiFlowerTulipDuotone, PiTreasureChestFill, PiShootingStarFill, PiButterflyFill } from "react-icons/pi";
import { MdSunnySnowing, MdHealthAndSafety, MdOutlineWbTwilight, MdFavorite } from "react-icons/md";
import { LuSword } from "react-icons/lu";
import { SiShell } from "react-icons/si";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { TbTopologyStar3, TbZodiacAquarius, TbZodiacAries, TbZodiacCancer, TbZodiacCapricorn, TbZodiacGemini, TbZodiacLeo, TbZodiacLibra, TbZodiacPisces, TbZodiacSagittarius, TbZodiacScorpio, TbZodiacTaurus, TbZodiacVirgo } from "react-icons/tb";
import muladharaIcon from '../assets/chakras/muladhara.png'; 
import swadisthanaIcon from '../assets/chakras/swadhisthana.png'; 
import manipuraIcon from '../assets/chakras/manipura.png'; 
import anahataIcon from '../assets/chakras/anahata.png'; 
import visuddhaIcon from '../assets/chakras/visuddha.png'; 
import ajnaIcon from '../assets/chakras/ajna.png'; 
import sahasraraIcon from '../assets/chakras/sahasrara.png'; 
import earthEIcon from '../assets/elements/earth.png'; 
import airIcon from '../assets/elements/air.png'; 
import fireIcon from '../assets/elements/fire.png'; 
import waterIcon from '../assets/elements/water.png'; 
import earthIcon from '../assets/planets/earth.png'; 
import jupiterIcon from '../assets/planets/jupiter.png'; 
import marsIcon from '../assets/planets/mars.png'; 
import mercuryIcon from '../assets/planets/mercury.png'; 
import moonIcon from '../assets/planets/moon.png'; 
import neptuneIcon from '../assets/planets/neptune.png'; 
import plutoIcon from '../assets/planets/pluto.png'; 
import saturnIcon from '../assets/planets/saturn.png'; 
import sunIcon from '../assets/planets/sun.png'; 
import uranusIcon from '../assets/planets/uranus.png'; 
import venusIcon from '../assets/planets/venus.png'; 
import { IoDiamondOutline } from "react-icons/io5";

const crystalNames = [
  "Agate", "Alexandrite", "Amazonite", "Amber", "Amethyst", "Ametrine", "Andalusite", "Angelite", "Apatite", "Aquamarine",
  "Aventurine", "Azurite", "Beryl", "Bloodstone", "Boji Stone", "Bronzite", "Calcite", "Carnelian", "Celestite", "Chalcedony",
  "Chrysoberyl", "Chrysocolla", "Chrysoprase", "Citrine", "Coral", "Diamond", "Dumortierite", "Emerald", "Fluorite", "Garnet",
  "Goldstone", "Hematite", "Herkimer Diamond", "Howlite", "Iolite", "Jade", "Jasper", "Jet", "Kunzite", "Kyanite",
  "Labradorite", "Lapis Lazuli", "Larimar", "Lepidolite", "Malachite", "Moldavite", "Moonstone", "Morganite", "Obsidian", "Onyx",
  "Opal", "Pearl", "Peridot", "Pietersite", "Prehnite", "Pyrite", "Quartz", "Rhodochrosite", "Rhodonite", "Rose Quartz",
  "Ruby", "Rutilated Quartz", "Sapphire", "Sardonyx", "Selenite", "Seraphinite", "Serpentine", "Smoky Quartz", "Snowflake Obsidian", "Sodalite",
  "Spinel", "Sugilite", "Sunstone", "Tanzanite", "Tiger's Eye", "Topaz", "Tourmaline", "Turquoise", "Unakite", "Variscite",
  "Zebra Jasper", "Zoisite"
];

export default function CreateStone() {
  const [formData, setFormData] = useState({
    custom: false,
    own: false,
    favorite: false,
    wishlist: false,
    name: "",
    characteristics: [],
    chakras: [],
    zodiacs: [],
    planets: [],
    hardness: "",
    numerology: "",
    affirmations: "",
    care: "",
    notes: "",
    images: [],
  });

  const { custom, own, favorite, wishlist, name, characteristics, chakras, zodiacs, planets, hardness, numerology, affirmations, care, notes, images } = formData;
  const navigate = useNavigate();
  const auth = getAuth();

  const handleToggle = (field) => {
    setFormData({ ...formData, [field]: !formData[field] });
  };

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (files) {
      setFormData((prevState) => ({
        ...prevState,
        images: Array.from(files)
      }));
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleCharacteristicToggle = (char) => {
    const updatedChars = characteristics.includes(char)
      ? characteristics.filter(c => c !== char)
      : [...characteristics, char];
    setFormData({ ...formData, characteristics: updatedChars });
  };

  const handleChakraToggle = (chakra) => {
    const updatedChakras = chakras.includes(chakra)
      ? chakras.filter(c => c !== chakra)
      : [...chakras, chakra];
    setFormData({ ...formData, chakras: updatedChakras });
  };

  const handleZodiacToggle = (zodiac) => {
    const updatedZodiacs = zodiacs.includes(zodiac)
      ? zodiacs.filter(z => z !== zodiac)
      : [...zodiacs, zodiac];
    setFormData({ ...formData, zodiacs: updatedZodiacs });
  };

  const handlePlanetToggle = (planet) => {
    const updatedPlanets = planets.includes(planet)
      ? planets.filter(p => p !== planet)
      : [...planets, planet];
    setFormData({ ...formData, planets: updatedPlanets });
  };

  const storeImage = async (image) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage();
      const filename = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`;
      const storageRef = ref(storage, filename);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (user) {
      try {
        const imgUrls = await Promise.all(images.map((image) => storeImage(image)));
        const formDataCopy = { ...formData, imgUrls, userId: user.uid, timestamp: serverTimestamp() };
        delete formDataCopy.images;
        await addDoc(collection(db, 'crystals'), formDataCopy);
        toast.success('Crystal created successfully');
        navigate('/profile');
      } catch (error) {
        console.error('Error uploading image:', error);
        toast.error('Failed to create crystal');
      }
    } else {
      toast.error('You need to be logged in to create a crystal');
    }
  };

  return (
    <main className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
      <h1 className="text-3xl text-center font-bold mb-6">Add a new stone</h1>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="flex items-center">
          <input type="checkbox" id="custom" checked={custom} onChange={() => handleToggle('custom')} className="mr-2" />
          <label htmlFor="custom" className="text-lg font-semibold">Custom</label>
        </div>

        {custom ? (
          <div>
            <label htmlFor="name" className="block text-lg font-semibold">Name</label>
            <input type="text" id="name" value={name} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-md" />
          </div>
        ) : (
          <div>
            <label htmlFor="name" className="block text-lg font-semibold">Select Crystal Name</label>
            <select id="name" value={name} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-md">
              <option value="">Select a crystal</option>
              {crystalNames.map(crystal => (
                <option key={crystal} value={crystal}>{crystal}</option>
              ))}
            </select>
          </div>
        )}

        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <input type="checkbox" id="own" checked={own} onChange={() => handleToggle('own')} className="mr-2" />
            <label htmlFor="own" className="text-lg font-semibold">Own</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="favorite" checked={favorite} onChange={() => handleToggle('favorite')} className="mr-2" />
            <label htmlFor="favorite" className="text-lg font-semibold">Favorite</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="wishlist" checked={wishlist} onChange={() => handleToggle('wishlist')} className="mr-2" />
            <label htmlFor="wishlist" className="text-lg font-semibold">Wishlist</label>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Characteristics</h3>
          <div className="flex overflow-x-auto space-x-6 p-2 border border-gray-300 rounded-md scrollbar-hide">
            {[
              { icon: <FaBalanceScale />, name: 'Balance' },
              { icon: <PiFlowerLotus />, name: 'Calming' },
              { icon: <MdSunnySnowing />, name: 'Clarity' },
              { icon: <PiFeatherFill />, name: 'Cleansing' },
              { icon: <PiBirdBold />, name: 'Communication' },
              { icon: <GiQueenCrown />, name: 'Self Confidence' },
              { icon: <LuSword />, name: 'Courage' },
              { icon: <SiShell />, name: 'Creativity' },
              { icon: <GiStarSwirl />, name: 'Divine Guidance' },
              { icon: <MdHealthAndSafety />, name: 'Trauma Work' },
              { icon: <GiBullseye />, name: 'Focus' },
              { icon: <GiGroundSprout />, name: 'Grounding' },
              { icon: <PiCloverFill />, name: 'Luck' },
              { icon: <PiFlowerTulipDuotone />, name: 'Intuition' },
              { icon: <BsFillSuitHeartFill />, name: 'Love' },
              { icon: <GiAllSeeingEye />, name: 'Manifestation' },
              { icon: <GiMeditation />, name: 'Meditation' },
              { icon: <MdOutlineWbTwilight />, name: 'Motivation' },
              { icon: <GiGrassMushroom />, name: 'Nature' },
              { icon: <GiLindenLeaf />, name: 'Personal Development' },
              { icon: <PiTreasureChestFill />, name: 'Wealth' },
              { icon: <GiEyeShield />, name: 'Protection' },
              { icon: <GiPsychicWaves />, name: 'Psychic Abilities' },
              { icon: <PiShootingStarFill />, name: 'Spiritual Growth' },
              { icon: <PiButterflyFill />, name: 'Transformation' },
              { icon: <TbTopologyStar3 />, name: 'Vitality' },
            ].map(char => (
              <div
                key={char.name}
                onClick={() => handleCharacteristicToggle(char.name)}
                className="flex flex-col items-center cursor-pointer"
              >
                <div className={`w-16 h-16 flex items-center justify-center rounded-full ${characteristics.includes(char.name) ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
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
            {[
              { icon: earthEIcon, name: 'Earth' },
              { icon: airIcon, name: 'Air' },
              { icon: fireIcon, name: 'Fire' },
              { icon: waterIcon, name: 'Water' },
            ].map(element => (
              <div
                key={element.name}
                onClick={() => handlePlanetToggle(element.name)}
                className="flex flex-col items-center cursor-pointer"
              >
                <div className={`w-16 h-16 flex items-center justify-center rounded-full ${planets.includes(element.name) ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
                  <img src={element.icon} alt={element.name} className="w-10 h-10" />
                </div>
                <span className="text-xs text-center mt-2">{element.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Chakras</h3>
          <div className="flex overflow-x-auto space-x-6 p-2 border border-gray-300 rounded-md scrollbar-hide">
            {[
              { icon: muladharaIcon, name: 'Root' },
              { icon: swadisthanaIcon, name: 'Sacral' },
              { icon: manipuraIcon, name: 'Solar Plexus' },
              { icon: anahataIcon, name: 'Heart ' },
              { icon: visuddhaIcon, name: 'Throat ' },
              { icon: ajnaIcon, name: 'Third Eye ' },
              { icon: sahasraraIcon, name: 'Crown ' },
            ].map(chakra => (
              <div
                key={chakra.name}
                onClick={() => handleChakraToggle(chakra.name)}
                className="flex flex-col items-center cursor-pointer"
              >
                <div className={`w-16 h-16 flex items-center justify-center rounded-full ${chakras.includes(chakra.name) ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
                  <img src={chakra.icon} alt={chakra.name} className="w-10 h-10" />
                </div>
                <span className="text-xs text-center mt-2">{chakra.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Zodiac Signs</h3>
          <div className="flex overflow-x-auto space-x-6 p-2 border border-gray-300 rounded-md scrollbar-hide">
            {[
              { icon: <TbZodiacAquarius />, name: 'Aquarius' },
              { icon: <TbZodiacAries />, name: 'Aries' },
              { icon: <TbZodiacCancer />, name: 'Cancer' },
              { icon: <TbZodiacCapricorn />, name: 'Capricorn' },
              { icon: <TbZodiacGemini />, name: 'Gemini' },
              { icon: <TbZodiacLeo />, name: 'Leo' },
              { icon: <TbZodiacLibra />, name: 'Libra' },
              { icon: <TbZodiacPisces />, name: 'Pisces' },
              { icon: <TbZodiacSagittarius />, name: 'Sagittarius' },
              { icon: <TbZodiacScorpio />, name: 'Scorpio' },
              { icon: <TbZodiacTaurus />, name: 'Taurus' },
              { icon: <TbZodiacVirgo />, name: 'Virgo' },
            ].map(zodiac => (
              <div
                key={zodiac.name}
                onClick={() => handleZodiacToggle(zodiac.name)}
                className="flex flex-col items-center cursor-pointer"
              >
                <div className={`w-16 h-16 flex items-center justify-center rounded-full ${zodiacs.includes(zodiac.name) ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
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
            {[
              { icon: earthIcon, name: 'Earth' },
              { icon: jupiterIcon, name: 'Jupiter' },
              { icon: marsIcon, name: 'Mars' },
              { icon: mercuryIcon, name: 'Mercury' },
              { icon: moonIcon, name: 'Moon' },
              { icon: neptuneIcon, name: 'Neptune' },
              { icon: plutoIcon, name: 'Pluto' },
              { icon: saturnIcon, name: 'Saturn' },
              { icon: sunIcon, name: 'Sun' },
              { icon: uranusIcon, name: 'Uranus' },
              { icon: venusIcon, name: 'Venus' },
            ].map(planet => (
              <div
                key={planet.name}
                onClick={() => handlePlanetToggle(planet.name)}
                className="flex flex-col items-center cursor-pointer"
              >
                <div className={`w-16 h-16 flex items-center justify-center rounded-full ${planets.includes(planet.name) ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
                  <img src={planet.icon} alt={planet.name} className="w-10 h-10" />
                </div>
                <span className="text-xs text-center mt-2">{planet.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Notes</h3>
          <textarea id="notes" value={notes} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-md"></textarea>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Hardness</h3>
          <input type="number" id="hardness" value={hardness} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-md" />
        </div>

        <div>
          <h3 className="text-lg font-semibold">Numerology</h3>
          <input type="number" id="numerology" value={numerology} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-md" />
        </div>

        <div>
          <h3 className="text-lg font-semibold">Affirmations</h3>
          <textarea id="affirmations" value={affirmations} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-md"></textarea>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Care</h3>
          <textarea id="care" value={care} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-md"></textarea>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Images</h3>
          <input type="file" id="images" onChange={handleChange} accept=".jpg, .png, .jpeg" multiple className="mt-2" />
          <div className="flex flex-wrap mt-2">
            {images.length > 0 && images.map((image, index) => (
              <div key={index} className="relative w-24 h-24 m-1">
                <img src={URL.createObjectURL(image)} alt={`upload-${index}`} className="w-full h-full object-cover rounded-md" />
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">Create Stone</button>
      </form>
    </main>
  );
}
