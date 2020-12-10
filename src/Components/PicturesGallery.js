import React from 'react';

export function PicturesGallery(props) {

    let paramId = props.match.params.id;
    if (Number.isInteger(parseInt(paramId))) {
        console.log(paramId);
    } else if(paramId === 'undefined') {
        paramId = "Параметр не задан";
    }

    return (
        <>
            <h2>Pictures gallery</h2>
            <p>picture one</p>
            <p>picture two</p>
            <p>picture three</p>
            <p>...picture n</p>
            <hr />
            <p>Recieved param: {paramId}</p>
        </>
    )
}