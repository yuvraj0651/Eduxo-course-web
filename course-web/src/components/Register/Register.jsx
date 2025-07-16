import { useState } from 'react';
import "./Register.css";
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from 'firebase/database';
import { auth, db } from '../firebase/config';

const Register = () => {

    const [formData, setFormData] = useState({
        fname: '',
        email: '',
        password: '',
        mobile: '',
        birthDate: '',
        address: '',
        country: '',
        postal: '',
        gender: '',
        role: ''
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fname.trim()) newErrors.fname = "Full name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        if (!formData.password.trim()) newErrors.password = "Password is required";
        else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
        if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
        if (!formData.birthDate.trim()) newErrors.birthDate = "Birth date is required";
        if (!formData.address.trim()) newErrors.address = "Address is required";
        if (!formData.country.trim()) newErrors.country = "Country is required";
        if (!formData.postal.trim()) newErrors.postal = "Postal code is required";
        if (!formData.gender.trim()) newErrors.gender = "Gender is required";
        if (!formData.role.trim()) newErrors.role = "Role is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!validateForm()) return;

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            const userId = userCredential.user.uid;

            await set(ref(db, 'users/' + userId), { ...formData });

            setSuccess("Registered successfully! Redirecting to homepage...");
            console.log("Registered data:", formData);

            setFormData({ 
                fname: '',
                email: '',
                password: '',
                mobile: '',
                birthDate: '',
                address: '',
                country: '',
                postal: '',
                gender: '',
                role: ''
            });

            setErrors({}); 

            setTimeout(() => {
                navigate("/");
            }, 2000); 
        } catch (err) {
            console.error("Registration Error:", err);
            setError("Registration failed. Please try again.");
        }
    };


    return (
        <>
            <section className='form-section'>
                <div className="register-form__section">
                    <Container fluid>
                        <div className="register-form__inner">
                            <div className="register-form__header">
                                <h4>Registration Form</h4>
                                {error && <p className="error-message">{error}</p>}
                                {success && <p className="success-message">{success}</p>}
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="register-form__body">
                                    <div className="register-form__input-block d-input-block">
                                        <label htmlFor="full-name">Full Name:</label>
                                        <input
                                            type="text"
                                            name='fname'
                                            id='full-name'
                                            className='full-name-input input-box'
                                            placeholder='Full Name...'
                                            value={formData.fname}
                                            onChange={handleInputChange}
                                        />
                                        {errors.fname && <p className='error-message'>{errors.fname}</p>}
                                    </div>
                                    <div className="register-form__input-block d-input-block">
                                        <label htmlFor="email">Email Address:</label>
                                        <input
                                            type="email"
                                            name='email'
                                            id='email'
                                            className='email-input input-box'
                                            placeholder='Email Address...'
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                        {errors.email && <p className='error-message'>{errors.email}</p>}
                                    </div>
                                    <div className="register-form__input-block d-input-block">
                                        <label htmlFor="password">Password:</label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            className="password-input input-box"
                                            placeholder="Password..."
                                            value={formData.password}
                                            onChange={handleInputChange}
                                        />
                                        {errors.password && <p className='error-message'>{errors.password}</p>}
                                    </div>
                                    <div className="grid-block">
                                        <div className="register-form__input-block d-input-block">
                                            <label htmlFor="mobile">Mobile Number:</label>
                                            <input
                                                type="tel"
                                                name='mobile'
                                                id='mobile'
                                                className='mobile-input input-box'
                                                placeholder='Mobile Number...'
                                                value={formData.mobile}
                                                onChange={handleInputChange}
                                            />
                                            {errors.mobile && <p className='error-message'>{errors.mobile}</p>}
                                        </div>
                                        <div className="form-input pb-2">
                                            <label htmlFor="role">Role:</label>
                                            <select
                                                name="role"
                                                id="role"
                                                value={formData.role}
                                                onChange={handleInputChange}
                                            >
                                                <option value="select-role" hidden>Select Role</option>
                                                <option value="teacher">Teacher</option>
                                                <option value="student">Student</option>
                                            </select>
                                            {errors.role && <p className='error-message'>{errors.role}</p>}
                                        </div>
                                        <div className="register-form__input-block d-input-block">
                                            <label htmlFor="birth-date">Birth Date:</label>
                                            <input
                                                type="date"
                                                name='birthDate'
                                                id='birth-date'
                                                className='date-input input-box'
                                                value={formData.birthDate}
                                                onChange={handleInputChange}
                                            />
                                            {errors.birthDate && <p className='error-message'>{errors.birthDate}</p>}
                                        </div>
                                    </div>
                                    <div className="register-form__input-block d-input-block">
                                        <label htmlFor="gender">Gender:</label>
                                        <div className="gender-box">
                                            <div className="gender-block">
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    id="male"
                                                    value="male"
                                                    checked={formData.gender === 'male'}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="male">Male</label>
                                            </div>
                                            <div className="gender-block">
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    id="female"
                                                    value="female"
                                                    checked={formData.gender === 'female'}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="female">Female</label>
                                            </div>
                                            <div className="gender-block">
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    id="other"
                                                    value="other"
                                                    checked={formData.gender === 'other'}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="other">Other</label>
                                            </div>
                                        </div>
                                        {errors.gender && <p className='error-message'>{errors.gender}</p>}
                                    </div>
                                    <div className="register-form__input-block d-input-block">
                                        <label htmlFor="address">Address:</label>
                                        <textarea
                                            name="address"
                                            id="address"
                                            className="address-input input-box"
                                            placeholder="Address..."
                                            value={formData.address}
                                            onChange={handleInputChange}
                                        />
                                        {errors.address && <p className='error-message'>{errors.address}</p>}
                                    </div>
                                    <div className="grid-block">
                                        <div className="register-form__input-block d-input-block">
                                            <label htmlFor="country">Country:</label>
                                            <input
                                                type="text"
                                                name="country"
                                                id="country"
                                                className='country-input input-box'
                                                placeholder='Country...'
                                                value={formData.country}
                                                onChange={handleInputChange}
                                            />
                                            {errors.country && <p className='error-message'>{errors.country}</p>}
                                        </div>
                                        <div className="register-form__input-block d-input-block">
                                            <label htmlFor="postal-code">Postal Code:</label>
                                            <input
                                                type="text"
                                                name="postal"
                                                id="postal-code"
                                                className='postal-input input-box'
                                                placeholder='Postal Code...'
                                                value={formData.postal}
                                                onChange={handleInputChange}
                                            />
                                            {errors.postal && <p className='error-message'>{errors.postal}</p>}
                                        </div>
                                    </div>
                                </div>
                                <div className="submit-button__block">
                                    <button type="submit" className='submit_btn'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    );
};

export default Register;
