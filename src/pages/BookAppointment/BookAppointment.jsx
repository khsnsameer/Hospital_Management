import React, { useContext ,useState} from "react";
import "./BookAppointment.css"
import { StoreContext } from "../../components/StoreContext/StoreContext";
import Specialization_item from "../../components/Specialization_item/Specialization_item"; 
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
 export const BookAppointment = () =>{
      const {specialization_people}=useContext(StoreContext);
      const [category,setcategory]=useState("ALL");
      return(
        <div>
            <ExploreMenu category={category} setcategory={setcategory}/>
            <div className="Specialization-display" id="Specialization-display">
                <div className="Specialization-display-list">
                    {specialization_people.map((item,index) =>{
                        if(category==="ALL"||category===item.specialist_category){
                        return <Specialization_item key={index} specialist_name={item.specialist_name} specialist_image={item.specialist_image}/>
                        }
                        else {
                           return<></>
                        }
                    })}
                </div>
            </div>
        </div>
      )
 } 
 export  default BookAppointment;

