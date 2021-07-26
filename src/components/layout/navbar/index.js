import React, {useState} from 'react';
import {ReactComponent as Logo} from '../../../images/icons/logo.svg'; 
import {AnimatePresence, motion} from 'framer-motion';
import {FiShoppingCart} from 'react-icons/fi';
import {firebase} from '../../../firebase/config';
import { LOGOUT } from '../../../redux/actions/user.actions';
import {
  Nav,
  NavLink,
  Bars,
  NavBtn,
  NavBtnLink
} from './navElements';
import Links from './navLinks';
import {connect} from 'react-redux';


const Navbar = (props) => {
    const [sideNavMenu, setSideNavMenu] = useState(false);
    const user = firebase.auth().onAuthStateChanged(user => user)
    console.log('User:',user)
    const ToggleSideNavMenu = ()=>{
        setSideNavMenu(!sideNavMenu)
    }


  return (
    <>
      <Nav>
        <NavLink style={{margin:'auto 80px auto 0', padding:'auto'}} to='/'>
            <Logo/>
        </NavLink>
        <Bars onClick={()=>ToggleSideNavMenu()} />

        <motion.div className="nav-menu" transition={{duration:1}}
        initial={{x:300, opacity: 0 }}
        animate={{x:0, opacity: 1 }}>
          <Links/>
        </motion.div>

        <AnimatePresence>
            {sideNavMenu&&<motion.div 
                className="side-nav-menu"
                transition={{duration:0.6}}
                initial={{x:-300, opacity: 0 }}
                animate={{x:0, opacity: 1 }}
                exit={{x:-300, opacity: 0 }}>
                <Links/>
            </motion.div>}
        </AnimatePresence>


        <NavBtn>
          <button onClick={()=>props.dispatch(LOGOUT())}>Log Out</button>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          <NavLink to='/cart' style={{fontSize:'24px'}}><FiShoppingCart/></NavLink>
        </NavBtn>
      </Nav>
    </>
  );
};


export default connect()(Navbar);