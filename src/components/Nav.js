// 21 react style

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';

function NavTabs({ currentPage, handlePageChange }) {
    return (

        <ul className="nav nav-tabs">
            <h1 class="duck">
                <span id="derek">Derek Banister</span>
                <small class="text-light aspire">Full Stack Web Developer</small>
            </h1>
            <li className="nav-item ">
                <a
                    href="#home"
                    onClick={() => handlePageChange('Home')}
                    className={currentPage === 'Techs' ? 'nav-link active' : 'nav-link'}
                >
                    Home
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#techs"
                    onClick={() => handlePageChange('Techs')}
                    className={currentPage === 'Techs' ? 'nav-link active' : 'nav-link'}
                >
                    My Skills
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#projects"
                    onClick={() => handlePageChange('Projects')}
                    className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                >
                    Projects
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </a>
            </li>
        </ul>
    );
}

export default NavTabs;
