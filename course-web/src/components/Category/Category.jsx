import React from 'react';
import "./Category.css";
import { Col, Container, Row } from 'react-bootstrap';
import { MdDesignServices } from "react-icons/md";
import { BsLightbulbFill } from "react-icons/bs";
import { BsCalculator } from "react-icons/bs";
import { GiMicroscope } from "react-icons/gi";
import { FaBrain } from "react-icons/fa";
import { FaAtom } from "react-icons/fa";

const Category = () => {
    return (
        <>
            <section>
                <div className="category-section section-padding">
                    <Container fluid>
                        <div className="category-section__inner">
                            <div className="category-section__top">
                                <h4 className='common-headingText pop-cat__headingText'>
                                    <span>popular categories</span>
                                </h4>
                                <h3 className='common-subHeading custom-span__text'>find your <span>category</span></h3>
                            </div>
                            <div className="category-section__bottom">
                                <Row>
                                    <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                                        <div className="category-block">
                                            <div className="category-icon">
                                                <MdDesignServices className='cat-icon' />
                                            </div>
                                            <div className="category-content">
                                                <h4>Art and Design</h4>
                                                <p>23 total courses</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                                        <div className="category-block">
                                            <div className="category-icon">
                                                <BsLightbulbFill className='cat-icon' />
                                            </div>
                                            <div className="category-content">
                                                <h4>Web Development</h4>
                                                <p>23 total courses</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                                        <div className="category-block">
                                            <div className="category-icon">
                                                <BsCalculator className='cat-icon' />
                                            </div>
                                            <div className="category-content">
                                                <h4>Apps Development</h4>
                                                <p>23 total courses</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                                        <div className="category-block">
                                            <div className="category-icon">
                                                <GiMicroscope className='cat-icon' />
                                            </div>
                                            <div className="category-content">
                                                <h4>IT and Solutions</h4>
                                                <p>23 total courses</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                                        <div className="category-block">
                                            <div className="category-icon">
                                                <FaBrain className='cat-icon' />
                                            </div>
                                            <div className="category-content">
                                                <h4>Health and Fitness</h4>
                                                <p>23 total courses</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                                        <div className="category-block">
                                            <div className="category-icon">
                                                <FaAtom className='cat-icon' />
                                            </div>
                                            <div className="category-content">
                                                <h4>Data Science</h4>
                                                <p>23 total courses</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default Category