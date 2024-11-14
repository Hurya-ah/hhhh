

const Skills = () => {
    return (
      <section className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white flex flex-col justify-center">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">
          My Skills Specialization
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Left section with a description */}
          <div className="w-full md:w-1/2 text-lg bg-white text-gray-900 p-8 rounded-xl shadow-2xl">
            <p className="leading-relaxed">
              I specialize in building modern web applications using React, Next.js, and TypeScript for robust, maintainable code.
              With Tailwind CSS for responsive design, I focus on creating user-friendly, visually appealing frontend experiences.
            </p>
          </div>
  
          {/* Right section with skills list */}
          <div className="w-full md:w-1/2 bg-white text-gray-900 p-8 rounded-xl shadow-2xl">
            <ul className="space-y-6">
              <li className="text-2xl font-bold text-indigo-600 hover:text-indigo-400 transition-colors duration-300">Node.js</li>
              <li className="text-2xl font-bold text-green-600 hover:text-green-400 transition-colors duration-300">TypeScript</li>
              <li className="text-2xl font-bold text-yellow-600 hover:text-yellow-400 transition-colors duration-300">Next.js</li>
              <li className="text-2xl font-bold text-blue-600 hover:text-blue-400 transition-colors duration-300">Tailwind CSS</li>
              <li className="text-2xl font-bold text-pink-600 hover:text-pink-400 transition-colors duration-300">CSS</li>
              <li className="text-2xl font-bold text-purple-600 hover:text-purple-400 transition-colors duration-300">HTML</li>
            </ul>
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  