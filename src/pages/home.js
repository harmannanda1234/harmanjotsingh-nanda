import React from 'react';
import Navbar from '../components/nav';
// import x from "../assets/x.png"
import linked from "../assets/linkd.png"
import resume from "../assets/resume(4).pdf"
// import Pro from "../components/line"
// import leet from "../assets/leetcode.png"
// import gitu from "../assets/gitu.png"
import giti from "../assets/GitHub.png"
import linku from "../assets/linkuu.png"
import leeeet from "../assets/leetcode-3521542-2944960.webp"
import Skills from "../components/skills.jsx"
import Lang from "../components/Lang.jsx"
import Card from '../components/Card.jsx';
import airtel from "../assets/airtel.png"
import ncrtc from "../assets/ncrtc.png"


const Home = () => {
  return (
    <div className="bg-gradient-to-r from-[#0b1114] via-[#010607] to-[#02141d] min-h-screen min-w-full ">
      <Navbar />
      <div id='home' className="flex items-center justify-center h-screen px-8 lg:px-24">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl lg:text-6xl  text-white">
              ("Hello World"), I am
            </h1>
            <h2 className="text-5xl lg:text-7xl text-[#38d1ff] mt-2">
              Harmanjot Singh Nanda
            </h2>
            <p className="text-lg lg:text-xl text-white mt-4">
              Software Developer 
            </p>
            <p className="text-sm lg:text-base text-gray-400 mt-2">
              I'm a 2nd-year Computer Science and Engineering student at GGSIPU, New Delhi.
            </p>
            <div className="flex mt-6 space-x-4">
               <button className="bg-pink-600 hover:bg-pink-500 text-white font-semibold py-2 px-5 rounded-3xl" onClick={()=>{window.location.href='https://www.instagram.com/harmannanda_/'}}>
                Say Hello!
                </button>
                <a href="/projects" className="border border-white px-3 py-2 my-2 rounded-2xl text-white underline hover:text-pink-500 hover:border-pink-600 hover:animate-bounce">
                My Projects
                </a>
                </div>

          </div>
          <div   className="flex justify-center cursor-pointer transition-transform duration-300 hover:scale-110"
  onClick={() => {
    window.location.href = 'https://www.linkedin.com/in/harmanjot-singh-nanda-80794a292/';
  }}>
            <img
              src={linked} 
              alt="Profile"
              className="rounded-2xl w-fit h-auto object-cover shadow-lg mt-8 sm:h-auto sm:w-fit "
            />
          </div>
        </div>
      </div>
    

      <section id='about' className='mt-0'>
  <div className='bg-gradient-to-r from-[#ff3d64] via-[#ff0059] to-[#ff045c] min-h-[40rem] flex items-center justify-center'>
    <div className="container mx-auto px-4 text-white max-w-full mt-16 mb-16">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* <!-- Left: Years of Experience --> */}
        <div className="ml-0 md:ml-64 text-center md:text-left mb-8">
          <h1 className="text-[10rem] md:text-[15rem] lg:text-[20rem] font-bold text-[#ffcd41] leading-none">04</h1>
          <h3 className="text-lg md:text-xl tracking-wide mt-[-1rem] md:mt-[-2rem]">years of experience</h3>
          <div className="text-3xl md:text-4xl font-bold tracking-wider mt-4">
            <p>Harman</p>
            <p>Nanda</p>
            <p className="opacity-50">Harman</p>
            <p className="opacity-50">Nanda</p>
          </div>
        </div>

        {/* <!-- Right: About Me --> */}
        <div className="ml-0 md:ml-68 w-full md:w-1/2 mt-6 md:mt-0 text-center md:text-left">
          <h2 className="text-5xl md:text-5xl text-[#ffcd41] font-bold px-4 mb-8">About Me</h2>
          <p className="mt-4 text-base md:text-lg px-4 md:px-0 mb-6">
            I began my coding journey in 11th grade when I discovered Python and built a multi-purpose Discord bot. Over time, I expanded my skills into full-stack development, working with frameworks like React, Node, Express.js, and MongoDB. I’ve also gained experience with Arduino and cloud technologies during my first internship at NCRTC, where I worked on real-world projects. Now, I’m focusing on becoming a DevOps engineer, driven by my passion for networking and system architecture.
          </p>
          <button className="mt-6 bg-white text-black font-bold py-2 px-4 rounded hover:bg-yellow-400 hover:text-pink-700 transition-transform duration-300 hover:scale-110">
            <a href={resume} download="resume">Download Resume</a>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="experience" className="py-20 ">
      <h1 className="text-center text-6xl font-bold text-zinc-300 mb-16 mt-16">Experience</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center">
  <Card
    logo={airtel}
    companyName="BHARTI AIRTEL"
    skills={['Flask', 'Docker', 'AWS', 'Python']}
    description="Worked on premises to cloud migration of a Flask application, containerized it using Docker, and deployed it on AWS."
  />
  <Card
    logo={ncrtc}
    companyName="NCRTC"
    skills={['NODE JS', 'PostgreSQL', 'Figma']}
    description="Developed a web application for the organization's internal use, using Node.js and PostgreSQL."
  />
</div>

    </section>
<section id='skills' className='mt-56 mb-48'>
  <h1 className='text-center text-6xl font-bold text-zinc-300 mb-10 mt-32'>Tools & Frameworks</h1>
  <p className="mt-4 text-center md:text-lg px-4 md:px-0 mb-6 text-zinc-400">Here are the tools and technologies i have been using over the past few years and have gained hands on experience</p>
  <Lang/>
  <Skills/>
</section>

{/* 
<section id="pro" className='bg-gradient-to-r from-[#0b1114] via-[#010607] to-[#02141d] min-h-96 min-w-full mb-20'>
<Pro/>
</section> */}
<section id="connect" className="bg-gradient-to-r from-[#0b1114] via-[#010607] to-[#02141d] min-h-full min-w-full mt-16 mb-24 py-12">
  <h2 className="text-center text-6xl font-bold text-white mb-10 mt-32">Let's Build Together :)</h2>

  <div className="min-w-full flex flex-col lg:flex-row justify-center items-center lg:overflow-x-auto space-y-6 lg:space-x-6 px-4 py-12 snap-x snap-mandatory">
    
    {/* GitHub Profile Card */}
    <div className="flex-shrink-0 w-72 cursor-pointer transition-transform duration-300 hover:scale-110 snap-center bg-gradient-to-b from-gray-900 to-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl">
      <a href="https://github.com/harmannanda1234" target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-[#f5f5f5] text-6xl">
            <i className="fab fa-github"></i>
          </div>
          <span className="text-[#f5f5f5] text-2xl font-semibold">GitHub</span>
          <p className="text-gray-400 text-sm text-center">Explore my repositories and collaborative projects.</p>
        </div>
      </a>
    </div>

    {/* LeetCode Profile Card */}
    <div className="flex-shrink-0 w-72 cursor-pointer transition-transform duration-400 hover:scale-105 snap-center bg-gradient-to-b from-yellow-500 to-orange-400 rounded-2xl p-6 shadow-lg hover:shadow-xl">
      <a href="https://leetcode.com/u/harmannanda_/" target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-[#ffffff] text-6xl">
            <i className="fas fa-code"></i> {/* Substitute with a LeetCode icon */}
          </div>
          <span className="text-white text-2xl font-semibold">LeetCode</span>
          <p className="text-gray-200 text-sm text-center">Check out my problem-solving journey on LeetCode.</p>
        </div>
      </a>
    </div>

    {/* X (Twitter) Profile Card */}
    <div className="flex-shrink-0 w-72 cursor-pointer transition-transform duration-300 hover:scale-110 snap-center bg-gradient-to-b from-blue-600 to-blue-400 rounded-2xl p-6 shadow-lg hover:shadow-xl">
      <a href="https://x.com/harmannanda_06" target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-[#f5f5f5] text-6xl">
            <i className="fab fa-x-twitter"></i> {/* X (Twitter) icon */}
          </div>
          <span className="text-[#f5f5f5] text-2xl font-semibold">X (Twitter)</span>
          <p className="text-gray-200 text-sm text-center">Follow my tech thoughts and updates on X (Twitter).</p>
        </div>
      </a>
    </div>

    {/* Email Me Card */}
    <div className="flex-shrink-0 w-72 cursor-pointer transition-transform duration-300 hover:scale-110 snap-center bg-gradient-to-b from-green-600 to-green-400 rounded-2xl p-6 shadow-lg hover:shadow-xl">
      <a href="mailto:hxrmn03@gmail.com">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-[#f5f5f5] text-6xl">
            <i className="fas fa-envelope"></i>
          </div>
          <span className="text-[#f5f5f5] text-2xl font-semibold">Email Me</span>
          <p className="text-gray-200 text-sm text-center">Reach out for collaborations or inquiries.</p>
        </div>
      </a>
    </div>

  </div>
</section>

<section id='footer' className="bg-gray-900 text-white py-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center">
      {/* Left Section: Logo or Site Name */}
      
      {/* Center Section: Navigation Links */}
      <div className="flex space-x-6 mb-4 md:mb-0">
        <a href="#home" className="text-gray-600 hover:text-blue-200">Home</a>
        <a href="#about" className="text-gray-600 hover:text-blue-200">About</a>
        <a href="/projects" className="text-gray-600 hover:text-blue-200">Projects</a>
        <a href="#skills" className="text-gray-600 hover:text-blue-200">Skills</a>
      </div>
      {/* Right Section: Social Media Links */}
      <div className="flex space-x-4">
        <a href="https://github.com/harmannanda1234" target="_blank" rel="noopener noreferrer">
          <img src={giti} alt="GitHub" className="w-fit h-6 hover:opacity-75" />
        </a>
        <a href="https://www.linkedin.com/in/harmanjot-singh-nanda-80794a292/" target="_blank" rel="noopener noreferrer">
          <img src={linku} alt="LinkedIn" className="w-fit h-6 hover:opacity-75" />
        </a>
        <a href="https://leetcode.com/u/harmannanda_/" target="_blank" rel="noopener noreferrer">
          <img src={leeeet} alt="Twitter" className="w-6 h-6 hover:opacity-75" />
        </a>
      </div>
      <div className="mb-2 mt-3 md:mb-0">
        <h1 className="text-1xl text-gray-700 ">Portfolio(Last Updated December 2024)</h1>
      </div>
    </div>
    {/* Copyright Section */}
    <div className="text-center mt-4">
      <p className="text-sm text-gray-600">© 2024 Harmanjot Singh Nanda. All rights reserved.</p>
    </div>
  </div>
</section>



</div>
  );
};

export default Home;
