import React from 'react';
import './Footer.css';
    import Row from 'react-bootstrap/Row';
    import Col from 'react-bootstrap/Col';
    import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { ReactComponent as TwitterIcon } from './assets/twittericon.svg';
import { ReactComponent as LinkedInIcon } from './assets/linkedinicon.svg';
import { ReactComponent as FbIcon } from './assets/fbicon.svg';
import { ReactComponent as InstaIcon } from './assets/instaicon.svg';
import Subscribe from "./Subscribe"

export default function Header() {
    return (
        <div className="">
            <Subscribe />
            <div className="footer-section">
                <Container>
                    <Row>
                        <Col>
                            <div className="contact-title">
                                Contact Us
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={5} xl={5}>
                            <Form>
                                <Form.Group as={Row} className="mb-3 mt-4" controlId="contactusForm.ControlInput1">
                                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="First Name" />
                                    </Col>
                                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Last Name" />
                                    </Col>
                                </Form.Group>
                                <Form.Group className="mb-3 mt-3" controlId="contactusForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email address" />
                                    <Form.Label className="mt-1 supplemental-text">Example: johnsmith@gmail.com</Form.Label>
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="contactusForm.ControlTextarea1">
                                    <Form.Label>Your Message</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                <button className="submit-btn" type="submit">Send Message</button>
                            </Form>
                        </Col>
                        <Col xs={12} sm={12} md={5} lg={4} xl={4} className="col-align">
                            <div className="mt-4 mb-4">
                                <a href="/home" className="footer-list">Home</a>
                            </div>
                            <div className="mt-4 mb-4">
                                <a href="/about-Us" className="footer-list">About Us</a>
                            </div>
                            <div className="mt-4 mb-4">
                                <a href="/privacy-policy" className="footer-list">Privacy Policy</a>
                            </div>
                            <div className="mt-5 mb-4 follow-us">
                                Follow us
                            </div>
                            <div className="mt-3 mb-4">
                                <TwitterIcon className="icon-section"/>
                                <LinkedInIcon className="icon-section"/>
                                <FbIcon className="icon-section"/>
                                <InstaIcon className="icon-section"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className="mb-3 mt-4 copyright-content">
                        <Col>
                            Understand the Science is a 501c3 non-profit comprised of experts committed to use our pharmaceutical education, training, 
                            and technical experience to simplify science. Our web platform features under 2-minute visual-learning videos presented by 
                            our scientists with an AI (Artificial Intelligence) assistant that answers questions instantly using natural language 
                            understanding. The reference-supported medical information provides a trusted source for medical education accessible to anyone.
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className="mt-4 copyright-content">
                        <Col>
                            © 2023 Understand the Science
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
