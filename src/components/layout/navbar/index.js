import React, {useState} from 'react';
import {ReactComponent as Logo} from '../../../images/icons/logo.svg'; 
import {AnimatePresence, motion} from 'framer-motion';
import {FiShoppingCart} from 'react-icons/fi';
import {
  Nav,
  NavLink,
  Bars,
  NavBtn,
  NavBtnLink
} from './navElements';
import Links from './navLinks';

const Navbar = () => {
    const [sideNavMenu, setSideNavMenu] = useState(false);

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
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          <NavLink to='/cart' style={{fontSize:'24px'}}><FiShoppingCart/></NavLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;