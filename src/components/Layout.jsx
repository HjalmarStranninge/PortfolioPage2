import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <header className={`header ${menuOpen ? 'open' : ''}`}>
                <NavLink to="/" className="logo">Hjalmar.</NavLink>

                <nav className="desktop-navbar">
                    <NavLink to="/" exact activeClassName="active" onClick={closeMenu}>Home</NavLink>
                    <NavLink to="/about" activeClassName="active" onClick={closeMenu}>About</NavLink>
                    <NavLink to="/skills" activeClassName="active" onClick={closeMenu}>Skills</NavLink>
                    <NavLink to="/projects" activeClassName="active" onClick={closeMenu}>Projects</NavLink>
                    <NavLink to="/experience" activeClassName="active" onClick={closeMenu}>Experience</NavLink>
                </nav>

                <div id="hamburger" role="navigation" onClick={toggleMenu}>
                    <div id="menuToggle" className={menuOpen ? 'open' : ''}>
                        <input type="checkbox" checked={menuOpen} readOnly />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu">
                            <li><NavLink to="/" exact activeClassName="active" onClick={closeMenu}>Home</NavLink></li>
                            <li><NavLink to="/about" activeClassName="active" onClick={closeMenu}>About</NavLink></li>
                            <li><NavLink to="/skills" activeClassName="active" onClick={closeMenu}>Skills</NavLink></li>
                            <li><NavLink to="/projects" activeClassName="active" onClick={closeMenu}>Projects</NavLink></li>
                            <li><NavLink to="/experience" activeClassName="active" onClick={closeMenu}>Experience</NavLink></li>
                        </ul>
                    </div>
                </div>
            </header>

            <Outlet />

            <div className="home-sci">
                <a href="#"><i className='bx bxl-linkedin'></i></a>
                <a href="https://github.com/HjalmarStranninge"><i className='bx bxl-github'></i></a>
            </div>
        </>
    );
};

export default Layout;
