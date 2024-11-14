// app/projects/page.tsx
import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    title: "Todo List",
    description: "A React & TypeScript-based app for managing and organizing your tasks efficiently.",
    imageSrc: "/images/todolist.jpg", // Add appropriate images in public/images/
    githubLink: "https://github.com/Hurya-ah/todo-list",
  },
  {
    title: "Weather Widget",
    description: "A Next.js and TypeScript-based tool for fetching and displaying real-time weather data.",
    imageSrc: "/images/weather-app.jpg", // Add appropriate images in public/images/
    githubLink: "https://github.com/Hurya-ah/weather-app",
  },
  {
    title: "Shareable Resume",
    description: "A dynamic, shareable resume format that can be exported and shared easily.",
    imageSrc: "/images/shareable-resume.jpg", // Add appropriate images in public/images/
    githubLink: "https://github.com/Hurya-ah/milestone-5-shareableresume",
  },
  {
    title: "Static Interactive Resume",
    description: "A TypeScript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
    imageSrc: "/images/static-resume.jpg", // Add appropriate images in public/images/
    githubLink: "https://github.com/Hurya-ah/milestone-1-2-static-resume",
  },
  {
    title: "Countdown Timer",
    description: "A countdown timer built with JavaScript to set and track time intervals.",
    imageSrc: "/images/countdown-timer.jpg", // Add appropriate images in public/images/
    githubLink: "https://github.com/Hurya-ah/count-down-timer",
  },
  {
    title: "ID Card",
    description: "A dynamic ID card generator built with HTML, CSS, and JavaScript.",
    imageSrc: "/images/id-card.jpg", // Add appropriate images in public/images/
    githubLink: "https://github.com/Hurya-ah/id-card",
  },
  {
    title: "Calculator App",
    description: "A simple calculator app built with HTML, CSS, and JavaScript.",
    imageSrc: "/images/calculator.jpg", // Add appropriate images in public/images/
    githubLink: "https://github.com/Hurya-ah/calculator-app",
  },
  {
    title: "Increase/Decrease Button",
    description: "An interactive button for increasing or decreasing values.",
    imageSrc: "/images/increase-decrease.jpg", // Add appropriate images in public/images/
    githubLink: "https://github.com/Hurya-ah/Increase-Decrease-Button",
  },
  {
    title: "Responsive VegNest Website",
    description: "A responsive e-commerce website for a vegetable store built with React and Tailwind CSS.",
    imageSrc: "/images/vegnest.jpg", // Add appropriate images in public/images/
    githubLink: "https://github.com/Hurya-ah/Responsive-VegNest-Website",
  },
  {
    title: "Responsive ChocoBites Website",
    description: "A responsive website for a chocolate store with a modern design.",
    imageSrc: "/images/chocobites.jpg", // Add appropriate images in public/images/
    githubLink: "https://github.com/Hurya-ah/Ressponsive-ChocoBites-Website",
  }
];

const ProjectsPage = () => {
  return (
    <div className="py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
