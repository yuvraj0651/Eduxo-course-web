import "./TrendCourses.css";
import { Container } from 'react-bootstrap';
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CourseImg1 from "../../assets/courses/reactJs.jpg";
import CourseImg2 from "../../assets/courses/automate.jpg";
import CourseImg3 from "../../assets/courses/python.jpg";
import CourseImg4 from "../../assets/courses/javascript.jpg";
import CourseImg5 from "../../assets/courses/python2.jpg";
import CourseImg6 from "../../assets/courses/javascript2.jpg";
import { CiStar } from "react-icons/ci";
import { BsCameraVideo } from "react-icons/bs";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import Slider from "react-slick";
import { useContext, useRef } from "react";
import { CartContext } from "../context/cart/CartContext";
import { toast } from 'react-toastify';

const TrendCourses = () => {

    const sliderRef = useRef(null);
    const { dispatch: cartDispatch, cart } = useContext(CartContext);

    // const addCartHandler = (product) => {
    //     console.log("The product is added to cart");
    //     cartDispatch({
    //         type: "ADD_TO_CART",
    //         payload: {
    //             ...product,
    //             quantity: 1,
    //         }
    //     });
    // }

    const dummyUser = {
        name: "Yuvraj Ganshi",
        email: "yuvrajganshi@gmail.com",
    }

    const submitCartHandler = (userData, product) => {
        console.log("The product is added to cart and firebase");
        cartDispatch({
            type: "ADD_TO_CART",
            payload: {
                ...product,
                quantity: 1,
            }
        });
        fetch("https://course-ecom-web01-default-rtdb.firebaseio.com/orders.json", {
            method: "POST",
            body: JSON.stringify({
                user: userData,
                orders: cart,
            }),
        })
            .then((response) => response.json())
            .then((data) => console.log("DATA SENT: ", data))
            .catch((err) => console.log("ERROR: ", err));
    }

    const courseData = [
        {
            id: 1,
            courseImage: CourseImg1,
            courseTitle: "React JS Mastery: Build Real Projects",
            Author: "Brad Traversy",
            totalStudents: 15230,
            courseDesc: "Master React by building real-world apps with functional components.",
            newPrice: "$25.00",
            oldPrice: "$40.00",
            enrollText: "Enroll Now",
        },
        {
            id: 2,
            courseImage: CourseImg2,
            courseTitle: "Automate with Python: Beginner to Pro",
            Author: "David Rodriguez",
            totalStudents: 19850,
            courseDesc: "Automate your boring tasks using Python and practical projects.",
            newPrice: "$18.00",
            oldPrice: "$30.00",
            enrollText: "Enroll Now",
        },
        {
            id: 3,
            courseImage: CourseImg3,
            courseTitle: "Python Crash Course: Complete Bootcamp",
            Author: "Angela Yu",
            totalStudents: 23400,
            courseDesc: "A fast-paced Python course designed for absolute beginners.",
            newPrice: "$22.00",
            oldPrice: "$35.00",
            enrollText: "Enroll Now",
        },
        {
            id: 4,
            courseImage: CourseImg4,
            courseTitle: "JavaScript Essentials: From Zero to Hero",
            Author: "Jonas Schmedtmann",
            totalStudents: 17650,
            courseDesc: "Learn core JavaScript concepts with practical coding challenges.",
            newPrice: "$19.00",
            oldPrice: "$32.00",
            enrollText: "Enroll Now",
        },
        {
            id: 5,
            courseImage: CourseImg5,
            courseTitle: "Advanced Python: Mastering Code Skills",
            Author: "Corey Schafer",
            totalStudents: 9800,
            courseDesc: "Take your Python skills to the next level with hands-on exercises.",
            newPrice: "$30.00",
            oldPrice: "$45.00",
            enrollText: "Enroll Now",
        },
        {
            id: 6,
            courseImage: CourseImg6,
            courseTitle: "Modern JavaScript Projects Bootcamp",
            Author: "Kyle Simpson",
            totalStudents: 15420,
            courseDesc: "Build multiple projects using modern JavaScript features like ES6+.",
            newPrice: "$21.00",
            oldPrice: "$38.00",
            enrollText: "Enroll Now",
        },
    ];


    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1500,
        arrows: false,
        dots: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
        ]
    }

    return (
        <>
            <section>
                <div className="trending-course__section section-padding mb-4">
                    <Container fluid>
                        <div className="trending-courses__inner">
                            <div className="trending-course__top">
                                <div className="trending-section__heading">
                                    <h4 className='common-headingText'><span>trending courses</span></h4>
                                    <h3 className="courses-head custom-span__text common-subHeading">our popular<span> courses</span></h3>
                                </div>
                                <div className="trending-section__button">
                                    <div className="slide-button__block">
                                        <button className="prev__btn slide-btn"
                                            onClick={() => sliderRef.current.slickPrev()}
                                        >
                                            <GrFormPreviousLink className='slide-icon' />
                                        </button>
                                        <button className="prev__btn slide-btn"
                                            onClick={() => sliderRef.current.slickNext()}
                                        >
                                            <GrFormNextLink className='slide-icon' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="trending-course__bottom">
                                <div className="course-slider__block">
                                    <Slider ref={sliderRef} {...settings}>
                                        {
                                            courseData.map((course) => (
                                                <div className="course-item" key={course.id}>
                                                    <div className="course-item__body">
                                                        <div className="course-item__picture">
                                                            <img src={course.courseImage} alt="course-img" className="course-picture" />
                                                        </div>
                                                        <div className="course-content">
                                                            <div className="course-meta__block">
                                                                <div className="course-star-rating course-flex">
                                                                    <CiStar className="course-icon" />
                                                                    <strong>4.7</strong>
                                                                    <span className="review">(2k reviews)</span>
                                                                </div>
                                                                <div className="course-time-span course-flex">
                                                                    <BsCameraVideo className="course-icon" />
                                                                    <span>25 hours 22m</span>
                                                                </div>
                                                                <div className="course-bookmark course-flex">
                                                                    <IoBookmarkOutline className="course-icon" />
                                                                </div>
                                                            </div>
                                                            <div className="course-item__title-block">
                                                                <p className="course-title">{course.courseTitle}</p>
                                                            </div>
                                                            <div className="course-meta__information">
                                                                <div className="course-author">
                                                                    <span>By: {course.Author}</span>
                                                                </div>
                                                                <div className="total-enrolled-students">
                                                                    <span>{course.totalStudents} students</span>
                                                                </div>
                                                            </div>
                                                            <div className="course-description">
                                                                <p className="description">{course.courseDesc}</p>
                                                            </div>
                                                            <div className="course-price__cta">
                                                                <div className="enrolled-price">
                                                                    <span>
                                                                        <ins className="new-price">{course.newPrice}</ins>
                                                                        <del className="old-price">{course.oldPrice}</del>
                                                                    </span>
                                                                </div>
                                                                <div className="cta-vertical-line"></div>
                                                                <div className="course-cta">
                                                                    <a role="button" onClick={() => {
                                                                        submitCartHandler(dummyUser, course)
                                                                        toast.success("Product is added to cart")
                                                                    }}>
                                                                        <span>{course.enrollText}</span>
                                                                        <FaArrowRightLong className="arrow-icon" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default TrendCourses