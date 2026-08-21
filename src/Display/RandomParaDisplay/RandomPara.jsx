import React, { useState } from "react"
import DisplayBox from "../DisplayBox/DisplayControlBox"
import { typingParagraphs, getParagraph } from "../../content/Paragraph";
import Navbar from "../../Navbar/Navbar";

const Randompara = () => {
    const [selectedParagraph, setselectedParagraph] = useState(null)

    const handleClick = () => {
        const newParagraph = getParagraph(typingParagraphs)
        setselectedParagraph(newParagraph);
    }

    return (
        <>
            <div className="randomParaDisplay container-fluid">
                <div className="row gap-5 p-2 m-0 randomDisplay-wrapper ">
                    <Navbar />

                    <DisplayBox
                        paragraph={selectedParagraph}
                        onStart={handleClick}
                    />
                </div>
            </div>
        </>

    )
}
export default Randompara