import React, { useState } from 'react';
import QuestionData from './Tandem.json';
import Question from "./components/Answers/Answers";

function App() {
  //Shuffle questions imported from JSON file and use slice to save first 10 questions.
  // https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array
const shuffled = QuestionData.sort(() => 0.5 - Math.random()).slice(0, 10);

  //Manages question selected in a state  
  const [question, updateQuestion] = useState(shuffled);
  
  return (
    <div className="App">
        <Question question={question}></Question>
    </div>
  );
}

export default App;
