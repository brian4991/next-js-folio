import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import Firebase from '../public/assets/skills/firebase.png';
import NextJS from '../public/assets/skills/nextjs.png';
import Vercel from '../public/assets/skills/vercel.png';



const skills = [
  { name: 'HTML', image: Html },
  { name: 'JavaScript', image: Javascript },
  { name: 'React', image: ReactImg },
  { name: 'Tailwind', image: Tailwind },
  { name: 'Firebase', image: Firebase },
  { name: 'Github', image: Github },
  { name: 'Next', image: NextJS },
  { name: 'Vercel', image: Vercel },
];

const SkillItem = ({ name, image }) => {
  return (
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
          <Image src={image} width='64' height='64' alt={name} />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div id='skills' className='w-full  lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='py-4 grid grid-cols-2 lg:grid-cols-4 gap-8'>
          {skills.map((skill) => (
            <SkillItem key={skill.name} name={skill.name} image={skill.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
