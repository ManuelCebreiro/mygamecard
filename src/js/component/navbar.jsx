import React from "react";
import { ArrowsMove } from 'react-bootstrap-icons';

const Navbar = (props) => {
    return (
        <nav class="navbar navbar-light bg-light border-radius 20px">
        <div class="container-fluid">
        <ArrowsMove/>
          <i class="bi bi-heart-fill"></i>

        </div>
      </nav>
    )
}

export default Navbar