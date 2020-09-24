import React , { useState, useEffect } from 'react';
import Hello from "./components/Hello.js";
import Hello2 from "./components/Hello2.js";

function App() {

  const [daters, setDaters] = useState([]);

  const [formInputs, updateFormInputs] = useState({
    name: '',
    starsign: '',
    age: '',
    img: '',
    ltl: ''
  });


  const getDaters = async () => {
      try {
        const response = await fetch('http://localhost:3000/users')
        const data = await response.json()
        setDaters(data)
       } catch(error){
         console.error(error)
       }
     } 
      useEffect(()=>{
       (
       async function (){
       await getDaters()
       }
       )()
       },[])

       const handleChange = (event) => {
        const updateInput = Object.assign({}, formInputs, { [event.target.id]: event.target.value })
        updateFormInputs(updateInput)
      }
    
      const handleSubmit  = async (event) =>{
        event.preventDefault()
        try{
          const response = await fetch('http://localhost:3000/users', {
            body: JSON.stringify(formInputs),
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            }
          })
          const data = await response.json()
          updateFormInputs({
            name: '',
            change: '',
            gender: '',
            img: ''
          })
          console.log(data)
        }catch(error){
          console.error(error)
        }
      }

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h4>Dating App </h4>
        </div>
        <div className="mains">
        <h4>Dating App </h4>
        <h4>Dating App </h4>
        </div>
        <div className="leftside">
        <Hello daters={daters}/>
        </div>
        <div className="rightside">
        <Hello2 daters={daters}/>

        </div>
        <div className="footer">
        
        <form onSubmit={handleSubmit}>
            <input type="text" id="name" placeholder="Name" onChange={handleChange}/>
            <input type="text" id="age" placeholder="age"onChange={handleChange}/>
            <input type="text" id="gender" placeholder="gender"onChange={handleChange}/>
            <input type="text" id="img" placeholder="img"onChange={handleChange}/>
            <input type="submit" className="submit" />
          </form>

        </div>
      </div>
      
    </div>
  );
}

export default App;
