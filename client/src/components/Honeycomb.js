import React from "react";
import Layer1 from "./layers/Layer1";
import Layer2 from "./Layer2";


function Honeycomb(){
    return(
    <div className="honeycomb">
        <Layer1 />
        <Layer2 />
    </div>)
}

export default Honeycomb;