import React from 'react';

const OneCat = (props) => {
    return (
        <div>
            <h2>Cat Name: {props.match.params.catName}</h2>
        </div>
    );
};

export default OneCat;