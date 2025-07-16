import "./Footer.css"
import Newsletter from './Newsletter/Newsletter';
import { Col, Container, Row } from 'react-bootstrap';
import FooterLogo from "../../assets/footter/f-logo.png";
import { FaRegEnvelope } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";

const Footer = () => {
    return (
        <>
            <Newsletter />
            <section>
                <div className="footer-section" id="footer-section">
                    <Container fluid>
                        <div className="footer-section__inner">
                            <Row>
                                <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                                    <div className="footer-section__logo">
                                        <img src={FooterLogo} alt="footer-logo" className="footer-logo" />
                                        <div className="footer-section__meta">
                                            <div className="footer-contact">
                                                <a href="/" className="telephone">+88 029 345 702</a>
                                                <h4 className="footer-email meta-text">
                                                    <FaRegEnvelope />
                                                    <span>info@yourdomain.com</span>
                                                </h4>
                                                <h4 className="footer-location meta-text">
                                                    <MdOutlineLocationOn />
                                                    <span>
                                                        55 Green Street, New York
                                                    </span>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                                    <div className="footer-company__block footer-common__block">
                                        <h4>Company</h4>
                                        <ul className="footer-links">
                                            <li>
                                                <a href="/">About us</a>
                                            </li>
                                            <li>
                                                <a href="/">Information</a>
                                            </li>
                                            <li>
                                                <a href="/">Careers</a>
                                            </li>
                                            <li>
                                                <a href="/">Services</a>
                                            </li>
                                            <li>
                                                <a href="/">Contact us</a>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                                    <div className="footer-company__block footer-common__block">
                                        <h4>Categories</h4>
                                        <ul className="footer-links">
                                            <li>
                                                <a href="/">UI/UX designs</a>
                                            </li>
                                            <li>
                                                <a href="/">web development</a>
                                            </li>
                                            <li>
                                                <a href="/">data sciences</a>
                                            </li>
                                            <li>
                                                <a href="/">art & design</a>
                                            </li>
                                            <li>
                                                <a href="/">digital marketing</a>
                                            </li>
                                        </ul>
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

export default Footer