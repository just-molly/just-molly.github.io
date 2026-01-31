import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright">
                    <h3>Copyright © {year} Molly Sun</h3>
                </Col>

                <Col md="4">
                    <ul>
                        <li className="social-icons">
                            <a
                                href="https://github.com/just-molly"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour home-social-icons"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/mingyu-molly-sun/"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour home-social-icons"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="mailto:mollyyy769@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour home-social-icons"
                            >
                                <MdEmail />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;