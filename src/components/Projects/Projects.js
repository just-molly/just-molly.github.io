import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import microlearning from "../../assets/projects/microlearning.png";
import itrust from "../../assets/projects/iTrust2.png";
import coffeemaker from "../../assets/projects/coffee-maker.png";
import minitennis from "../../assets/projects/mini-tennis.png"

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    Projects
                </h1>
                <Row className="project-row">
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={microlearning}
                            isBlog={false}
                            title="Microlearning for Staff"
                            description="A video streaming platform designed to support organizational training, featuring enhanced user engagement tools and NLP-driven search and recommendation."
                            technologies="Python, Flask, TypeScript, React Native, Material UI, Docker, MySQL, Tensorflow"
                            ghLink="https://github.com/just-molly"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={itrust}
                            isBlog={false}
                            title="iTrust2"
                            description="A platform where healthcare providers (HCPs) can obtain and share essential patient information, including personal details and previous medical records such as medical history, prescriptions, and other factors that may influence diagnosis. Patients can schedule appointments, access billing information, and pay bills online."
                            technologies="Java, JavaScript, MySQL"
                            ghLink="https://github.com/just-molly"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={coffeemaker}
                            isBlog={false}
                            title="☕️ Coffee Maker"
                            description="Coffee Maker software that user can update inventory, modify recipe, make coffee, and add ingredient to the inventory."
                            technologies="Java, JavaScript, MySQL"
                            ghLink="https://github.com/just-molly"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={minitennis}
                            isBlog={false}
                            title="Mini Tennis 👾"
                            description="A retro-style bouncing ball game and my very first coding project. It's all about timing and reflexes: move your mouse to keep the ball in play through three increasingly difficult levels."
                            technologies="Java"
                            ghLink="https://github.com/just-molly"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;