import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import "./Subscribe.css"
export default function Header() {
    return (  

        <div className="subscribe-section pt-5 pb-5">
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={5} xl={5}>
                        <div className="subscribe-header">
                            Subscribe to Our Newsletter
                        </div>
                        <div className="subscribe-content mt-3">
                            Sending you specialized content on health and wellness from our field leading experts.
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6} style={{marginLeft:"auto"}}>
                        <Form>
                            <Form.Group as={Row} className="mb-3 mt-4" controlId="contactusForm.ControlInput1">
                                <Col xs={12} sm={12} md={7} lg={8} xl={8}>
                                    <Form.Control type="email" placeholder="Enter email address" />
                                    <Form.Label className="mt-1" style={{fontSize:"14px", color:"#000"}}>Example: johnsmith@gmail.com</Form.Label>
                                </Col>
                                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                    <button className="subscribe-btn" type="submit">Subscribe</button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}