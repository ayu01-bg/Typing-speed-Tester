import React from 'react'
import timerTypingTest from '../assets/images/timerTypingTest.jpg'
import { Hourglass } from 'lucide-react'
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
                                ⚡ Typing Speed Test
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


                <div className="container typing-test-container p-3 mt-3">

                    {aboutTestData.map((rw, i) => {
                        return (
                            <div
                                className="row typing-test-row justify-content-center
                            p-2 m-0 rounded-4 shadow-sm mb-3
                           align-items-center"
                                key={i}
                            >

                                <div className="col-lg-4 col-md-6 col-12 typing-test-image-col p-2">
                                    <img
                                        className="typing-test-image img-fluid rounded-4 shadow-sm"
                                        src={timerTypingTest}
                                        alt={rw.title}
                                    />
                                </div>

                                <div className="col-lg-8 col-md-6 col-12 typing-test-description-col  p-3 p-lg-4 rounded-4">

                                    <div className=' py-2'>
                                        <h4 className="mb-3 d-inline rounded-5 p-2 fw-semibold ">
                                            {rw.title}
                                        </h4>
                                    </div>

                                    <div>
                                        <p className="mb-0 mt-2">
                                            {rw.description}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        )
                    })}

                </div>


                    <Link to='/DisplayBox'>Start Your Progress</Link>

            </section>
        </>
    )
}

export default HeroPageCenter