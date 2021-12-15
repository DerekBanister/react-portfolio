import React from 'react';
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
            {/* <a href="../images/DereksResume.pdf" target="_blank" class="button email">Download My Resume</a> */}

            <a href="../../public/resume/resume.pdf" class="button email" download>Download My Resume</a>
        </div>
    )

}












export default Footer;