import React, { useState } from "react"
// import TypingBox from "../TypingBox/typingBox"
import DisplayBox from "../DisplayBox/DisplayBox"
import { typingParagraphs, getParagraph } from "../../content/Paragraph";





const Randompara = () => {
    const [selectedParagraph, setselectedParagraph] = useState(null)

    const handleClick = () => {
        const newParagraph = getParagraph(typingParagraphs)
        setselectedParagraph(newParagraph);
    }

    return (
        <>
            <div className="randomParaDisplay container-fluid border border-4 border-danger p-2">
                <div className="row border border-2 gap-5 p-2 m-0 randomDisplay-wrapper ">


                    <DisplayBox />


                </div>
            </div>
        </>

    )
}
export default Randompara