import React from "react";
import SlotMatch from "./SlotMatch";
import SlotNotMatch from "./SlotNotMatch";

const SlotM = (props) => {
    let x = props.x;
    let y = props.y;
    let z = props.z;
    
    if(x===y && y===z) {
      return (
        <SlotMatch x= {x} y= {y} z ={x} />
      )
    } else {
      return (
        <SlotNotMatch x= {x} y= {y} z ={x}  />
      )
    }
  }

  export default SlotM;