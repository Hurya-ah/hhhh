import Image from 'next/image';

import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  githubLink: string;
};

const ProjectCard = ({ title, description, imageSrc, githubLink }: ProjectCardProps) => {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-6">
        <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-100 mb-4">{description}</p>
        {/* Stylish GitHub Link with hover effect */}
        <Link
          href={githubLink}
          className="text-white bg-blue-600 px-4 py-2 rounded-md text-lg inline-block transition-all hover:bg-blue-700 hover:scale-105"
        >
          View on GitHub
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
