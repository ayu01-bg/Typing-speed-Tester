import React, { useRef } from "react";

const TypingBox = ({ paragraph }) => {

    const txt = useRef()

    return (
        <>
            <div className="col-12 typingBoxDisplay d-flex justify-content-center py-3">
                <textarea ref={txt} className="typingBox p-2  rounded-2 ">
                    {

                    }
                </textarea>
            </div>
        </>
    )
}

export default TypingBox