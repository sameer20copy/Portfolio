//project
import React from "react";

const projects = [
    {
        title: "Task Manager App",
        description: "A full-stack MERN app to manage daily tasks with user authentication and CRUD operations.",
        link: "https://your-taskmanager.vercel.app",
        tech: ["React", "Node.js", "MongoDB", "JWT"],
    },
    {
        title: "Portfolio Website",
        description: "My personal portfolio showcasing my skills, services, and contact information.",
        link: "https://sameer-portfolio.vercel.app",
        tech: ["React", "Tailwind CSS"],
    },
    {
        title: "User Dashboard",
        description: "Admin panel for managing users and settings. Includes protected routes and role-based access.",
        link: "https://your-dashboard.vercel.app",
        tech: ["React", "Express", "MongoDB"],
    },
];

const Projects = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-16 px-6 md:px-20">
            <h1 className="text-4xl font-bold text-center text-indigo-600 mb-10">
                My Projects
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-xl p-6 transition hover:scale-[1.03] duration-300"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            {project.title}
                        </h2>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech, i) => (
                                <span
                                    key={i}
                                    className="text-sm bg-indigo-100 text-indigo-700 px-2 py-1 rounded"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-2 text-indigo-600 hover:underline font-medium"
                        >
                            View Project →
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
