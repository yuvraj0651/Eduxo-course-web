import "./Stat.css";
import { Container } from 'react-bootstrap';
import StudentsBg from "../../assets/courses-stat/stat-bg.jpg";
import { FaGraduationCap, FaUserGraduate, FaBookOpen } from "react-icons/fa";

const Stat = () => {
    return (
        <>
            <section>
                <div className="stat-section section-padding">
                    <Container fluid className='px-0'>
                        <div className="stat-section__inner">
                            <div className="students-bg__picture">
                                <img src={StudentsBg} alt="students-bg" className="students-bg" />
                            </div>
                            <div className="stat-box__block">
                                <div className="stat-box">
                                    <div className="stat-icon__block">
                                        <FaGraduationCap className="stat-icon" />
                                    </div>
                                    <div className="stat-text">
                                        <h2>8754+</h2>
                                        <p>Students Enrolled</p>
                                    </div>
                                </div>
                                <div className="stat-box">
                                    <div className="stat-icon__block">
                                        <FaUserGraduate className="stat-icon" />
                                    </div>
                                    <div className="stat-text">
                                        <h2>245+</h2>
                                        <p>Certified Teachers</p>
                                    </div>
                                </div>
                                <div className="stat-box">
                                    <div className="stat-icon__block">
                                        <FaBookOpen className="stat-icon" />
                                    </div>
                                    <div className="stat-text">
                                        <h2>15+</h2>
                                        <p>Premium Courses</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default Stat