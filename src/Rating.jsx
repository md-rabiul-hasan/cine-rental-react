import React from 'react';
import Star from "./assets/star.svg";

export default function Rating({ rating }) {
    // Create an array of star icons based on the rating value
    const stars = Array(rating).fill(Star);

    return (
        <div className="flex items-center space-x-1 mb-5">
            {stars.map((star, index) => (
                <img key={index} src={star} width="14" height="14" alt="Star" />
            ))}
        </div>
    );
}
