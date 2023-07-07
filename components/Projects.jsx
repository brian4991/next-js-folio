import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import trelloImg from '../public/assets/projects/trello.png';
import dashboardImg from '../public/assets/projects/dashboard.png'
import weatherappImg from '../public/assets/projects/weather-app.png'
import carHubImg from '../public/assets/projects/carhub.png'
import ProjectItem from './Project';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Trello 2.0'
            backgroundImg={trelloImg}
            projectUrl='/trello'
            tech='React JS / Nest js'
          />

          <ProjectItem
            title='CarHub'
            backgroundImg={carHubImg}
            projectUrl='/carhub'
            tech='React JS / API'

          />
        
          <ProjectItem
            title='Weather App'
            backgroundImg={weatherappImg}
            projectUrl='/weather_app'
            tech='React JS'

          />

          <ProjectItem
            title='DashBoard App'
            backgroundImg={dashboardImg}
            projectUrl='/dashboard'
            tech='React JS'

          />
          
        </div>
      </div>
    </div>
  );
};

export default Projects;