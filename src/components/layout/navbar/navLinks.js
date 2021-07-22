import {NavLink} from './navElements'
import React from 'react';


const Links = ()=>{

    return(
        <React.Fragment>
            <NavLink to='/clothing/men' activeStyle>
                <span style={{fontFamily: `'Josefin Sans', sans-serif`}}>MEN</span>
            </NavLink>
            <NavLink to='/clothing/women' activeStyle>
                <span style={{fontFamily: `'Josefin Sans', sans-serif`}}>WOMEN</span>
            </NavLink>
            <NavLink to='/about' activeStyle>
                <span style={{fontFamily: `'Josefin Sans', sans-serif`}}>ABOUT</span>
            </NavLink>
        </React.Fragment>
    )
}

export default Links