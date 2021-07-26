import { auth, googleAuthProvider } from "../../firebase/authServices";

export const LOGIN_SUCCESS = (user) => {
  return {
    type: "LOGIN_SUCCESS",
    currentUser: user,
  }
}

export const REGISTER_SUCCESS = () => {
  return {
    type: "REGISTER_SUCCESS",
    currentUser: auth.currentUser.toJSON(),
  }
}

export const LOGOUT_SUCCESS = ()=>{
    return {
        type: "LOGOUT_SUCCESS",
      }
}

export const REGISTER = (email, password) => async dispatch => {
  try {
    await auth.createUserWithEmailAndPassword(email, password)
    dispatch(REGISTER_SUCCESS())
  } catch (error) {
    throw error
  }
}

export const LOGIN = (email, password) => async dispatch => {
  try {
    await auth.signInWithEmailAndPassword(email, password)
    dispatch(LOGIN_SUCCESS(auth.currentUser.toJSON()))
  } catch (error) {
    throw error
  }
}

export const LOGIN_WITH_GOOGLE = ()=> async dispatch =>{
    try{
        auth.signInWithPopup(googleAuthProvider).then(() => {
            dispatch(LOGIN_SUCCESS(auth.currentUser.toJSON()))
        })
    }
    catch (error) {
        throw error
    }
}

export const LOGOUT = ()=>async dispatch =>{
    try{
        auth.signOut().then(result => {
            // successful...
            console.log(result)
            dispatch(LOGOUT_SUCCESS())
        })
    }
    catch (error) {
        throw error;
    }
}

export const UPDATE_USER = ()=>async dispatch =>{
    try{
        auth.onAuthStateChanged(user => {
            dispatch(LOGIN_SUCCESS(user))
        });
    }
    catch(error){
        throw error;
    }
}