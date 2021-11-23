import React, { useState } from 'react';
import Nav from './Nav';
import About from './About';
import Techs from './Techs';
import Projects from './Projects';
import Contact from './Contact'
import Footer from './Footer'
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
        if (currentPage === 'Contact') {
            return <Contact />;
        }
    };
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
}

