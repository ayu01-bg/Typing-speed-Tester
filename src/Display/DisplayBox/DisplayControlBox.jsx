import React, { useState } from "react";
import TypingBox from "./typingBox";
import ParaDisplaBox from "./ParaDisplaBox";
import { Link, Links } from "react-router-dom";

const DisplayBox = ({ paragraph, onStart }) => {
    const [started, setStarted] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const [isResume, setIsResume] = useState(false)


    return (
        <>
            <div className="col-12 container displayBoxController displayBox p-2 h-100 typing-test-section">

                <div className="row m-0 justify-content-center gap-2 typing-test-row">

                    {/* Test Options / Controls Sidebar */}
                    <div className="col-lg-3 test-options-sidebar py-3">

                        <div className="p-3 rounded-4 glass-sidebar">

                            <div className="text-uppercase small fw-bold text-white mb-3">
                                Test Modes
                            </div>

                            <div className="d-flex flex-column gap-2">

                                {/* Timing Based */}
                                <div>
                                    <Link
                                        to=""
                                        className="btn btn-outline-secondary w-100 text-start px-3 fw-semibold"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTimingBasedTyping"
                                        aria-expanded="true"
                                    >
                                        <span>⏱️</span> Timing Based Typing
                                    </Link>

                                    <div
                                        className="collapse show"
                                        id="collapseTimingBasedTyping"
                                    >
                                        <div className="d-flex flex-column gap-2 mt-2 ps-2">

                                            <Link className="btn btn-md btn-light text-start rounded-3">
                                                30 sec Typing
                                            </Link>

                                            <Link className="btn btn-md btn-light text-start rounded-3">
                                                60 sec Typing
                                            </Link>

                                            <Link className="btn btn-md btn-light text-start rounded-3">
                                                1 min Typing
                                            </Link>

                                        </div>
                                    </div>
                                </div>


                                {/* Word Based */}
                                <div>
                                    <Link
                                        to=""
                                        className="btn btn-outline-secondary w-100 text-start px-3 fw-semibold"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseWordBasedTyping"
                                        aria-expanded="false"
                                    >
                                        <span>📝</span> Word Based Typing
                                    </Link>

                                    <div
                                        className="collapse show"
                                        id="collapseWordBasedTyping"
                                    >
                                        <div className="d-flex flex-column gap-2 mt-2 ps-2">

                                            <Link className="btn btn-md btn-light text-start rounded-3">
                                                30 Words Per Minute
                                            </Link>

                                            <Link className="btn btn-md btn-light text-start rounded-3">
                                                54 Words Per Minute
                                            </Link>

                                            <Link className="btn btn-md btn-light text-start rounded-3">
                                                80 Words Per Minute
                                            </Link>

                                        </div>
                                    </div>
                                </div>


                                {/* Accuracy Based */}
                                <Link
                                    to=""
                                    className="btn btn-outline-secondary w-100 text-start px-3 fw-semibold"
                                >
                                    <span>🎯</span> Accuracy Based Typing
                                </Link>

                            </div>

                        </div>

                    </div>


                    {/* Main Test Content */}
                    <div className="col-lg-8 typing-content-section">

                        {/* Test Mode Buttons */}
                        <div className="d-flex justify-content-center align-items-center gap-3 py-4 test-mode-controls">

                            {/* Test Mode Button 1 */}
                            <button
                                className=" px-4 py-2 fw-semibold shadow-sm rounded-2 test-mode-button test-mode-button-one"
                                onClick={() => {
                                    // console.log("button clicked:");
                                    onStart();


                                    setStarted(true);
                                    setIsPaused(false)
                                    setIsResume(false)
                                }}
                            >
                                Start
                            </button>

                            <button
                                className=" px-4 py-2 fw-semibold shadow-sm rounded-2 test-mode-button test-mode-button-two"
                                onClick={() => {

                                    setIsPaused(prev => !prev);

                                }}
                            >
                                {isPaused ? "Resume" : "Pause"}
                            </button>
                        </div>


                        {/* Paragraph Display Area */}
                        <ParaDisplaBox
                            paragraph={paragraph}
                            started={started}
                            paused={isPaused}
                        />

                        <TypingBox paragraph={paragraph} />

                    </div>




                </div>

            </div >
        </>
    )
}

export default DisplayBox