import { createContext } from "react";


export const storeContext=createContext(null);

const storeContextProvider = (props) =>{
   



    
    const contextValue ={
         
    }
    return(
        <storeContext.Provider value={contextValue}>
            {props.children}
        </storeContext.Provider>
    )
}
export default storeContextProvider;