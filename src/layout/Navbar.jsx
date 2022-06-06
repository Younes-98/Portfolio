import React from 'react'
// import { Link } from 'react-router-dom'
import { HashLink as Link } from "react-router-hash-link";


const Navbar = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between sticky top-0 z-10 px-8 py-6 md:px-24 bg-black text-white font-sans font-medium">
        <div className='flex-1'>LOGO</div>
        <div className='flex-none'>
            <ul className="menu menu-horizontal p-0">
             <li className='hover:text-slate-500'>
               <Link to="#home" smooth>Acceuil</Link>
             </li>
             <li className='hover:text-slate-500'>
               <Link to="#contact" smooth>Contact</Link>
             </li>
             <li className='hover:text-slate-500'>
               <Link to="#skills" smooth>Compétence</Link>
             </li>
             <li className='hover:text-slate-500'>
               <Link to="#projets" smooth>Projets</Link>
             </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar