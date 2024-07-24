import React from "react";
import zodiacsingsImage from "../assets/images/zodiacsigns.jpg";
import { zodiacsList } from "../config/stonesconfig";

export default function ZodiacSigns() {
  return (
    <div className="max-w-4xl px-4 mt-10 mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Zodiac Signs
      </h2>
      <img
        src={zodiacsingsImage}
        alt="Chakras Image"
        className="mx-auto rounded-lg shadow-lg mb-8 w-1/2 h-1/5"
      />
      <p className="text-lg leading-relaxed text-gray-700 mb-10">
        Each zodiac sign carries a unique cosmic energy that encourages growth
        in different aspects of your life. Astrological times and dates
        correspond to the positions of the sun and moon in relation to the
        earth. A zodiac season correlates with the sun's movement through the 12
        sections, changing every 28 to 30 days. The moon orbits the earth,
        positioning itself in a different zodiac sign every 2 to 3 days. Like a
        great cosmic clock, awareness of the celestial cycles can offer divine
        insight into your journey here on earth. Crystals associated with each
        zodiac sign align with its energetic vibration and divine influence.
      </p>
      {zodiacsList.map((zodiacSign, index) => (
        <div key={index} className="mb-10">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 mr-4 bg-pink-500 text-white rounded-full flex items-center justify-center">
              {zodiacSign.icon}
            </div>
            <h1 className="text-3xl font-semibold text-gray-800">{`${zodiacSign.name}`}</h1>
          </div>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            {zodiacSign.description}
          </p>
          <p className="text-sm text-gray-600 italic">{zodiacSign.season}</p>
        </div>
      ))}
    </div>
  );
}
