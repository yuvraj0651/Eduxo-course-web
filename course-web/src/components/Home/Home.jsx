import React, { useState } from 'react';
import "./Home.css";
import Banner from '../Hero-Banner/Banner';
import Stat from '../Stat/Stat';
import Category from '../Category/Category';
import TrendCourses from '../Trending-Courses/TrendCourses';
import Login from '../Login/Login';
import { useAuth } from "../context/auth/AuthProvider";

const Home = ({ loginOpen, toggleLoginForm }) => {

    const { userRole } = useAuth();

    return (
        <>
            <section>
                <div className="home-section">
                    <Banner />
                    <Stat />
                    {
                        userRole === "teacher" && (
                            <>
                                <Category />
                                <TrendCourses />
                            </>
                        )
                    }
                    {
                        userRole === "student" && (
                            <>
                                <TrendCourses />
                            </>
                        )
                    }
                    {userRole === "" && (
                        <>
                            <Category />
                            <TrendCourses />
                        </>
                    )}
                </div>
                {
                    loginOpen && (
                        <>
                            <div className='login-overlay' onClick={toggleLoginForm} />
                            <Login loginOpen={loginOpen} onToggle={toggleLoginForm} />
                        </>
                    )
                }
            </section>
        </>
    )
}

export default Home