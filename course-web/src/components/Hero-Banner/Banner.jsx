import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <section>
                <div className="banner-section">
                    <Container>
                        <div className="banner-section__inner">
                            <Row className='align-items-start'>
                                <Col xl={7} lg={6} md={6} sm={12} xs={12}>
                                    <div className="banner-top">
                                        <div className="banner-heading">
                                            <h4 className="banner-headingText custom-span__text">
                                                Education is the Way to
                                                <span> Success</span>
                                            </h4>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={5} lg={6} md={6} sm={12} sx={12}>
                                    <div className="banner-bottom">
                                        <div className="banner-subText">
                                            <p>Education is a key to success and freedom from all the forces is a power and makes a
                                                person powerful</p>
                                        </div>
                                        <div className="banner-consultation__block">
                                            <button type="button" className='consultation__btn'>get free consultation</button>
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

export default Banner