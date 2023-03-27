import React from "react";

const SlotNotMatch = (props) => {
    return (
        <>
            <div className='slot_inner'>
            <h3>{props.x} {props.y} {props.z}</h3>
            <h3>This is not matched</h3>         
            </div>
        </>
      )
  }

  export default SlotNotMatch;