import React from "react";

import { HourglassSplit, HandIndexFill } from 'react-bootstrap-icons';


const Navbar = (props) => {
    return (
      <div className="container ">
        <nav class="navbar ">
        <div class="container-fluid">
        <HourglassSplit/>
        <p className="atariscore">High Score</p>
        <HandIndexFill/>

        </div>
      </nav>
      </div>
    )
}

export default Navbar