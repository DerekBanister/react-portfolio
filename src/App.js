//import here
import React from 'react';
import Navbar from './components/Nav';
import About from './components/About';
import Techs from './components/Techs';
import Projects from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Navbar />
            <About />
            <Techs />
            <br />
            <Projects />
            {/* <Footer />  */}
        </div>
    );
}

export default App;
