import React from "react";



const Fondo = (props) =>{
    return(
        <div className="mt-0">
        <h1 id="text" className="atari">Bienvenido</h1>
        <button onClick={disable}  id="btn" className="atari">Start</button>
        </div>
    )
}

function disable(){ 
    btn.remove();
    text.remove();

    /*btn.style.display = "none";
    text.style.display = "none";*/
}








export default Fondo