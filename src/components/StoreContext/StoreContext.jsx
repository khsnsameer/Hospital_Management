import { createContext } from "react"
import specialization_people, { specialization_list } from "../../Assets/Assets"
export const StoreContext =createContext(null)

const StoreContextProvider =(props) =>{

    const ContextValue ={
        specialization_list,
        specialization_people
    }
    return(
        <StoreContext.Provider value={ContextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;