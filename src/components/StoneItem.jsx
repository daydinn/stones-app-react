import React from "react";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { chakrasList } from "../config/stonesconfig";
import Moment from "react-moment";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { GiGroundSprout } from "react-icons/gi";
import { FaFireAlt } from "react-icons/fa";
import { IoMdWater } from "react-icons/io";
import { MdAir } from "react-icons/md";
import muladharaIcon from "../assets/chakras/muladhara.png";
import swadisthanaIcon from "../assets/chakras/swadhisthana.png";
import manipuraIcon from "../assets/chakras/manipura.png";
import anahataIcon from "../assets/chakras/anahata.png";
import visuddhaIcon from "../assets/chakras/visuddha.png";
import ajnaIcon from "../assets/chakras/ajna.png";
import sahasraraIcon from "../assets/chakras/sahasrara.png";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

const chakraIcons = {
  Root: muladharaIcon,
  Sacral: swadisthanaIcon,
  "Solar Plexus": manipuraIcon,
  Heart: anahataIcon,
  Throat: visuddhaIcon,
  "Third Eye": ajnaIcon,
  Crown: sahasraraIcon,
};

const renderChakraIcon = (chakra) => {
  const icon = chakraIcons[chakra];
  if (icon) {
    return <img src={icon} alt={`${chakra} Chakra`} className="w-6 h-6" />;
  }
  return null;
};

export default function StoneItem({ stone, id, onEdit, onDelete }) {
  const renderElementIcon = (element) => {
    switch (element) {
      case "Earth":
        return <GiGroundSprout />;
      case "Fire":
        return <FaFireAlt />;
      case "Water":
        return <IoMdWater />;
      case "Air":
        return <MdAir />;
      default:
        return null;
    }
  };

  return (
    <li className="relative bg-white flex flex-col justify-between  items-center shadow-md hover:shadow-xl rounded-md overflow-hidden transition-shadow duration-150 m-[10px]">
      <Link className="contents" to={`/${stone.name}/${id}`}>
        <img
          className="w-80 h-64  object-cover hover:scale-105 transition-scale duration-200 ease-in mt-5 mb-15"
          loading="lazy"
          src={stone.imgUrls[0]}
        />
        <div className="absolute top-2 left-2 bg-fuchsia-500 text-white uppercase text-xs font-medium rounded-md px-2 py-1 shadow-lg">
          {stone.favorite ? <MdFavorite /> : <MdFavoriteBorder />}
        </div>
        <div className="w-full p-[10px]">
          <div className="flex">
            <p className="font-bold m-0 text-xl truncate mr-2  ">
              {stone.name}
            </p>
            <div className="flex items-center mt-1">
              {stone.elements.map((element, index) => (
                <span
                  key={index}
                  className="text-sm rounded-full  border border-gray-300 "
                >
                  {renderElementIcon(element)}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center  mt-3"></div>

          <div className="flex items-center mt-[5px]   ">
            {stone.chakras.map((chakra, index) => (
              <span key={index} className="text-xl">
                {renderChakraIcon(chakra)}
              </span>
            ))}
          </div>
        </div>
      </Link>
      {onDelete && (
        <FaTrash 
          className="absolute bottom-2 right-2 h-[18px] cursor-pointer text-red-500 hover:scale-150 transition-scale duration-150 ease-in  "
          onClick={() => onDelete(stone.id)}
        />
      )}
      {onEdit && (
        <MdEdit
          className="absolute bottom-2 right-7 h-4 cursor-pointer hover:scale-150 transition-scale duration-150 ease-in mr-3  "
          onClick={() => onEdit(stone.id)}
        />
      )}
    </li>
  );
}
