import Navbar from './navbar';
import {connect} from 'react-redux';
import { UPDATE_USER } from '../../redux/actions/user.actions';
import Modal from '../utils/modals';

const Layout = (props)=>{
    props.dispatch(UPDATE_USER())
    return(
        <div style={{backgroundColor:'#f8f6f4'}} className='layout'>
            <Navbar/>
            {props.modal.isVisible?<Modal />:null}
            {props.children}
        </div>
    )
}

const mapStateToProps = (state)=>{

    return({
        modal: state.modal
    })
}

export default connect(mapStateToProps)(Layout);