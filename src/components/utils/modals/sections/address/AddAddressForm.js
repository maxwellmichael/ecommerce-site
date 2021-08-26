import React from "react";
import { useForm } from "react-hook-form";
import { ADD_ADDRESS_TO_FIRESTORE } from "../../../../../redux/actions/address.actions";
import {connect} from 'react-redux';
//import {auth} from '../../../../../firebase/authServices';


function AddressForm(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = data =>{
    data = {...data, user_id:props.user.uid}
    props.dispatch(ADD_ADDRESS_TO_FIRESTORE(data))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' placeholder='Name' {...register("name", { required: true })} /><br />
        <input type='text' placeholder='Address' {...register("address", { required: true })} /><br />
        <input type='tel' placeholder='Mobile' {...register("mobile", { required: true })} /><br />
        <input type='number' placeholder='Pincode' {...register("pincode", { required: true })} /><br />
        <input type='text' placeholder='State' {...register("state", { required: true })} /><br />
        <input type='text' placeholder='Locality/Town' {...register("locality", { required: true })} /><br />
        <input type='text' placeholder='City/District' {...register("district", { required: true })} /><br />
        <input type='checkbox' {...register("defaultAddress", {})} /><br />
        <label for="scales">Use This as My Default Address</label><br />
      <input type="submit" />
    </form>
  );
}

const mapStateToProps = (state)=>{

  return({
    user: state.user,
  })
}

export default connect(mapStateToProps)(AddressForm);