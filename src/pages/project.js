import React from 'react';
import Git from '../assets/GitHub.png'; // Assuming the GitHub icon is in your assets
import Newnav from '../components/newnav';
// import ProjectImage1 from '../assets/project1.png'; // Placeholder for project images
// import ProjectImage2 from '../assets/project2.png';
// import ProjectImage3 from '../assets/project3.png';
// import ProjectImage4 from '../assets/project4.png';
// import ProjectImage5 from '../assets/project5.png';
// import ProjectImage6 from '../assets/project6.png';

const Project = () => {
  const eventsData = [
    // {
    //   title: 'Smart Menstrual Kit',
    //   date: 'ReactJS, Firebase, Arduino, ESP32',
    //   Link: 'https://github.com/harmannanda1234/Matrix_PWA_INDIANITES/',
    //   description: 'Smart period tracking AI-integrated kit.',
    //   // image: ProjectImage1,
    // },   
    {
      title: 'Tier-3 Project Deployment',
      date: 'AWS VPC, EC2, S3',
      Link: 'https://github.com/harmannanda1234/aws-vpc-deployment',
      description: 'Tier-3 deployment using AWS VPC, EC2, and S3.',
      // image: ProjectImage1, // Placeholder, add your actual project image
    },

    {
      title: 'Shell Scripting Automation',
      date: 'Shell Scripting',
      Link: 'https://github.com/harmannanda1234/shell-scripting',
      description: 'Automation scripts for server management.',
      // image: ProjectImage6,
    },

    {
      title: 'Attendify',
      date: 'MERN Stack',
      Link: 'https://test-dep1.vercel.app/',
      description: 'Geolocation-based attendance app.',
      // image: ProjectImage2,
    },

    {
      title: 'Discord Bot',
      date: 'NodeJS',
      Link: 'https://github.com/harmannanda1234/discordbot',
      description: 'Responsive Discord bot offering URL shortening services.',
      // image: ProjectImage3,
    },

    {
      title: 'SMTP Server',
      date: 'NodeJS',
      Link: 'https://github.com/harmannanda1234/smtp',
      description: 'SMTP server made using Node.js.',
      // image: ProjectImage4,
    },

    {
      title: 'Notes App',
      date: 'MERN Stack',
      Link: 'https://github.com/harmannanda1234/mynotes',
      description: 'A note-making web app.',
      // image: ProjectImage5,
    },
   
  ];

  return (
    <div className="bg-gradient-to-r from-[#232f3e] via-[#205378] to-[#1e2852] min-h-screen min-w-full text-white">
      {/* Navbar */}
      <Newnav />

      {/* Main content */}
      <div className="py-24">
        <h2 className="text-center text-6xl font-bold text-yellow-400 mb-24">PROJECTS</h2>

        {/* Projects list in cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {eventsData.map((event, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105 relative"
            >
              {/* Project image */}
              <img src={event.image} alt={`${event.title} Image`} className="w-full h-40 object-cover mb-4 rounded-md" />
              
              {/* Project title */}
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">{event.title}</h3>
              
              {/* Project description */}
              <p className="text-gray-300 mb-4">{event.description}</p>
              
              {/* GitHub link */}
              {event.Link && (
                <a href={event.Link} target="_blank" rel="noopener noreferrer">
                  <img src={Git} alt="GitHub Link" className="h-6 mb-4 hover:opacity-75 transition-opacity" />
                </a>
              )}

              {/* Tech stack */}
              <span className="text-sm text-gray-400">{event.date}</span>
              
              {/* Vertical bar on the left side */}
              <span className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-500"></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
