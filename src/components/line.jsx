import React from 'react';
import Git from "../assets/GitHub.png"; // Assuming you have this GitHub icon in your assets

const Pro = () => {
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
    <div className="py-10 mt-44">
      <h2 className="text-center text-6xl font-bold text-white mb-24">Projects</h2>
      <div className="flex overflow-x-auto space-x-6 px-4">
        {eventsData.map((event, index) => (
          <div
            key={index}
            className={`relative min-w-[300px] flex-shrink-0 px-4 ${index % 2 === 0 ? 'self-start' : 'self-end'}`}
          >
            <div className="relative bg-gray-800 p-6 rounded-lg shadow-md transition transform opacity-100 mb-8">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">{event.title}</h3>
              <p className="text-gray-300 mb-2">{event.description}</p>
              {/* Only show the GitHub icon if the link exists */}
              {event.Link && (
                <a href={event.Link} target="_blank" rel="noopener noreferrer">
                  <img src={Git} alt="GitHub Link" className="h-6 mb-2 hover:opacity-75 transition-opacity" />
                </a>
              )}
              <span className="text-sm text-gray-500">{event.date}</span>
              <span className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pro;
