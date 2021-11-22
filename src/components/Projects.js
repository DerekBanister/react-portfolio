import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';

const styles = {
    cardDeck: {
        margin: "10px",
        display: "flex",
        justifyContent: "center"
    }
}

function Projects() {
    return (
        <div class="card-deck" style={styles.cardDeck}>
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title">TV Remote</h2>
                    <a class="card-text" href="https://github.com/DerekBanister/tvremote" target="_blank">
                        Github
                        Repo</a>
                    {/* add project link here */}
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title">Tech Blog</h2>
                    <a class="card-text" href="https://github.com/DerekBanister/MVC-tech-blog" target="_blank">
                        Github
                        Repo</a>
                    {/* add project link here */}
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title">Dungeon Runner</h2>
                    <a class="card-text" href="https://github.com/DerekBanister/fullstack-browser-game" target="_blank">
                        Github
                        Repo</a>
                    {/* add project link here */}
                </div>
            </div>
        </div>
    )
}

export default Projects;