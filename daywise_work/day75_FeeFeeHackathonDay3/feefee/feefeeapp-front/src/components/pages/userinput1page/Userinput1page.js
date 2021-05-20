import React from 'react';
// import './userinput1page.css';

export default function Userinput1page({userInputs, handleInputChange}) {
  
  //Need the emotion name from the API call.

  const emotionNamePlaceholder = "Happy"



  return (
    <div>
        <h3>I feel {emotionNamePlaceholder}</h3>
        <h3>when</h3>
        <input name={0} value={userInputs[0].text} onChange={handleInputChange} type="text" />
        <h3>because</h3>
        <input name={1} value={userInputs[1].text} types="text" />
    </div>
  // <div> 
  //   <div class="centered">
  //     {/* We will have to add the interpolation for the emotion below */}
  //     {/* <h1 id="inputs">I feel {emotion.name}</h1> */}
  //     <h1 id="inputs">I feel yuck </h1>
  //     <br />
  //     <div class="flex-space-between">
  //       <h1>When</h1><input type="text"></input>
  //     </div>
  //     <br />
  //     <div class="flex-space-between">
  //       <h1>because</h1>
  //       <input type="text"></input>
  //     </div>
  //   </div>
  // </div>
  );
};