import React from 'react';
import "./Newsletter.css";
import { Col, Container, Row } from 'react-bootstrap';

const Newsletter = () => {
    return (
        <>
            <section>
                <div className="newsletter-section">
                    <Container fluid>
                        <div className="newsletter-section__inner">
                            <Row>
                                <Col xl={7} lg={7} md={12} sm={12} xs={12}>
                                    <div className="subscribe-text__block">
                                        <h4 className="newsletter-heading common-headingText"><span>get every single updates</span></h4>
                                        <h3 className='newsletter-subText custom-span__text common-subHeading'>subscribe <span>newsletter</span></h3>
                                    </div>
                                </Col>
                                <Col xl={5} lg={5} md={12} sm={12} xs={12}>
                                    <div className="subscribe-mail__block">
                                        <div className="subscribe-email">
                                            <input type="email" name="email" id="email" className='email-input' placeholder='Email Address..' />
                                        </div>
                                        <div className="subscribe-newsletter__btn">
                                            <button className='subscribe__btn'>Subscribe Newsletter</button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default Newsletter