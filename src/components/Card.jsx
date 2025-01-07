import React from 'react';

const Card = ({ logo, companyName, skills, description }) => {
    return (
      <div className="mt-5 max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg border border-gray-700 bg-gray-900 transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="px-6 py-8">
          {/* Company Logo */}
          {logo && (
            <div className="flex justify-center mb-4">
              <img src={logo} alt={`${companyName} Logo`} className="w-20 h-20 object-contain" />
            </div>
          )}
  
          {/* Company Name */}
          {companyName && (
            <h3 className="text-3xl font-semibold text-white text-center mb-4">{companyName}</h3>
          )}
  
          {/* Skills */}
          {skills?.length > 0 && (
            <p className="text-blue-500 text-center text-lg mb-4">
              Skills: <span className="text-gray-300">{skills.join(', ')}</span>
            </p>
          )}
  
          {/* Project Description */}
          {description && (
            <p className="text-gray-400 text-center leading-relaxed">{description}</p>
          )}
        </div>
      </div>
    );
  };
export default Card;
