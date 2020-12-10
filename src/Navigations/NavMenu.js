import React from 'react';

import {Link, NavLink} from 'react-router-dom';

export default function NavMenu() {

    return(
        <>
            <NavLink to="/" className="links">Artist's biography</NavLink>
            <NavLink to="/picture" className="links">Famous picture</NavLink>
            <NavLink to="/gallery/" className="links">Pictures' Gallery</NavLink>
        </>
    )
}