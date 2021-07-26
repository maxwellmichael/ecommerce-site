import Navbar from './navbar';
import {connect} from 'react-redux';
import { UPDATE_USER } from '../../redux/actions/user.actions';

const Layout = (props)=>{
    props.dispatch(UPDATE_USER())
    return(
        <div className='layout'>
            <Navbar/>
            {props.children}
        </div>
    )
}
export default connect()(Layout);