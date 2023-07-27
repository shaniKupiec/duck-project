import React from 'react';


function DuckItem({ duck }) {
    const imageFileName = duck.src;

    return (
        <div>
            {/* <img src={require(`./images/ducks/${imageFileName}`).default} alt={duck.occupation} /> */}
            <div>occupation : {duck.occupation}</div>
            <div>number : {duck.id}</div>
        </div>
    );
}

export default DuckItem;