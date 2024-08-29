import { createContext,useContext } from "react";

const AppContext = createContext();

const Appprovider  =  ({children})=>{
    return <AppContext.Provider value={{name:"Manoj Moktan"}}>
        {children}
    </AppContext.Provider>
}

//custom hooks
const useProductContext = ()=>{
    return useContext(AppContext);
}

export {Appprovider , AppContext, useProductContext };