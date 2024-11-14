import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <section className="flex items-center justify-between p-12 bg-gradient-to-r from-primary to-secondary min-h-screen">
      <div className="flex flex-col items-start space-y-6">
        <Image 
          src="/images/profile.jpg" 
          alt="Hurya's Profile Picture" 
          width={128} 
          height={128} 
          className="rounded-full border-4 border-white shadow-lg"
          priority 
        />
        <h1 className="text-5xl font-bold text-white animate-fade-in">I am Hurya</h1>
        <div className="flex space-x-4">
          <Link href="https://www.linkedin.com/in/hurya-abdul-haq-214145329/" target="_blank" passHref>
            <button 
              aria-label="LinkedIn Profile" 
              className="bg-white text-primary px-6 py-2 rounded-lg transition duration-300 transform hover:scale-105 hover:bg-primary hover:text-white"
            >
              LinkedIn
            </button>
          </Link>
          <a 
            href="https://www.linkedin.com/posts/hurya-abdul-haq-214145329_my-cv-activity-7262522969191600128-PnNa?utm_source=share&utm_medium=member_desktop" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="View My CV"
          >
            <button 
              className="bg-white text-primary px-6 py-2 rounded-lg transition duration-300 transform hover:scale-105 hover:bg-primary hover:text-white"
            >
              View My CV
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
