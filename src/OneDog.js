import React from 'react';

const OneDog = (props) => {

    const allToys = props.toys;
    const dogName = props.match.params.dogName;
    const myToys = allToys[dogName];
    return (
        <div>
            <h2>{dogName}</h2>
            <ul>
                {myToys.map((toy, i) => {
                    return <li key={i}>{toy}</li>
                })}
            </ul>
        </div>
    );
};

export default OneDog;