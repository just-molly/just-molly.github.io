import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileImage from "../../assets/images/profile.svg";
import Particle from "../Particle";
import Intro from "./Intro";
import Type from "./Type";

function Home() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Particle />
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 className="heading">
                                Bonjour!{" "}
                                <span className="wave" role="img" aria-labelledby="wave">
                                    👋🏻
                                </span>
                            </h1>

                            <h1 className="heading-name">
                                I'M
                                <strong className="main-name"> Molly Sun</strong>
                            </h1>

                            <div className="home-type-wrapper">
                                <Type />
                            </div>
                        </Col>

                        <Col md={5} className="home-img-container">
                            <img className="img-fluid home-profile-image" src={profileImage} alt="profile image" />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Intro />
        </section>
    );
}

export default Home;