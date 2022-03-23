import React from 'react';

const Card = (props) => {
console.log()
    return (
        <div>
            <h2>Summary </h2>
            <p>Seclected Item {props.product.length}</p>
        </div>
    );
};

export default Card;