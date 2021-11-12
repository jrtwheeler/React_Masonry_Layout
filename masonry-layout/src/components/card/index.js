import React from "react";

const Card = ({images}) => {

    return (
        <>
            {images.map((img, index) => (
                <div 
                className="card"
                key={index}
                style={{background}}
                >
                    
                </div>
            ))}
        </>
    );
};

export default Card;