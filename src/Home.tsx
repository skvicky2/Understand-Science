import React from 'react';
import './Home.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { ReactComponent as DashIcon } from './assets/dashicon.svg';
import { ReactComponent as LikeIcon } from './assets/likeicon.svg';
import { ReactComponent as ShareIcon } from './assets/shareicon.svg';
import VideoImg from "./assets/Video.png"
import Form from 'react-bootstrap/Form';

export default function Header() {
    return ( 

        <div className="container-section">
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <div className="home-title mt-5">    
                                 Home | Latest Video
                            </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <div className="home-subtitle mt-2">    
                                Overview of the Prostate
                            </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                        <div className="title-content mt-4">    
                            The structure and anatomy of the prostate.
                        </div>
                        <Container>
                            <Row className="mt-4">
                                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <div className="author-name mb-4">
                                        <span className="profile-img"></span>
                                        <span style={{ position: "relative", bottom: "20px", left: "12px" }}>
                                            Chris Francy, PhD
                                        </span>
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <div className="like-section mb-4">
                                        <button className="socialicon-btn" type="button" style={{ marginRight: "16px" }}>
                                            <LikeIcon style={{ marginRight: "10px", marginBottom: "3px" }} />Like
                                        </button>
                                        <button className="socialicon-btn" type="button">
                                            <ShareIcon style={{ marginRight: "10px", marginBottom: "3px" }} />Share
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <div className="video-section mb-4">
                            <img src={VideoImg} className="img-fluid" alt="Responsive image" />
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                        <div className="chat-section">   
                            <div className="dash-icon mt-4">
                                <DashIcon />
                            </div>
                            <div className="chat-title mt-4">
                                Chat
                            </div>
                            <div className="chat-content mt-4">
                                Hi I'm ChatBot!
                            </div>
                            <div className="chat-content mt-1">
                                How can I help you?
                            </div>
                            <div className="mt-4 mb-5 chat-tag-sction">
                                <div className="mt-3">
                                    <span className="chat-tag">Watch videos</span>
                                </div>
                                <div className="mt-3">
                                    <span className="chat-tag">Take assessments</span>
                                </div>
                                <div className="mt-3">
                                    <span className="chat-tag">Pronounce medical terms</span> 
                                </div>
                                <div className="mt-3 mb-6">
                                    <span className="chat-tag">FAQs</span> 
                                </div>
                            </div>
                            <div className="mt-3 mb-6 type-input">
                                <Form>
                                    <Form.Group className="" controlId="chatForm.ControlInput1">
                                        <Form.Control type="input" placeholder="Type something..." />
                                    </Form.Group>
                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}