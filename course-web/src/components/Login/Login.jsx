import { useState } from "react";
import "./Login.css";
import { Container } from 'react-bootstrap';
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ref, get } from 'firebase/database';
import { auth, db } from '../firebase/config';
import { useAuth } from "../context/auth/AuthProvider";

const Login = ({ onToggle }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [error, setError] = useState("");

    const { setUserRole } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const userId = userCredential.user.uid;

            const userRef = ref(db, 'users/' + userId);
            const snapshot = await get(userRef);

            if (snapshot.exists()) {
                const userData = snapshot.val();
                console.log("User Data from DB:", userData);

                if (userData.role !== selectedCategory) {
                    setError("Selected role does not match user role.");
                    return;
                }

                setUserRole(userData.role);
                navigate("/");    
                onToggle();      
            } else {
                setError("User data not found in database.");
            }
        } catch (err) {
            console.error("Login Error:", err);
            setError("Invalid email or password.");
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setError("");
        await handleLogin();
    };

    return (
        <>
            <section>
                <div className="login-section">
                    <Container fluid>
                        <div className="login-section__inner">
                            <div className="form-section__top">
                                <h4 className="form__headingText">Login</h4>
                                {error && <p className="error-message">{error}</p>}
                            </div>
                            <div className="form-section__bottom">
                                <form onSubmit={submitHandler}>
                                    <div className="form-input">
                                        <label htmlFor="email-address">Email:</label>
                                        <input
                                            type="email"
                                            id="email-address"
                                            className='email-input'
                                            placeholder='Email Address...'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-input">
                                        <label htmlFor="password">Password:</label>
                                        <input
                                            type="password"
                                            id="password"
                                            className='password-input'
                                            placeholder='Password...'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-input">
                                        <label htmlFor="role">Role:</label>
                                        <select
                                            name="role"
                                            id="role"
                                            value={selectedCategory}
                                            onChange={(e) => setSelectedCategory(e.target.value)}
                                            required
                                        >
                                            <option value="" hidden>Select Role</option>
                                            <option value="teacher">Teacher</option>
                                            <option value="student">Student</option>
                                        </select>
                                    </div>
                                    <div className="form-submit__block">
                                        <button type="submit" className="login__btn">
                                            {selectedCategory === "teacher"
                                                ? "Login as Teacher"
                                                : selectedCategory === "student"
                                                    ? "Login as Student"
                                                    : "Login"}
                                        </button>
                                    </div>
                                    <div className="new-customer__register">
                                        <span>New customer?</span>
                                        <Link to="/register" className="register-link">Register now</Link>
                                    </div>
                                </form>
                            </div>
                            <div className="login-button__block">
                                <button
                                    type="button"
                                    className="close-btn"
                                    onClick={onToggle}
                                >
                                    <IoMdClose />
                                </button>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    );
};

export default Login;
