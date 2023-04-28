 
 import React from "react";
 //import Forms from "./Forms";
  const FormList = (props) =>{
   console.log(props)

     return(
        <div>
        
          <ul>
         {props.users.map((user) => (
           <li key={user.id}> 
            {user.name}
            {user.age}
            </li>
           ))}
           </ul>  
          
         

        </div>
     )

   
     
  }

  export default FormList
