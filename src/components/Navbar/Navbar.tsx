import "./Navbar.css"

import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import MenuButtonToggle from "./MenuButton/MenuButton.jsx";

import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link, NavLink } from "react-router-dom";
function BlogNav() {

    return (

        <Navbar collapseOnSelect expand="lg" variant="light">
            <Container fluid className="d-flex mx-0" >
                <Navbar.Brand><Link className="nav-link " to={`/`}><span>[im_galad]</span></Link></Navbar.Brand>

                <Navbar className="order-lg-1 ms-auto me-3 d-flex">
                    <Nav className="nav-icon-container" >
                        <Nav.Link className="nav-icon me-3" href="https://twitter.com/im_galad">
                            <i className="bi bi-twitter"></i>
                        </Nav.Link>
                        <Nav.Link className="nav-icon" href="https://discord.com/">
                            <i className="bi bi-discord"></i>
                        </Nav.Link>
                    </Nav>
                </Navbar>

                <MenuButtonToggle />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to={`/`} className={`item-underline-container nav-link me-3 ${({ isActive }: any): string => isActive ? "active" : "inactive"} `} >
                            <span className="nav-link p-0"> Home </span>
                            <div className="item-hover-underline"></div>
                        </NavLink>
                        <NavLink to={`/blog`} className={`item-underline-container nav-link me-3 ${({ isActive }: any): string => isActive ? "active" : "inactive"} `} >
                            <span className="nav-link p-0"> Blog </span>
                            <div className="item-hover-underline"></div>
                        </NavLink>
                        <NavLink to={`/portfolio`} className={`item-underline-container nav-link me-3 ${({ isActive }: any): string => isActive ? "active" : "inactive"} `} >
                            <span className="nav-link p-0"> Portfolio </span>
                            <div className="item-hover-underline"></div>
                        </NavLink>
                        <a href={`https://im-galad.gumroad.com/`} target="_blank" rel="noreferrer" className={`item-underline-container nav-link me-3 ${({ isActive }: any): string => isActive ? "active" : "inactive"} `} >
                            <span className="nav-link p-0"> shop </span>
                            <div className="item-hover-underline"></div>
                        </a>


                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar >

    )
}


export default BlogNav
