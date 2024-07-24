import React from "react";
import elementsImage from "../assets/images/elements.avif";
import { elementsList } from "../config/stonesconfig";

const elementColors = [
  "bg-green-500",
  "bg-blue-500",
  "bg-orange-500",
  "bg-cyan-500",
];

export default function Elements() {
  return (
    <div className="max-w-4xl px-4 mt-10 mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Elements
      </h2>
      <img
        src={elementsImage}
        alt="Elements Image"
        className="mx-auto rounded-lg shadow-lg mb-8 w-1/2 h-1/5"
      />
      <p className="text-lg leading-relaxed text-gray-700 mb-10">
        Four elements form the essential building blocks for everything that
        exists. United in perfect synergy, the elemental forces of life bring
        nature and the universe into balance.
      </p>
      {elementsList.map((element, index) => (
        <div key={index} className="mb-10">
          <div className="flex items-center mb-2">
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full text-white ${elementColors[index % elementColors.length]}`}
            >
              <img
                src={element.icon}
                alt={`${element.name} Element Icon`}
                className="w-6 h-6 text-white"
              />
            </div>
            <h1 className="text-3xl font-semibold text-gray-800 ml-4">{`${element.name}`}</h1>
          </div>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            {element.description}
          </p>
        </div>
      ))}
    </div>
  );
}
