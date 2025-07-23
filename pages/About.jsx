//about
import React from "react";

export default function About(){
    return(
        <div className="min-h-screen w-full bg-[#e4e6e5] from-gray-100 to-gray-200 flex justify-center items-start py-16 px-4">
  <div className="max-w-4xl bg-white rounded-2xl shadow-lg p-10 space-y-10">
    
    {/* Section: Who I Am */}
    <div>
      <h1 className="text-4xl text-indigo-600 font-bold mb-3"><i>Who I am</i></h1>
      <p className="text-gray-700 text-lg leading-relaxed">
        Hi, I’m <span className="font-semibold text-gray-900">Sameer</span> – a passionate and self-taught full-stack web developer who loves turning ideas into reality through clean, efficient code.
      </p>
    </div>

    {/* Section: Skills */}
    <div>
      <h1 className="text-4xl text-indigo-600 font-bold mb-3"><i>Skills</i></h1>
      <p className="text-gray-700 text-lg leading-relaxed">
        I specialize in building responsive and user-friendly websites using the <span className="font-semibold text-gray-900">MERN stack</span> (MongoDB, Express, React, Node.js). I also have hands-on experience with <span className="text-indigo-500 font-semibold">Tailwind CSS</span>, API integrations, and deploying apps on platforms like <span className="font-semibold">Vercel</span> and <span className="font-semibold">Netlify</span>.
      </p>
    </div>

    {/* Section: Projects */}
    <div>
      <h1 className="text-4xl text-indigo-600 font-bold mb-3"><i>Projects</i></h1>
      <p className="text-gray-700 text-lg leading-relaxed">
        I’ve built several full-stack projects like a task manager, a portfolio website, and a user dashboard. I love learning by doing, and every project helps me grow.
      </p>
    </div>

    {/* Section: Vision */}
    <div>
      <h1 className="text-4xl text-indigo-600 font-bold mb-3"><i>Vision</i></h1>
      <p className="text-gray-700 text-lg leading-relaxed">
        My goal is to help businesses grow online by building fast, secure, and scalable web solutions. I'm always open to freelance projects, collaborations, and exciting ideas!
      </p>
    </div>

  </div>
</div>

    )
}