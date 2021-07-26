import {NavLink} from './navElements'
import React from 'react';


const Links = ()=>{

    return(
        <React.Fragment>
            <NavLink to='/clothing/men'>
                <span style={{fontFamily: `'Josefin Sans', sans-serif`}}>MEN</span>
            </NavLink>
            <NavLink to='/clothing/women'>
                <span style={{fontFamily: `'Josefin Sans', sans-serif`}}>WOMEN</span>
            </NavLink>
            <NavLink to='/about'>
                <span style={{fontFamily: `'Josefin Sans', sans-serif`}}>ABOUT</span>
            </NavLink>
        </React.Fragment>
    )
}

export default Links