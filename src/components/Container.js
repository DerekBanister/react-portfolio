import React, { useState } from 'react';
import Nav from './Nav';
import About from './About';
import Techs from './Techs';
import Projects from './Projects';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <About />;
        }
        if (currentPage === 'Techs') {
            return <Techs />;
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
    };
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {/* // TODO: Add a comment describing what we are passing as props */}
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* // TODO: Add a comment explaining what is happening on the following line */}
            {renderPage()}
        </div>
    );
}

