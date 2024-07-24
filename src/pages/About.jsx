import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
      <h1 className="text-4xl text-center font-bold mb-6">
        About My Crystal Collection App
      </h1>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2 mt-5">
            Welcome to the Crystal Collection App
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            My application is designed for crystal enthusiasts who want to
            explore, catalog, and learn more about various crystals, their
            properties, and how they can be used to enhance your life.
          </p>
          <span className="block mt-2 text-sm text-gray-500 italic">
              Please note: There is no scientific evidence to support the effectiveness of crystals.
          </span>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Features</h2>
          <ul className="list-disc list-inside text-lg leading-relaxed text-gray-700">
            <li>
              <strong>Comprehensive Crystal Database:</strong> Explore a wide
              range of crystals, each with detailed information about their
              characteristics, chakras, elements, zodiac signs, and planetary
              associations. This database has been collaboratively created by
              all users and is publicly accessible, allowing users to compare
              their crystals with others.{" "}
            </li>
            <li>
              <strong>Personal Collection:</strong> Users can create a personal
              collection of crystals they own, including custom crystal under
              their profile. Mark their favorites and create a wishlist for
              future acquisitions.
            </li>
            <li>
              <strong>Detailed Profiles:</strong> Each crystal profile includes
              information on its characteristics, chakras, elements, zodiac
              signs, and planetary associations, helping users understand how to
              best use each crystal.
            </li>
            <li>
              <strong>User Authentication:</strong> Users can log in and
              register to create and customize their own crystal lists and
              update their profile information, ensuring a personalized
              experience.
            </li>
            <li>
              <strong>Interactive UI:</strong> Enjoy a user-friendly responsive
              interface designed to make navigation and crystal management
              intuitive and enjoyable.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            This application is built using the latest web technologies to
            ensure a smooth and efficient user experience:
          </p>
          <ul className="list-disc list-inside text-lg leading-relaxed text-gray-700">
            <li>
              <strong>React:</strong> A JavaScript library for building user
              interfaces, used for creating the front-end of the application.
            </li>
            <li>
              <strong>Tailwind CSS:</strong> A utility-first CSS framework for
              styling.
            </li>
            <li>
              <strong>GitHub:</strong> Used for version control and project
              collaboration.
            </li>
            <li>
              <strong>Firebase:</strong> A platform developed by Google for
              creating mobile and web applications, used here for
              authentication, database, and storage.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Get Started</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Ready to dive into the world of crystals?{" "}
            <Link to="/SignUp" className="text-cyan-500 hover:underline">
              Sign up
            </Link>{" "}
            now to start exploring and managing your crystal collection.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">About the Developer</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            This application was developed by Diyar Aydin. You can check out my
            work on{" "}
            <a
              href="https://github.com/daydinn"
              className="text-cyan-500 hover:underline"
            >
              GitHub
            </a>{" "}
            and connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/diyar-aydin-ab902224a/"
              className="text-cyan-500 hover:underline"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}


