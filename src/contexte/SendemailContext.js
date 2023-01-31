import React, { createContext, useState } from 'react'

export const SendemailContexte = createContext();

const SendemailProvider = ({children}) => {
    const [donnees, setDonnees] = useState({
        firstname: "",
        lastname: "",
        email: "",
        objet: "",
        message: "",
        city: "",
    })
    return (
        <SendemailContexte.Provider value={
            {
                donnees, setDonnees
            }
        }>
            {children}
        </SendemailContexte.Provider>
    )
}

export default SendemailProvider