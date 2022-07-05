import React from "react";
import Card from "./card.jsx";


let arrCards = [<Card/>, <Card/>, <Card/>, <Card/>, <Card/>, <Card/>, <Card/>];

const Wallpapper = (props) => {
    return (
    <div class="mt-5">
            <div class="row d-flex justify-content-center">{arrCards}</div>
            <div class="row d-flex justify-content-center">{arrCards}</div>
            <div class="row d-flex justify-content-center">{arrCards}</div>

    </div >
    )
}

export default Wallpapper


