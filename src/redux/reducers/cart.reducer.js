const initialState=[]

const cartReducer = (state=initialState, action)=>{
    let cart = [...state];
    switch(action.type){

        case 'ADD_TO_CART':
            cart.push(action.payload.product);
            return cart;
        
        case 'CLEAR_CART':
            return [];

        default:
            return [...state];
    }
}

export default cartReducer;