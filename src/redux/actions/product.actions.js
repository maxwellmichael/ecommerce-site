
export const CREATE_PRODUCT = (product)=>(dispatch, {getFirebase,})=>{

    const firestore = getFirebase();
    console.log(firestore)
}

export const GET_PRODUCTS = ()=>(dispatch, getState, {getFirebase})=>{

    const firestore = getFirebase().firestore();
    const products = firestore.collection('sets').get().then(data=>console.log(data))
    console.log(products)
}