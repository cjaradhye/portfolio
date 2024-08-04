import React from "react";

function Intro(){
    return(
        <div className="myPage">
            <div className="introDiv"><img className="myPic" src="./images/my-pic.png"></img></div>
            <div className="introDiv">
                
                <p>Hi, my <span className="redSpan">name</span> is</p>
                <p className="myName">Aradhye</p>
            </div>
        </div>
    )
}

export default Intro;