import React from 'react';
import MyResume from '../assets/resume.json';

export default function ExperiencePage() {
    const { work, education, courses } = MyResume;
    return (
        <>
            <section className="home">
                <div className="resume">
                    <div className="section">
                        <h2>Work Experience</h2>
                        {work.map((job, index) => (
                            <div key={index} className="job">
                                <h3>{job.position} at {job.company}</h3>
                                <p>{job.years}</p>
                                <p>{job.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="section">
                        <h2>Education</h2>
                        {education.map((edu, index) => (
                            <div key={index} className="education">
                                <h3>{edu.school}</h3>
                                <p>{edu.years}</p>
                                <p>{edu.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="section">
                        <h2>Courses</h2>
                        {courses.map((course, index) => (
                            <div key={index} className="course">
                                <h3>{course.course}</h3>
                                <p>{course.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}