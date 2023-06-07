import React from 'react'
import '../style/Course-detail.css'

const CourseDetailNav = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="overview">Overview</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="curriculum">Curriculum</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="instructor">Instructor</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="reviews">Reviews</a>
                        </li>
                    </ul>
                    </div>
                    </div>
        </div>
    )
}

export default CourseDetailNav;