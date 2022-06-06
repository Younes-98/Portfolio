import React from 'react';
import ImgReact from '../images/reactjs2.svg';
import ImgHtmlCssJs from '../images/html_css_js.svg';
import ImgCss3 from '../images/css3.svg';

import Zoom from 'react-reveal/Zoom';

import { useMediaQuery } from 'react-responsive'

const LesTechnologies = [
  {
    id: 1,
    nom: 'React.js',
    image: ImgReact,
    technologies: 'React.js, React Hooks, Redux et Context-API',
  },
  {
    id: 2,
    nom: 'HTML, CSS et JS',
    image: ImgHtmlCssJs,
    technologies: 'HTML, CSS et JavaScript',
  },
  {
    id: 3,
    nom: 'librairies CSS',
    image: ImgCss3,
    technologies: 'Tailwind-CSS, Bootstrap et SASS',
  }, 
]

const Skills = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 577px)'
  })
  return (
    <div id='skills' className='flex flex-col items-center justify-center bg-gradient-to-b from-black via-[#040008] to-[#0e1217] h-auto text-center md:pb-24 md:pt-24'>
      <h1 className='text-center text-4xl mb-16'>les Competences</h1>
      <div className='flex flex-col md:flex-row items-center justify-center gap-10 '>
        {LesTechnologies.map((technologie) => {
          const {id, nom, image, technologies} = technologie;
          return (
            <div key={id} className="card w-64 md:w-96 bg-transparent text-[#afafaf] shadow-md shadow-[#afafaf]">
                <figure className="pt-5">
                      <Zoom>
                        <figure>
                          {isDesktopOrLaptop ? (
                            <img src={image} alt="image" className="rounded-xl h-22 w-28" />
                          ) : (
                            <img src={image} alt="image" className="rounded-xl h-12 w-12" />
                          )} 
                          </figure>
                      </Zoom>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{nom}</h2>
                    <p>{technologies}</p>
                </div>
            </div>
          )
        })}
      </div>
    </div>
  )
  
}

export default Skills