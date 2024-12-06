import React from 'react';
import Git from '../assets/GitHub.png'; // Assuming the GitHub icon is in your assets
import Newnav from '../components/newnav';

const Project = () => {
  const eventsData = [
    {
      title: 'Smart Menstrual Kit',
      date: 'ReactJS Firebase Arduino ESP32',
      Link: 'https://github.com/harmannanda1234/Matrix_PWA_INDIANITES/',
      description: 'Smart period tracking AI-integrated kit',
    },
    {
      title: 'Attendify',
      date: 'MERN stack',
      Link: 'https://github.com/harmannanda1234/attendify',
      description: 'Geolocation Based Attendance App',
    },
    {
      title: 'Discord Bot',
      date: 'NodeJS',
      Link: 'https://github.com/harmannanda1234/discordbot',
      description: 'Responsive Discord bot that offers URL shortening services',
    },
    {
      title: 'SMTP server',
      Link: 'https://github.com/harmannanda1234/smtp',
      date: 'NodeJS',
      description: 'A SMTP (simple mail transfer protocol) server made using Nodejs',
    },
    {
      title: 'Notes app',
      Link: 'https://github.com/harmannanda1234/mynotes',
      date: 'MERN stack',
      description: 'A note making webapp',
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#0b1114] via-[#010607] to-[#02141d] min-h-screen min-w-full text-white">
      {/* Navbar */}
      <Newnav />
      
      {/* Main content */}
      <div className="py-24 ">
        <h2 className="text-center text-6xl font-bold text-white mb-24">Projects</h2>

        {/* Projects list in cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {eventsData.map((event, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-2">{event.title}</h3>
              <p className="text-gray-300 mb-4">{event.description}</p>
              {/* GitHub link icon */}
              {event.Link && (
                <a href={event.Link} target="_blank" rel="noopener noreferrer">
                  <img src={Git} alt="GitHub Link" className="h-6 mb-4 hover:opacity-75 transition-opacity" />
                </a>
              )}
              <span className="text-sm text-gray-500">{event.date}</span>
              <span className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
