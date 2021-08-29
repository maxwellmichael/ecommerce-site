import {NavLink} from './navElements'
import React from 'react';


const Links = ()=>{

    return(
        <React.Fragment>
            <NavLink to='/products'>
                <span style={{fontFamily: `'Josefin Sans', sans-serif`}}>PRODUCTS</span>
            </NavLink>
            <NavLink to='/about'>
                <span style={{fontFamily: `'Josefin Sans', sans-serif`}}>ABOUT</span>
            </NavLink>
            <NavLink to='/contact'>
                <span style={{fontFamily: `'Josefin Sans', sans-serif`}}>CONTACT</span>
            </NavLink>
        </React.Fragment>
    )
}

export default Links