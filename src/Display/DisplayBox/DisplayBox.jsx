import React from "react";

const DisplayBox = ({ paragraph, onStart }) => {

    return (
        <>
            <div className="col-12 border displayBox-container displayBox  p-2 h-100 ">

                <button className="btn btn-primary"
                    onClick={() => {
                        console.log("button clicked:");
                        onStart();
                    }}
                >
                    Start
                </button>


                <div className="displayBox m-auto border border-3 border-primary rounded-2 p-3 overflow-y-scroll  ">
                    {paragraph ? (<p>{paragraph.paragraph}</p>) : (<p>Click to Show Paragraph</p>)}
                </div>
            </div>
        </>
    )
}

export default DisplayBox