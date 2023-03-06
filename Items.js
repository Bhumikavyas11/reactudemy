
import React from 'react'
import './Items.css';
import Date from "./Date";
function Items(props)
{
   
    
    return(
       
         <div className="expense-item">
            <Date date ={props.date}/>
            <div className="expense-item__description"></div>
           
              <h2 className="heading-style"> {props.title}</h2>
              <div className="expense-item__price">Rs{props.amount}</div>
           

    
        </div>
     
    );
}





export default Items

