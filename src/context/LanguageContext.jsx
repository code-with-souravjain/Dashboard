import { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext() 

const LanguageProvider = ({children})=>{
    const [lng, setLng] = useState(
        localStorage.getItem("curLanguage") || "en"
    );

    useEffect(()=>{
        localStorage.setItem("curLanguage", lng)
    }, [lng])

    return (
        <LanguageContext.Provider value={{lng, setLng}}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider