import { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext() 

const LanguageProvider = ({children})=>{
    const [lng, setLng] = useState("en")

    useEffect(()=>{
        localStorage.setItem("curLng", lng)
    }, [])

    return (
        <LanguageContext.Provider value={{lng, setLng}}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider