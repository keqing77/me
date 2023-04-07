import React from 'react'
import { Icon } from '@iconify/react';

const projects = [
  {
    title: 'one last image',
    description: 'A eva picture generator',
    link: 'https://lab.magiconch.com/one-last-image/',
    logo: 'twemoji:cat',
    tags: ['JavaScript', 'css']
  },
  {
    title: 'My Personal Site',
    description: 'A personal site built by react18',
    link: 'https://github.com/lalalavard/me',
    logo: 'twemoji:frog',
    tags: ['react', 'unocss']
  },
  {
    title: 'My Blog',
    description: 'Just for record',
    link: 'keqingblog.netlify.app',
    logo: 'twemoji:man-technologist-medium-skin-tone',
    tags: ['react', 'tailwindcss']
  }
]


const Project = () => {

  const ProjectList = projects.map(({title,tags,description,link,logo}, index) => {
    return (
      <React.Fragment key={index}>
         <a 
            className="block rounded-md social-item-bg-color px-4 py-3 my-4 flex font-[Cute] cursor-pointer decoration-none op-90 transition-colors decoration-none ease-linear duration-200" 
            target="_blank"
            key={index}
            href={link}
          >
            <div>
              <div className="flex items-center flex-wrap">
                <h3 className="title-color text-md mr-2">{title}</h3>
                <div className="h-8 flex items-center" key={index}>
                  {tags.map( (tag:any,index:number) => <span className="border-1 border-solid rounded text-sm h-4 leading-4 px-1 5 mr-2 bg-light-900 " 
                  key={index} >{ tag }</span> )}
                </div>
              </div>
              <p className="text-color text-sm mt-2">{ description }</p>
            </div>
            <span className="flex-1"></span>
            <Icon  icon={logo} width="47"  />
          </a>
    </React.Fragment>
    )
  } )

  return (
    <div className="mt-5">
    <div className="flex">
      <h2 className="font-[Cute] mt-5 title-color text-3xl">Projects</h2>
      <span className="flex-1"></span>
      <a href="https://github.com/lalalavard" target="_blank" className="decoration-none text-gray-7">
      <Icon icon="akar-icons:arrow-up-right" width="30" className="mt-5"/>
      </a>
    </div>
    <div>
       {ProjectList}
    </div>
  </div>
  )
}

export default Project
