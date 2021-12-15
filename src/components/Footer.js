import React from 'react';
import resume from '../images/resume.pdf';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GrLinkedin } from 'react-icons/gr';
import { GrGithub } from 'react-icons/gr';
// npm install react-icons < DiJavascript />

function Footer() {
    return (
        <div class="text-center footer text-dark" >
            <a href="https://www.linkedin.com/in/derek-banister/" target="_blank" rel="noreferrer" class="icon">< GrLinkedin /></a>
            <a href="https://github.com/DerekBanister" target="_blank" rel="noreferrer" class="icon"> <GrGithub /> </a>
            <a className="button email" href={resume} download="Derek's Resume">Download Resume</a>
        </div>
    )

}

export default Footer;