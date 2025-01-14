const About = () => {
  return (
    <section className="p-8 md:p-12 min-h-screen bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 text-white flex flex-col justify-center items-center">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600 animate-pulse">
          About Me
        </h1>
        <p className="text-lg md:text-2xl leading-relaxed mb-6">
          I am Hurya, a passionate web developer and student, focused on building modern web applications. I specialize in technologies like React, Next.js, and TypeScript, creating dynamic, user-friendly applications. I am also excited to dive into the world of AI and the Metaverse, exploring how they can transform the digital landscape.
        </p>
        <p className="text-base md:text-lg max-w-2xl mx-auto">
          My passion for technology and innovation drives me to create meaningful and impactful digital experiences. Whether it's crafting intuitive user interfaces, building scalable backend systems, or exploring new advancements in AI and the Metaverse, I am committed to constantly learning and evolving as a developer.
        </p>
      </div>
    </section>
  );
};

export default About;
