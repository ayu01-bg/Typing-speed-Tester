import React from 'react'
import timerTypingTest from '../assets/images/timerTypingTest.jpg'
import { ArrowRight, Hourglass } from 'lucide-react'
import aboutTestData from '../content/aboutTestData'
import { Link } from 'react-router-dom'
import DisplayBox from '../Display/DisplayBox/DisplayBox'

const HeroPageCenter = () => {
    return (
        <>
            <section className="container-fluid px-3 py-5 text-section">
                <div className="container">
                    <div className="row m-0 test-content_wrapper text-center">

                        <div className="col-12 test-contentItem rounded-4 p-4 p-md-5 shadow-sm">

                            <span className="test-badge rounded-pill px-3 py-2">
                                ⚡Improve Your Typing Speed
                            </span>

                            <h2 className="test-title mt-3 fw-bold">
                                Test Your <span>Speed</span> & Accuracy
                            </h2>

                            <p className="test-description mt-3 mx-auto">
                                Challenge yourself and measure how fast and accurately
                                you can type. Track your typing speed, accuracy,
                                words typed, and performance in real time.
                            </p>

                            <p className="test-description mt-3 fs-3 fw-semibold">
                                Each Test Increases Your Progress
                            </p>

                        </div>
                    </div>
                </div>


                <div className="container typing-test-container px-3 py-4 mt-3">

                    <div className="carousel slide" id='carouselSlide_wrapper '>

                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselSlide_wrapper" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselSlide_wrapper" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselSlide_wrapper" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselSlide_wrapper" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>

                        <div className="carousel-inner rounded-4 h-75" >
                            {aboutTestData.map((rw, i) => {
                                return (

                                    <div className={`carousel-item ${i === 0 ? "active" : ""}`} style={{ height: "800px" }} key={i} >
                                        <img src={timerTypingTest} className="d-block w-100" alt="..." style={{ objectFit: "cover" }} />
                                        <div className="carousel-caption d-block">
                                            <h5>{rw.title}</h5>
                                            <p>{rw.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselSlide_wrapper" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselSlide_wrapper" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>

                    </div>

                </div>

                <div className="text-center py-4" id='btnDisplayBox'>
                    <Link
                        to="/DisplayBox"
                        className="btn btn-dark btn-lg px-5 py-3 rounded-pill shadow-sm"
                    >
                        Start Your Progress
                        <span className="ms-2">→</span>
                    </Link>
                </div>

            </section>
        </>
    )
}

export default HeroPageCenter