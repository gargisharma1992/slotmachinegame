import React from "react";

const SlotMatch = (props) => {
  return (
    <>
      <div className='slot_inner'>
    <h3>{props.x} {props.y} {props.z}</h3>
    <h3>This is matched</h3>
 
  </div>
    </>
  )
  }

  export default SlotMatch;