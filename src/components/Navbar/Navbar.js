import React from "react";
import "./Navbar.css"

export default function Navbar(){
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="#">Kanban</a>
            </div>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="navbar-buttons">
                <a href="#login" className="btn btn-login">Login</a>

                <a href="#signup" className="btn btn-signup">Sign Up</a>
            </div>
        </nav>
    );
}