import React from "react";



const BtnIntro = ({funcion}) =>{
    return(
        <div className="mt-0">
        <h1 id="text" className="atari">Bienvenido</h1>
        <button onClick={()=>funcion(true)}  id="btn" className="atari">Start</button>
        </div>
    )
}

// function disable(){ 
//     btn.remove();
//     text.remove();}


export default BtnIntro