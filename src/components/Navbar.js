import { MDBCollapse, MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, MDBNavLink } from "mdbreact";
import { useState } from "react";
import { NavbarBrand } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import brand from '../assets/images/brand.png'

export const Navbar = () => {

const [isopen, setIsopen] = useState(false)

return(
    <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
            <MDBNavLink exact to="/">
                <img src={brand} width="50" height="50" alt="" />
            </MDBNavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={() => setIsopen(!isopen)}/>
        <MDBCollapse id="navbarCollapse3"  isOpen={isopen} navbar>
            <MDBNavbarNav left>
                <MDBNavItem>
                    <MDBNavLink to="/soft-furniture" className="nav-link">Мягкая Мебель</ MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to="/models" className="nav-link">Модели</ MDBNavLink>
                </MDBNavItem>
            </MDBNavbarNav>
        </MDBCollapse>
    </MDBNavbar>
)
}