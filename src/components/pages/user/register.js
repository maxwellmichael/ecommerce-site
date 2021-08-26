import React from 'react';
import { useForm } from 'react-hook-form';
import {REGISTER, LOGIN_WITH_GOOGLE} from '../../../redux/actions/user.actions';
import {connect} from 'react-redux';



const Register = (props) => {
  const { handleSubmit, register, formState: { errors } } = useForm();


  const onSubmit = handleSubmit((data) => {
    console.log(data);
    props.dispatch(REGISTER(data.email, data.password));
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='email' type='text' name='email' {...register("email")} />
      
      <input placeholder='password' type='password' name='password' {...register("password", { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
      <button onClick={()=>props.dispatch(LOGIN_WITH_GOOGLE())}>Login With Google</button>
    </form>
  );
};


export default connect()(Register);