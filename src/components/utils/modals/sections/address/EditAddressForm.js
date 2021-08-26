import React from "react";
import { useForm } from "react-hook-form";
import { UPDATE_ADDRESS_ON_FIRESTORE } from "../../../../../redux/actions/address.actions";
import {connect} from 'react-redux';


function EditAddressForm(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = data =>{
    data = {...data, user_id:props.user.uid}
    console.log(data)
    props.dispatch(UPDATE_ADDRESS_ON_FIRESTORE(props.address.id, data))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' defaultValue={props.address.name} placeholder='Name' {...register("name", { required: true })} /><br />
        <input type='text'defaultValue={props.address.address} placeholder='Address' {...register("address", { required: true })} /><br />
        <input type='tel' defaultValue={props.address.mobile} placeholder='Mobile' {...register("mobile", { required: true })} /><br />
        <input type='number' defaultValue={props.address.pincode} placeholder='Pincode' {...register("pincode", { required: true })} /><br />
        <input type='text' defaultValue={props.address.state} placeholder='State' {...register("state", { required: true })} /><br />
        <input type='text' defaultValue={props.address.locality} placeholder='Locality/Town' {...register("locality", { required: true })} /><br />
        <input type='text' defaultValue={props.address.district} placeholder='City/District' {...register("district", { required: true })} /><br />
        <input type='checkbox' {...register("defaultAddress", {})} /><br />
        <label>Use This as My Default Address</label><br />
      <input type="submit" />
    </form>
  );
}

const mapStateToProps = (state)=>{

  return({
    user: state.user,
  })
}

export default connect(mapStateToProps)(EditAddressForm);