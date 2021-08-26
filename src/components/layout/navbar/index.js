import React, {useState} from 'react';
import {ReactComponent as Logo} from '../../../images/icons/logo.svg'; 
import {AnimatePresence, motion} from 'framer-motion';
import {FiShoppingCart} from 'react-icons/fi';
import {HiUserCircle} from 'react-icons/hi'
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
          
          {props.user && <button onClick={()=>props.dispatch(LOGOUT())}>Log Out</button>}
          {!props.user && <NavBtnLink to='/user/login'>Sign In</NavBtnLink>}
          {props.user && <NavLink to='/user/profile' style={{fontSize:'24px'}}><HiUserCircle/></NavLink>}
          <NavLink to='/cart' style={{fontSize:'24px'}}><FiShoppingCart/></NavLink>
        </NavBtn>
      </Nav>
    </>
  );
};

const mapStateToProps = (state)=>{

  return({
    user: state.user,
  })
}

export default connect(mapStateToProps)(Navbar);