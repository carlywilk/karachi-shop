import { useState } from "react";

import "./FlipCard.scss";

export function FlipCard({ image, infoOne, infoTwo, infoThree }) {
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        setFlipped(!flipped);
    };

    return (
        <div className="flipcard__container">
            <div className={`flipcard ${flipped ? "flipped" : ""}`} onClick={handleClick}>
                <div className="flipcard__front">
                    <img className="flipcard__image" src={image} alt="Front" />
                </div>
                <div className="flipcard__back">
                    <div className="flipcard__back-overlay">
                        <p className="flipcard__text">{infoOne}</p>
                        <p className="flipcard__text">{infoTwo}</p>
                        <p className="flipcard__text">{infoThree}</p>
                    </div>
                    <img className="flipcard__image flipcard__image--grayscale" src={image} alt="" />
                </div>
            </div>
        </div>
    )
}