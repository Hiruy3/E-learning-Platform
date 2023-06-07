import React from 'react'
import '../style/Course-detail.css'

import CourseDetailTop from '../components/CourseDetail-top'
import CourseDetailNav from '../components/CourseDetail-nav'
import Overview from '../components/Overview'
import Curriculum from '../components/Curriculum'
import Instructor from '../components/Instructor'
import Reviews from '../components/Reviews'
import Navbar from "../components/Navbar";

import { Routes, Route } from 'react-router-dom'

const CourseDetail = ({LoginStat}) => {
    return (
        (LoginStat === 'true')?
        <>
        <Navbar/>
        <div>
            <div className="my-5">
            <CourseDetailTop/>
            </div>
            <div className="my-5">
            <CourseDetailNav/>
            </div>
            <div className="my-5">
                <Overview/>
                </div>
        </div>
        </>
    :
    window.location.href = "/Login"
    )
}

export default CourseDetail;