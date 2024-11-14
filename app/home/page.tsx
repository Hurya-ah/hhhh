

'use client'; // Add this at the top of the file to mark it as a client component

import { useEffect, useState } from "react";

const Home = () => {
  const [fadeIn, setFadeIn] = useState(false);

  // Animation trigger for fade-in effect
  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white py-16 px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0">
        <div className="text-center md:text-left md:w-1/2">
          <h1
            className={`text-6xl font-extrabold mb-6 transition-opacity duration-1000 ${
              fadeIn ? "opacity-100" : "opacity-0"
            }`}
          >
            I am Hurya
          </h1>
          <p
            className={`text-2xl mb-8 opacity-0 transition-opacity duration-1000 delay-200 ${
              fadeIn ? "opacity-100" : "opacity-0"
            }`}
          >
            Welcome to my portfolio! Explore my projects, skills, and journey.
          </p>

          <div className="space-x-4 flex justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/hurya-abdul-haq-214145329/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
            >
              LinkedIn
            </a>
            <a
              href="https://www.linkedin.com/posts/hurya-abdul-haq-214145329_my-cv-activity-7262522969191600128-PnNa?utm_source=share&utm_medium=member_desktop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
            >
              View My CV
            </a>
          </div>
        </div>

        <div className="md:w-1/2">
          <img
            src="/images/profile.jpg"
            alt="Hurya's Profile"
            className="rounded-full w-80 h-80 md:w-96 md:h-96 mx-auto md:mx-0 shadow-2xl hover:shadow-xl transition-shadow duration-500 transform hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
