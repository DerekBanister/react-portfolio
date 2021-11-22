import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import tvremote from "../images/popcorn1.gif"
import dungrunner from "../images/dungrunner.gif"
import ttb from "../images/ttb1.png"

const styles = {
    cardDeck: {
        margin: "10px",
        display: "flex",
        justifyContent: "center"
    },
    images: {
        width: "90%",
        height: "30vh",
        objectFit: "cover"
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
                    <img style={styles.images} src={tvremote} alt="project1" class="card-img-top" />
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
                    <img style={styles.images} src={ttb} alt="TechBlog" class="card-img-top" />
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title">Dungeon Runner</h2>
                    <a class="card-text" href="https://github.com/DerekBanister/fullstack-browser-game" target="_blank">
                        Github
                        Repo</a>
                    {/* add project link here */}
                    <img style={styles.images} src={dungrunner} alt="DungRunner" class="card-img-top" />
                </div>
            </div>
        </div>
    )
}

export default Projects;