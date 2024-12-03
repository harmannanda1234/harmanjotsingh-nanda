import React from 'react';
import 'devicon/devicon.min.css'; // Import Devicon styles

const skills = [
  { name: 'Flask', icon: 'devicon-flask-original' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
  { name: 'Docker', icon: 'devicon-docker-plain' },
  { name: 'Express', icon: 'devicon-express-original' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain' },
  { name: 'React', icon: 'devicon-react-original' },
  { name: 'Git', icon: 'devicon-git-plain' },
  { name: 'Figma', icon: 'devicon-figma-plain' },
];

const Skills = () => {
  return (
    <div className='bg-[#0b1114]'>
      <h3 className=' py-8 text-center text-2xl text-zinc-400 font-poppins bg-[#0b1114]'>Frameworks & Technologies</h3>
    <div className="flex justify-center flex-wrap p-8 bg-[#0b1114]">
      {skills.map((skill, index) => (
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

export default Skills;
