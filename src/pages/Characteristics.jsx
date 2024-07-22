import React from 'react';
import characteristicsImage from '../assets/images/characteristics.jpg';
import { characteristicsList } from '../config/stonesconfig';

export default function Characteristics() {
  return (
    <div className="max-w-6xl px-3 mt-6 mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Characteristics</h2>
      <img src={characteristicsImage} alt="Characteristics Image" className="mx-auto rounded-lg shadow-lg mb-8 w-1/2 h-1/5" />
      <p className="text-lg leading-relaxed text-gray-700 mb-10">
        Each crystal carries unique characteristics that can influence different aspects of your life. Whether you seek balance, clarity, or spiritual growth, there's a crystal that aligns with your needs. Understanding these characteristics helps you choose the right crystal to support your journey towards personal development and well-being.
      </p>
      <div>
        {characteristicsList.map((characteristic, index) => (
          <div key={index} className="mb-10">
            <div className="flex items-center mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-purple-500">
                {React.cloneElement(characteristic.icon, { className: "text-white w-6 h-6" })}
              </div>
              <h1 className="text-3xl font-semibold text-gray-800 ml-4">{characteristic.name}</h1>
            </div>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              {characteristic.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
