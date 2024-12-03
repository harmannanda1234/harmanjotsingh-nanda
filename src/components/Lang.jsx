import React from 'react';
import 'devicon/devicon.min.css'; // Import Devicon styles

const lang = [
  { name: 'Python', icon: 'devicon-python-plain' },
  { name: 'C++', icon: 'devicon-cplusplus-plain' },
  { name: 'Javascript', icon: 'devicon-javascript-plain' },
 
];

const Lang = () => {
  return ( <div className='bg-[#0b1114]'>
      <h3 className='mt-2 py-8 text-center text-2xl text-zinc-400 font-poppins bg-[#0b1114]'>Programming Languages</h3>
    <div className="flex justify-center flex-wrap p-4 bg-[#0b1114]">
      {lang.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center w-36 m-4 p-6 bg-gradient-to-r from-[#1e2a32] via-[#242f38] to-[#29343d] rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
        >
          <i className={`${skill.icon} colored text-5xl mb-4`}></i>
          <span className="text-lg font-poppins text-white">{skill.name}</span>
        </div>
      ))}
    </div>
   </div>
  );
};

export default Lang;
