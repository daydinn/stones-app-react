import React from "react";
import chakrasImage from "../assets/images/chakras.jpg";
import { chakrasList } from "../config/stonesconfig";

export default function Chakras() {
  return (
    <div className="max-w-4xl px-4 mt-10 mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Chakras
      </h2>
      <img
        src={chakrasImage}
        alt="Chakras Image"
        className="mx-auto rounded-lg shadow-lg mb-8 w-1/2 h-1/5"
      />
      <p className="text-lg leading-relaxed text-gray-700 mb-10">
        Chakras are the energy centers in the body that regulate the flow of
        life force. There are seven main chakras, each reflecting a frequency of
        color and affecting a different area of your life. When a chakra is
        'blocked', the energy stagnates, and the imbalance can impact your
        mental, emotional, or physical well-being. Crystals carry a unique
        vibration that can restore the balance of one or more chakras. With all
        your chakras open and aligned, you have full control to realize your
        true potential.
      </p>
      {chakrasList.map((chakra, index) => (
        <div key={index} className="mb-10">
          <div className="flex items-center mb-2">
            <img
              src={chakra.icon}
              alt={`${chakra.name} Chakra Icon`}
              className="w-8 h-8 mr-4"
            />
            <h1 className="text-3xl font-semibold text-gray-800">{`${chakra.name} Chakra`}</h1>
          </div>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            {chakra.description}
          </p>
          <p className="text-sm text-gray-600 italic">{chakra.location}</p>
        </div>
      ))}
    </div>
  );
}
