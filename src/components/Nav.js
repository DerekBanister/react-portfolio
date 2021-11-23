// 21 react style

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a
                    href="#home"
                    onClick={() => handlePageChange('Home')}
                    className={currentPage === 'Techs' ? 'nav-link active' : 'nav-link'}
                >
                    About
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#techs"
                    onClick={() => handlePageChange('Techs')}
                    className={currentPage === 'Techs' ? 'nav-link active' : 'nav-link'}
                >
                    My skillset
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
