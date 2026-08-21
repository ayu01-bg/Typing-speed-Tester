import React from 'react'

const ParaDisplaBox = ({ paragraph, started, paused }) => {
    return (
        <div>
            <div className="paraDisplayBox m-auto rounded-2 p-3 overflow-y-scroll typing-paragraph-display">

                {paragraph ? (
                    <div className={`typing-paragraph-wrapper 
                        ${started ? "paragraph-running" : ""}
                        ${paused ? "paragraph-paused" : ""}
                        `}>

                        <p className="typing-paragraph-text">
                            {paragraph.paragraph}
                        </p>
                    </div>
                ) : (
                    <p className="typing-paragraph-placeholder">
                        Click to Start Test
                    </p>
                )}

            </div></div>
    )
}

export default ParaDisplaBox

