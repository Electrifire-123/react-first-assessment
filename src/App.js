import React from 'react';
import './App.css';
import Button from './Components/Button';
import Functional from './Components/Functional';
import Claass from './Components/Claass';
import { useState } from 'react';

function App() {
const [showFunc, setShowFunc] = useState({state : false});
const [showClass, setShowClass] = useState({state : false});
const getFuncComp = () => {
    showFunc.state ? setShowFunc({state:false}) : setShowFunc({state:true})
};
const getClasscComp = () => {
  showClass.state ? setShowClass({state:false}) : setShowClass({state:true})
};
  return (
    <>
      <h1 className='heading'>Styling Using Functional and Class components</h1>
      <div className='container'>
        <div className='button_container'>
          <Button func = {() => getFuncComp()} className = "function_btn" buttonText="To see styling in functional Component"/>
          <Button func = {() => getClasscComp()} className="class_btn" buttonText="To see styling in class component"/>
        </div>
        <div>
          {showFunc.state && <Functional/>}

          {showClass.state && <Claass/>}
        </div>
      </div>
    </>
  );
}

export default App;
