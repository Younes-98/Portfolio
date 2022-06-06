import React, { useEffect, useState } from 'react'
import { SendemailContexte } from '../contexte/SendemailContext';
import { useContext } from 'react';

import sendEmail from '../sendEmail';
import phoneImg from '../images/contacts/phone.png';
import messageImg from '../images/contacts/message.png';
import locationImg from '../images/contacts/location.png';
import Alert from '../layout/Alert';

const Form = () => {
    const [loading, setLoading] = useState(true);
    const [showAlert, setShowAlert] = useState(false);
    const {donnees, setDonnees} = useContext(SendemailContexte);

    useEffect(() => {
        if(donnees.objet === '' || donnees.firstname === '' || donnees.lastname === '' || donnees.email === '' || donnees.city === '' || donnees.message === '') { 
            setLoading(true)
        } else { 
            setLoading(false)
        };
    }, [donnees])

    const handleChange = (e) => {
        setDonnees(prev => ({ ...prev, [e.target.name]: e.target.value }))
        e.preventDefault()
    }

    const onsubmit = (e) => {
        e.preventDefault()
        
        setShowAlert(true)
        setTimeout(() => {
            setShowAlert(false)
          }, 3000);
        sendEmail(donnees.objet, donnees.firstname, donnees.lastname, donnees.email, donnees.city, donnees.message);
        setDonnees({
            firstname: "",
            lastname: "",
            email: "",
            objet: "",
            message: "",
            city: "",
        })
    }


    const contacts = [
        {
            id: 1,
            image: phoneImg,
            titre: 'Phone',
            valeur: '+212631585540',
        },
        {
            id: 2,
            image: messageImg,
            titre: 'Email',
            valeur: 'Younes@gnail.com',
        },
        {
            id: 3,
            image: locationImg,
            titre: 'Adresse',
            valeur: '67 Mouisset Agadir',
        }
    ]
    
  return (
    <div id="contact" className='grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-4 p-5 bg-gradient-to-b from-[#161616] via-[#0e1217] to-black'>
        <form className="w-full m-auto px-6" onSubmit={onsubmit}>
            {(showAlert) ? (<Alert />) : (<></>)}
            <h2 className='text-2xl sm:text-4xl text-center text-[#afafaf] mb-10'>Veuillez utiliser le formulaire ci-dessous pour nous contacter</h2>
            {/* <div className="badge badge-ghost mb-5 text-center">Veuillez utiliser le formulaire ci-dessous pour nous contacter</div> */}
            <div className="flex flex-wrap -mx-3 mb-6 text-white">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-first-name">
                        First Name*
                    </label>
                    <input name='firstname' className="appearance-none block w-full border border-white bg-transparent rounded py-3 px-4 mb-3 leading-tight" id="grid-first-name" type="text" placeholder="Jane" value={donnees.firstname} onChange={handleChange}/>
                    {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                </div>
                <div className="w-full md:w-1/3 px-3">
                    <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-last-name">
                        Last Name*
                    </label>
                    <input name='lastname' className="appearance-none block w-full border border-white bg-transparent rounded py-3 px-4 leading-tight focus:border-black" id="grid-last-name" type="text" placeholder="Doe" value={donnees.lastname} onChange={handleChange} />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-city">
                        Ville
                    </label>
                    <input name='city' className="appearance-none block w-full border border-white bg-transparent rounded py-3 px-4 leading-tight focus:border-gray-500" id="grid-city" type="text" placeholder="Agadir" value={donnees.city} onChange={handleChange}/>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 text-white">
                    <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-email">
                        Gmail*
                    </label>
                    <input name='email' className="appearance-none block w-full border border-white bg-transparent rounded py-3 px-4 mb-3 leading-tight focus:border-gray-500" id="grid-email" type="email" placeholder="Gmail" value={donnees.email} onChange={handleChange}/>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 text-white">
                    <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-objet">
                        Objet*
                    </label>
                    <input name='objet' className="appearance-none block w-full border border-white bg-transparent rounded py-3 px-4 mb-3 leading-tight focus:border-neutral-content" id="grid-objet" type="text" placeholder="Objet" value={donnees.objet} onChange={handleChange}/>
                </div>
                <div className="w-full px-3 text-white ">
                    <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-message">
                        Message*
                    </label>
                    <textarea name='message' rows={5} cols={5} className="appearance-none block w-full border border-white bg-transparent rounded py-3 px-4 mb-3 leading-tight focus:border-gray-500" id="grid-message" placeholder="Tapez votre message" value={donnees.message} onChange={handleChange} />
                </div>
            </div>
            <button type='submit' className='btn btn-outline w-full text-success mt-2 disabled:opacity-75' disabled={loading}>
                Envouyer
            </button>
        </form>
        <div className='relative text-center my-auto'>
        <div className='absolute top-0 left-0 h-full bg-gray-100 filter blur mix-blend-multiply'></div>
            <h1 className='m-auto text-4xl text-[#afafaf] my-10'>Contact INFO</h1>
            <div className='relative flex flex-col items-center justify-center'>
                {contacts.map((contact) => {
                    const {id, image, titre, valeur} = contact;
                    return (
                        <div key={id} className="card w-[350px] h-[180px] my-2 mx-6 bg-transparent text-white drop-shadow-2xl border-2 border-white">
                            <h2 className="card-title mx-auto my-1">{titre}</h2>
                            <figure><img src={image} alt="Shoes" className='w-20 h-20'/></figure>
                            <div className="card-body">
                                <div className="card-actions justify-between">
                                    <div className="badge badge-outline gap-2">
                                        info
                                    </div>
                                    <div className="badge badge-outline">
                                        {valeur}
                                    </div>
                                </div>
                            </div>
                        </div>)
                })}
            </div>
        </div>
    </div>
  )
}

export default Form