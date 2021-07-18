import Navbar from './navbar';

const Layout = (props)=>{

    return(
        <div className='layout'>
            <Navbar/>
            {props.children}
        </div>
    )
}
export default Layout;