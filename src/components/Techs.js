import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import html from "../images/html.png"
import css from "../images/css.png"
import js from "../images/js.png"
import sql from "../images/mysql.png"
import node from "../images/node.png"
import react from "../images/react.png"

const styles = {
    techs: {
        height: "300px",
    },
    images: {
        width: "90%",
        height: "20vh",
    }
}

function Techs() {
    return (
        <div class="card-columns" style={styles.techs}>

            <div class="card text-center techs" style={styles.techs}>
                <div class="card-body">
                    <h5 class="card-title">HTML5</h5>
                    <img style={styles.images} src={html} alt="html" />
                </div>
            </div>
            <div class="card text-center techs" style={styles.techs}>
                <div class="card-body">
                    <h5 class="card-title">CSS</h5>
                    <img style={styles.images} src={css} alt="css" />
                </div>
            </div>
            <div class="card text-center techs" style={styles.techs}>
                <div class="card-body">
                    <h5 class="card-title">JAVASCRIPT</h5>
                    <img style={styles.images} src={js} alt="js" />
                </div>
            </div>
            <div class="card text-center techs" style={styles.techs}>
                <div class="card-body">
                    <h5 class="card-title">MYSQL</h5>
                    <img style={styles.images} src={sql} alt="mysql" />
                </div>
            </div>
            <div class="card text-center techs" style={styles.techs}>
                <div class="card-body">
                    <h5 class="card-title">NODE.JS</h5>
                    <img style={styles.images} src={node} alt="node" class="card-img-top" />
                </div>
            </div>
            <div class="card text-center techs" style={styles.techs}>
                <div class="card-body">
                    <h5 class="card-title">React.JS</h5>
                    <img style={styles.images} src={react} alt="react" />
                </div>
            </div>
        </div>
    )
}

export default Techs;