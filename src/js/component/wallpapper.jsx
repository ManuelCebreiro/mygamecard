import React from "react";
import Card from "./card.jsx";
import Navbar from "./navbar.jsx";


let arrCards = [<Card/>, <Card/>, <Card/>, <Card/>, <Card/>, <Card/>, <Card/>];

const Wallpapper = (props) => {
    return (
    <div>
        <Navbar/>
    <div class="mt-5">
            <div class="row d-flex justify-content-center">{arrCards}</div>
            <div class="row d-flex justify-content-center">{arrCards}</div>
            <div class="row d-flex justify-content-center">{arrCards}</div>

    </div >
    </div>
    )
}

export default Wallpapper


