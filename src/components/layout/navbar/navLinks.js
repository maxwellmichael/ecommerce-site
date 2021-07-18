import {NavLink} from './navElements'
import React from 'react';

const Links = ()=>{

    return(
        <React.Fragment>
            <NavLink to='/' activeStyle>
                Home
            </NavLink>
            <NavLink to='/products' activeStyle>
                Products
            </NavLink>
            <NavLink to='/about' activeStyle>
                About
            </NavLink>
        </React.Fragment>
    )
}

export default Links