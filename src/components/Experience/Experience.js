import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";

function Experience() {
    return (
        <>
            {" "}
            <Particle />
            <Container fluid className="experience-section">
                <Row className="justify-content-center p-2">
                    <Col className="exp-container">
                        <h1 className="exp-title-header">
                            Experience
                        </h1>
                        <ExperienceCard />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Experience;