import React from 'react';
import planetsImage from '../assets/images/planets.jpg';
import { planetsList } from '../config/stonesconfig';

export default function Planets() {
  // Define the colors for each planet
  const colors = [
    'bg-orange-500',
    'bg-gray-400',
    'bg-teal-700',
    'bg-purple-500',
    'bg-blue-500',
    'bg-red-500',
    'bg-orange-700',
    'bg-teal-500',
    'bg-cyan-200',
    'bg-blue-900',
    'bg-red-700',
  ];

  return (
    <div className="max-w-4xl px-4 mt-10 mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Planets</h2>
      <img src={planetsImage} alt="Planets Image" className="mx-auto rounded-lg shadow-lg mb-8 w-1/2 h-1/5" />
      <p className="text-lg leading-relaxed text-gray-700 mb-10">
        The movement of the planets and luminaries (Sun and Moon) influences your human experience and behavior. The position of these celestial bodies through the 12 zodiac signs determines how their energies influence and shape your personality.
      </p>
      {planetsList.map((planet, index) => (
        <div key={index} className="mb-10">
          <div className="flex items-center mb-2">
            <div className={`w-12 h-12 flex items-center justify-center rounded-full ${colors[index % colors.length]}`}>
              <img src={planet.icon} alt={`${planet.name} Planet Icon`} className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-semibold text-gray-800 ml-4">{`${planet.name}`}</h1>
          </div>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            {planet.description}
          </p>
        </div>
      ))}
    </div>
  );
}
