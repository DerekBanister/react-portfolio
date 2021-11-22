// 21 react style

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';

const styles = {
    name: {
        color: "white",
        padding: "5px",
        marginBottom: "0px",
        marginTop: "0px",
    },
    links: {
        fontSize: "15px",
        padding: "0px",
        opacity: "0.9",
        color: "white",
        textDecoration: "underline",
        fontWeight: "bold",
        justifyContent: "right",
    },
    aspire: {
        fontStyle: "italic",
        opacity: "0.8",
        fontSize: "20px",
    }
}

function Navbar() {
    let url = "https://www.linkedin.com/in/derek-banister/"
    let url2 = "https://github.com/DerekBanister"
    return (
        <div style={styles.name} class="navbar navbar-light">
            <h1 class="duck">
                <span>Derek Banister</span>
                <small style={styles.aspire}>Full Stack Web Developer</small>
            </h1>
            <a href={url} target="_blank" style={styles.links}>LinkedIn</a>
            <a href={url2} target="_blank" style={styles.links}>Github</a>
        </div>
    )
}

export default Navbar;