import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Javascript from "../../assets/icons/Javascript.svg";
import Typescript from "../../assets/icons/Typescript.svg";
import Node from "../../assets/icons/Node.svg";
import ReactIcon from "../../assets/icons/React.svg";
import Java from "../../assets/icons/Java.svg";
import C from "../../assets/icons/C.svg"
import Git from "../../assets/icons/Git.svg";
import Docker from "../../assets/icons/Docker.svg";
import Python from "../../assets/icons/Python.svg";
import Postman from "../../assets/icons/Postman.svg";
import Angular from "../../assets/icons/Angular.svg";
import MySQL from "../../assets/icons/MySQL.svg";
import JFrog from "../../assets/icons/JFrog.svg";
import Flask from "../../assets/icons/Flask.svg";
import SQLAlchemy from "../../assets/icons/SQLAlchemy.svg";
import Php from "../../assets/icons/Php.svg";
import Maven from "../../assets/icons/Maven.svg";
import AWS from "../../assets/icons/AWS.svg";

function Intro() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row className="justify-content-center">
                    <Col md={8} className="home-about-description">
                        <p className="home-about-body">
                            <br />
                            <br />
                            I'm a Software Engineer who enjoys building interesting
                            things and exploring the strategic logic of game theory.
                            I graduated from North Carolina State University with Bachelor's
                            degrees in <strong className="blue">Computer Science </strong>
                            and <strong className="blue">Economics</strong>.
                            I thrive on understanding the <strong className="blue">'why'</strong> behind events and always
                            strive for quality results. Curiosity and dedication are
                            the driving forces behind my pursuit of knowledge and innovation.
                            <br />
                            <br />
                            <br />
                            <br />
                        </p>
                    </Col>

                    <div className="intro-spacer-lg"></div>

                    <h1 className="project-heading mt-5 pt-4">
                        My Professional <strong className="blue">Skillset </strong>
                    </h1>
                    <Row className="tech-stack-row">
                        <Col xs={4} md={2} className="tech-icons">
                            <img src={Java} alt="java" />
                            <div className="tech-icons-text">Java</div>
                        </Col>

                        <Col xs={4} md={2} className="tech-icons">
                            <img src={Python} alt="python" />
                            <div className="tech-icons-text">Python</div>
                        </Col>

                        <Col xs={4} md={2} className="tech-icons">
                            <img src={Javascript} alt="javascript" />
                            <div className="tech-icons-text">Javascript</div>
                        </Col>

                        <Col xs={4} md={2} className="tech-icons">
                            <img src={Typescript} alt="typescript" />
                            <div className="tech-icons-text">Typescript</div>
                        </Col>

                        <Col xs={4} md={2} className="tech-icons">
                            <img src={C} alt="c" />
                            <div className="tech-icons-text">C</div>
                        </Col>

                        <Col xs={4} md={2} className="tech-icons">
                            <img src={Php} alt="php" />
                            <div className="tech-icons-text">PHP</div>
                        </Col>

                        <Col xs={4} md={2} className="tech-icons">
                            <img src={Angular} alt="angular" />
                            <div className="tech-icons-text">Angular</div>
                        </Col>

                        <Col xs={4} md={2} className="tech-icons">
                            <img src={Maven} alt="maven" />
                            <div className="tech-icons-text">Maven</div>
                        </Col>

                        <Col xs={4} md={2} className="tech-icons">
                            <img src={Node} alt="node" />
                            <div className="tech-icons-text">Node.Js</div>
                        </Col>

                        <Col xs={4} md={2} className="tech-icons">
                            <img src={ReactIcon} alt="react" />
                            <div className="tech-icons-text">React</div>
                        </Col>

                        <Col xs={4} md={2} className="tech-icons">
                            <img src={Flask} alt="flask" />
                            <div className="tech-icons-text">Flask</div>
                        </Col>

                        <Col xs={4} md={2} className="tech-icons">
                            <img src={Git} alt="git" />
                            <div className="tech-icons-text">Git</div>
                        </Col>

                        <Col xs={4} md={2} className="tech-icons">
                            <img src={MySQL} alt="mysql" />
                            <div className="tech-icons-text">MySQL</div>
                        </Col>

                        <Col xs={4} md={2} className="tech-icons">
                            <img src={SQLAlchemy} alt="sqlalchemy" />
                            <div className="tech-icons-text">SQLAlchemy</div>
                        </Col>

                        <Col xs={4} md={2} className="tech-icons">
                            <img src={Docker} alt="docker" />
                            <div className="tech-icons-text">Docker</div>
                        </Col>

                        <Col xs={4} md={2} className="tech-icons">
                            <img src={AWS} alt="aws" />
                            <div className="tech-icons-text">AWS</div>
                        </Col>

                        <Col xs={4} md={2} className="tech-icons">
                            <img src={Postman} alt="postman" />
                            <div className="tech-icons-text">Postman</div>
                        </Col>

                        <Col xs={4} md={2} className="tech-icons">
                            <img src={JFrog} alt="jfrog" />
                            <div className="tech-icons-text">JFrog</div>
                        </Col>
                    </Row>
                    <div className="intro-spacer-sm"></div>
                </Row>
            </Container>
        </Container>
    );
}
export default Intro;