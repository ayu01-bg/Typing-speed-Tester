import React from "react";

const DisplayBox = ({ paragraph, onStart }) => {

    return (
        <>
            <div className="col-12 container border displayBox-container displayBox p-2 h-100 typing-test-section">

                <div className="row m-0 typing-test-row">

                    {/* Test Options / Controls Sidebar */}
                    <div className="col-lg-3 border d-flex flex-column gap-2 test-options-sidebar">


                    </div>


                    {/* Main Test Content */}
                    <div className="col-lg-9 border test-content-section">

                        {/* Test Mode Buttons */}
                        <div className="d-flex justify-content-center align-items-center gap-3 py-4 test-mode-controls">

                            {/* Test Mode Button 1 */}
                            <button
                                className=" px-4 py-2 fw-semibold shadow-sm rounded-2 test-mode-button test-mode-button-one"
                                onClick={() => {
                                    console.log("button clicked:");
                                    onStart();
                                }}
                            >
                                Start
                            </button>

                            <button
                                className=" px-4 py-2 fw-semibold shadow-sm rounded-2 test-mode-button test-mode-button-two"
                                onClick={() => {
                                    console.log("button clicked:");
                                    onStart();
                                }}
                            >
                                Start
                            </button>

                            <button
                                className=" px-4 py-2 fw-semibold shadow-sm rounded-2 test-mode-button test-mode-button-three"
                                onClick={() => {
                                    console.log("button clicked:");
                                    onStart();
                                }}
                            >
                                Start
                            </button>

                        </div>


                        {/* Paragraph Display Area */}
                        <div className="displayBox m-auto border border-3 border-primary rounded-2 p-3 overflow-y-scroll typing-paragraph-display">

                            {paragraph ? (
                                <p className="typing-paragraph-text">
                                    {paragraph.paragraph}
                                </p>
                            ) : (
                                <p className="typing-paragraph-placeholder">
                                    Click to Show Paragraph
                                </p>
                            )}

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default DisplayBox