import React from 'react'
import Newnav from '../components/newnav';
import image1 from '../assets/blog1.jpg'
const Blog = () => {
  const blogs = [
    {
      title: 'My First Blog',
      date: '5/2/2025',
      image:{image1},
      data: `We all experience times when we feel stuck or question the direction we're heading. For me, this feeling creeps up every few months, sometimes taking a toll on my mental health. It’s important to remind ourselves that these emotions are perfectly normal—nobody’s life is flawless. What really helps is having someone to talk to, someone who listens. In a world where we might have hundreds of online friends, having a few people in real life who genuinely care makes all the difference. A friend of mine recently went through the same (he knows if he’s reading this), and it made me realise it’s okay to feel like this. Just take life easy, and if you’re ever feeling down, don’t hesitate to reach out to me. LET LIFE HAPPEN.`,
    },
  ];

  return (
    <div className='bg-[#331c3f] min-h-screen min-w-full p-8 flex justify-center items-center'>
      <Newnav/>
      <div className='w-full max-w-2xl'>
        <h1 className='text-6xl font-bold mb-10 mt-8 text-center text-yellow-600 '>Blogs</h1>
        {blogs.map((blog, index) => (
          <div
            key={index}
            className='bg-[#47235a] rounded-2xl shadow-lg p-6 mb-6 transition-transform transform hover:scale-105 border border-yellow-200'
          >
            <img src={image1} className='w-full h-40 object-cover mb-4 rounded-md' />
            <h2 className='text-2xl text-yellow-500 mb-2'>{blog.title}</h2>
            <p className='text-sm text-yellow-700 mb-4'>{blog.date}</p>
            <p className='text-white leading-relaxed'>{blog.data}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
