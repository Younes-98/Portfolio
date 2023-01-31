import React from 'react';
import ImgReact from '../images/reactjs2.svg';
import ImgHtmlCssJs from '../images/html_css_js.svg';
import ImgTailwindCss from '../images/tailwindcss-icon.svg';
import Zoom from 'react-reveal/Zoom';

import { useMediaQuery } from 'react-responsive'


const LesSites = [
  {
    id: 1,
    nom: 'Fake Store API',
    image: ImgReact,
    categorie: 'E-commerce',
    technologies: 'React.js, Redux, CSS et Bootstrap',
    lien: 'https://yons-ecom-cloths.netlify.app/',
  },
  {
    id: 3,
    nom: 'Portfolio, Envoyer un message',
    image: ImgReact,
    categorie: 'Vitrine',
    technologies: 'React.js, context-API, EmailJs et Tailwind-CSS',
    lien: '/',
  }, 
  {
    id: 2,
    nom: 'API Github',
    image: ImgTailwindCss,
    categorie: 'Vitrine',
    technologies: 'React.js, Context-API et Tailwind-CSS',
    lien: 'https://yons-github.netlify.app/',
  },
  {
    id: 4,
    nom: 'Argan et Amlo',
    image: ImgHtmlCssJs,
    categorie: 'Vitrine',
    technologies: 'HTML et CSS',
    lien: 'https://elm-yones.netlify.app/index.html',
  },
]

const Projects = () => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 577px)'
  })
  
  return (
      <div id="projets" className='flex flex-col items-center p-8 h-full w-full mx-auto text-center text-white bg-gradient-to-b from-[#0e1217] via-[#0e1217] to-black '>
          <h1 className='flex-none mb-6 border-t-4 border-t-[#afafaf] px-12 pt-4'>Les Projets</h1>
          <div className='flex-1 grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-rows-2 items-center'>
            {LesSites.map((site) => {
              const {id, nom, image, categorie, technologies, lien} = site;
              return (  
                  <div key={id} className="card card-side w-98 bg-[#1c1f26]">
                    {/* <Zoom>
                    <figure>
                      {isDesktopOrLaptop ? (
                        <img src={image} alt="image" className="rounded-xl ml-6 h-22 w-28" />
                      ) : (
                        <img src={image} alt="image" className="rounded-xl ml-6 h-12 w-12" />
                      )} 
                      </figure>
                    </Zoom> */}
                    <div className="card-body items-center text-center">
                    {isDesktopOrLaptop ? (
                        <>
                          <h2 className="card-title">{nom}</h2>
                          <h4 className="card-title">{categorie}</h4>
                          <p>{technologies}</p> 
                        </>) : (
                        <>
                          <h5 className="card-title text-[15px]">{nom}</h5>
                          <p className="card-title text-[13px]">{categorie}</p>
                          <p className='text-[10px]'>{technologies}</p>
                        </>
                      )
                    }
                      <div className="card-actions">
                        <a className="badge badge-outline" target="_blank" href={lien}>Lien</a>
                      </div>
                    </div>
                  </div>   
              )
            })}
          </div>
      </div>
  )
}

export default Projects