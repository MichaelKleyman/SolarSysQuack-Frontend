import React, {useState} from "react";

// started this for the info cards that will flip with the info.. should call for the facts and the little details listed on the figma page

function Card({frontContent, backContent}) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (

        <div className="card" onClick={handleClick}>
            <div className={`card-front ${isFlipped ? "hidden" : ""}`}>
                {frontContent}
            </div>
            <div className={`card-back ${isFlipped ? "" : "hidden"}`}>
                {backContent}
            </div>
        </div>

    );   
}

export default Card;