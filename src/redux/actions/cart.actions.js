

export const ADD_TO_CART = (product)=>{

    return({
        type: "ADD_TO_CART",
        payload:{
            product: product,
        },
    });
}

export const REMOVE_FROM_CART = (id)=>{

  return({
      type: "REMOVE_FROM_CART",
      payload:{
          id: id,
      }
  });
}