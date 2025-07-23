//home
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const contact = () => {
    navigate("/contact");
  };

  return (
    <div className="bg-[#e4e6e5] w-full min-h-screen overflow-x-hidden">
      {/* HERO SECTION */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-around border-[#7d2ae8] border-b-2 shadow-purple-200 shadow-2xl px-4 py-10">
        <div className="md:w-1/2 w-full md:px-10 px-4 mb-10 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Hi, I'm{' '}
            <span className="text-[#7d2ae8]">Sameer Sharma</span>
          </h1>
          <h2 className="text-lg md:text-xl font-semibold mb-4">
            Web Developer | Problem Solver | Tech Enthusiast
          </h2>
          <p className="text-base md:text-lg mb-6">
            I’m a passionate full-stack web developer who loves building clean, functional, and user-friendly websites and web applications. Whether it’s creating sleek frontend designs or building powerful backend systems, I enjoy turning ideas into real products that solve problems and add value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={contact}
              className="hover:scale-[1.03] active:scale-90 transition-all bg-[#7d2ae8] text-white px-6 py-3 text-lg rounded-xl font-semibold"
            >
              Hire Me
            </button>
            <Link to="/projects">
              <button className="hover:scale-[1.03] active:scale-90 transition-all border-[#7d2ae8] border-2 px-6 py-3 rounded-xl text-lg font-semibold">
                See Projects
              </button>
            </Link>
          </div>
        </div>
        <img
          src="/img.png"
          alt="Sameer"
          className="w-48 md:w-80 h-auto object-cover mb-5 md:mb-0"
        />
      </div>

      {/* WHAT I DO + WHY ME */}
      <div className="grid md:grid-cols-2 gap-8 p-6 md:p-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold text-[#7d2ae8] mb-4">
            What I Do
          </h1>
          <ul className="list-disc pl-5 marker:text-purple-400 text-base md:text-xl space-y-2">
            <li>Build responsive and dynamic websites</li>
            <li>Create full-stack web applications using the MERN stack</li>
            <li>Design modern user interfaces with Tailwind CSS & React</li>
            <li>Build REST APIs and integrate secure authentication</li>
            <li>Collaborate with clients to turn their vision into digital reality</li>
          </ul>
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold text-[#7d2ae8] mb-4">
            Why Work With Me?
          </h1>
          <p className="text-base md:text-xl font-semibold">
            I’m not just a developer — I’m a partner in your journey. I care about quality, clear communication, and delivering results on time. Whether you're a startup, business, or individual, I'm here to help your ideas grow online.
          </p>
        </div>
      </div>
    </div>
  );
}
