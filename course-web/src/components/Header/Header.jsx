import "./Header.css";
import { Container, Spinner } from "react-bootstrap";
import HeaderLogo from "../../assets/header/logo.png";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FiUser } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth/AuthProvider";
import { useNavigate } from 'react-router-dom';

const Header = ({ onLoginToggle }) => {

    const [isOpen, setIsOpen] = useState(false);
    const { userRole, logout } = useAuth();
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    const handleLogout = async () => {
        setIsLoggingOut(true);
        await logout();
        setTimeout(() => {
            navigate("/");
            setIsLoggingOut(false);
        }, 3000)
    };

    return (
        <>
            <header>
                <div className="header-section" id="header-section">
                    <Container fluid>
                        <div className="header-section__inner">
                            <div className="header-section__logo">
                                <Link to="/">
                                    <img src={HeaderLogo} alt="header-logo" className="header-logo" />
                                </Link>
                            </div>
                            <div className={`header-section__menu ${isOpen ? "opened" : ""}`}>
                                <ul className="header-menu">
                                    <div className="header-menu-top">
                                        <div className="header-menu__logo">
                                            <Link to="/">
                                                <img src={HeaderLogo} alt="header-logo" className="header-menu-logo" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="header-menu__bottom">
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <a href="/">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="/">Courses</a>
                                        </li>
                                        <li>
                                            <Link to="/cart">Cart</Link>
                                        </li>
                                        <div className="header-menu__close-block" onClick={toggleSidebar}>
                                            <div className="close__btn">
                                                <IoClose />
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                            <div className="header-section__cta-block">
                                <div className="header-section__search-block">
                                    <div className="header__search-icon cta-icon">
                                        <HiMagnifyingGlass />
                                    </div>
                                </div>
                                {
                                    userRole ? (
                                        <button onClick={handleLogout} className="logout__btn">Logout</button>
                                    ) : (
                                        <div className="header-section__user-block" onClick={onLoginToggle}>
                                            <div className="header-user__icon cta-icon">
                                                <FiUser />
                                            </div>
                                        </div>
                                    )
                                }

                                <div className="free-trail-button__block">
                                    <a href="/" className="free-trail__btn">start free trail</a>
                                </div>
                            </div>
                            <div className="header-section__hamburger-icon" onClick={toggleSidebar}>
                                <div className="hamburger-icon">
                                    <RxHamburgerMenu />
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </header>
            {
                isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>
            }
            {isLoggingOut && (
                <div className="spinner-overlay">
                    <Spinner className="spinner-icon" animation="border" variant="primary" />
                    <p className="spinnerText">Logging you out...</p>
                </div>
            )}
        </>
    )
}

export default Header