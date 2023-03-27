import React from 'react';
import SlotM from "./SlotMachine";

const App = () => {
return (
  <>
  <h1 className='heading_style'> 🎰 Welcome to 
    <span> Slot Machine Game 🎰</span>
  </h1>
  <div className='slot_machine'>
    <SlotM x="😄" y="😄" z="😄" />
    <hr/>

    <SlotM x="🍎" y="🍌" z="🍎" />
    <hr/>
    
    <SlotM x="✋" y="✋" z="✋" />
    <hr/>
  </div> 
  </>
)
}


export default App;
