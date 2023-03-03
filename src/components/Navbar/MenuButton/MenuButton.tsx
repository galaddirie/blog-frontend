import "./MenuButton.css"
import "./MenuButtonAnimation.js"

import React from 'react'
import { Navbar } from 'react-bootstrap';

export default function MenuButton() {
    return (
        /* from https://codepen.io/JakobVesely/pen/ExejoK */
        <Navbar.Toggle className="menuToggleCustomBtn" aria-controls="responsive-navbar-nav">
            <div id="burgerButton" className="fold_in">
                <div className="line outer_line" id="line1"></div>
                <div className="line inner_line" id="line2"></div>
                <div className="line outer_line" id="line3"></div>
            </div>
        </Navbar.Toggle>

        /* End of Snippet */

    )
}
