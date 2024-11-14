const Contact = () => {
    return (
      <section className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white flex flex-col justify-center p-12">
        <h2 className="text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">
          Connect with Me
        </h2>
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            <a href="mailto:huryas300abdulhaq@gmail.com" className="text-lg hover:text-yellow-400 transition duration-300">huryas300abdulhaq@gmail.com</a>
            <a href="tel:+923152382112" className="text-lg hover:text-yellow-400 transition duration-300">03152382112</a>
          </div>
          <form className="space-y-4 w-full max-w-md mt-8">
            <input type="text" placeholder="Name" className="w-full p-4 border border-white rounded-lg bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            <input type="email" placeholder="Email" className="w-full p-4 border border-white rounded-lg bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            <textarea placeholder="Message" className="w-full p-4 border border-white rounded-lg bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400"></textarea>
            <button type="submit" className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg hover:bg-yellow-500 transition duration-300">Send</button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
  