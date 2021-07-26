
const initialState = [
    {   
        id: '1',
        name: 'BLACK TSHIRT',
        mrp: 600,
        sizes:[
            {
                size: 'XL',
                quantity: 50,
                sp: 500,
            },
            {
                size: 'L',
                quantity: 50,
                sp: 400,
            },
            {
                size: 'M',
                quantity: 50,
                sp: 300,
            },
        ],
        type:'clothing',
        category: 'T-Shirt',
        color: 'white',
        design: 'Plain',
        fit: 'Slim',
        sleeve: 'Half Sleeve',
        neck: 'Round Neck',
        brand: 'Addidas',
        gender: 'male',
        images:['','',''],
        createdAt:'',
        modifiedAt:''
    },
    {   
        id: '2',
        name: 'BLACK TSHIRT',
        maximum_retail_price: 600,
        sizes:[
            {
                size: 'XL',
                quantity: 50,
                selling_price: 500,
            },
            {
                size: 'L',
                quantity: 50,
                selling_price: 400,
            },
            {
                size: 'M',
                quantity: 50,
                selling_price: 300,
            },
        ],
        type:'clothing',
        category: 'T-Shirt',
        color: 'white',
        design: 'Plain',
        fit: 'Slim',
        sleeve: 'Half Sleeve',
        neck: 'Round Neck',
        brand: 'Addidas',
        gender: 'male',
        images:['','',''],
        createdAt:'',
        modifiedAt:''
    },
]


const productReducer = (state=initialState, action)=>{
    let products = [...state];
    switch(action.type){

        case 'ADD_PRODUCT':
            products.push(action.payload.product);
            return products;
        
        case 'REMOVE_PRODUCT':
            const product_id = action.payload.product.id;
            products.filter(product=>product.id===product_id);
            return products;

        case 'REMOVE_ALL_PRODUCTS':
            return [];

        default:
            return [...state];

    }
}

export default productReducer;