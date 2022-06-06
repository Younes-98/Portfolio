import React from 'react';
import Image from '../images/img5.jpg';

import Typical from 'react-typical';
// import { Link } from 'react-router-dom';

import { HashLink as Link } from "react-router-hash-link";
import Roll from 'react-reveal/Roll';


const Home = () => {
  return (
    <>
    <div id='home' style={{backgroundImage: `url(${Image})`}} className="relative w-full h-screen bg-cover bg-no-repeat bg-center" >
        <div className='absolute h-full w-full mx-auto text-center text-white bg-gradient-to-b from-black pt-60 leading-[60px]'>
            <Roll left cascade>
              <h1 className="font-bold text-base md:text-4xl"> Bomjour, mon nom est <span className="text-[greenyellow] uppercase inline-block">Younes EL MOUATASIM</span></h1>
            </Roll> 
            <h3 className='mt-6 font-bold text-3xl text-[greenyellow]'>
              <Typical steps={['I am', 1000, 'I am Developer', 2000, 'I am', 1000, 'I am Searcher', 2000]} loop={Infinity} wrapper="p"/>
            </h3>       
            <Link to="#contact" smooth>
              <button className="btn bg-transparent hover:bg-transparent border-2 border-white px-10 mt-12">
                Envoyer moi un message
              </button>
            </Link>  
        </div>
    </div>
    </>
  )
}

export default Home