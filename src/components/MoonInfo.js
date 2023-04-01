import React, { useState } from "react";

// started this for the moon cards that can have a next and previous button for the planets with multiple moons
function MoonInfo() {
    const [currentCard, setCurrentCard] = useState(0);

    return(
        <div>
             <button onClick={handlePrevCard}>Prev</button>
            <button onClick={handleNextCard}>Next</button>
        </div>
    )

function handleNextCard() {
    setCurrentCard(currentCard === cardData.length - 1 ? 0 : currentCard + 1);
  }
  
  function handlePrevCard() {
    setCurrentCard(currentCard === 0 ? cardData.length - 1 : currentCard - 1);
  }
}