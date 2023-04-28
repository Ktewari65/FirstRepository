import React, {useState}from 'react';
import Forms from './Forms';
import FormList from './FormList';
//import Card from './Card';


function App(props) {
  const[form,setForm] = useState([])


  const ComingFormData = (data) =>{
 setForm((form)=>{
return [...form,data]
 }) 

//console.log(form)
//<FormList  users={[form]}/>
  }

  return (
    <div>
        <Forms formData= {ComingFormData}/>
        <FormList  users={form}/>
        </div>
  );
}

export default App
