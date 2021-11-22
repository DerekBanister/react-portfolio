import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';

const styles = {
    techs: {
        height: "80px",
    }
}

function Techs() {
    return (
        <div class="card-columns" style={styles.techs}>

            <div class="card text-center techs" style={styles.techs}>
                <div class="card-body">
                    <h5 class="card-title">HTML5</h5>
                    <p class="card-text"></p>
                </div>
            </div>
            <div class="card text-center techs" style={styles.techs}>
                <div class="card-body">
                    <h5 class="card-title">CSS</h5>
                    <p class="card-text"></p>
                </div>
            </div>
            <div class="card text-center techs" style={styles.techs}>
                <div class="card-body">
                    <h5 class="card-title">JAVASCRIPT</h5>
                    <p class="card-text"></p>
                </div>
            </div>
            <div class="card text-center techs" style={styles.techs}>
                <div class="card-body">
                    <h5 class="card-title">MYSQL</h5>
                    <p class="card-text"></p>
                </div>
            </div>
            <div class="card text-center techs" style={styles.techs}>
                <div class="card-body">
                    <h5 class="card-title">NODE.JS</h5>
                    <p class="card-text"></p>
                </div>
            </div>
            <div class="card text-center techs" style={styles.techs}>
                <div class="card-body">
                    <h5 class="card-title">React.JS</h5>
                    <p class="card-text"></p>
                </div>
            </div>
        </div>
    )
}

export default Techs;