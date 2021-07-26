const initialState=[]

const cartReducer = (state=initialState, action)=>{
    let cart = [...state];
    switch(action.type){

        case 'ADD_TO_CART':
            cart.push(action.payload.product);
            return cart;
        
        case 'REMOVE_FROM_CART':
            const product_id = action.payload.id;
            cart.filter(product=>product.id===product_id);
            return cart;

        default:
            return [...state];
    }
}

export default cartReducer;