import ProductCard from "./clothing/utils/productCard";
import{connect} from 'react-redux';

const Products = (props)=>{
    console.log(props.products)
    return(
        <div>
            Products Page
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>

        </div>
    )
}

const mapStateToProps = (state)=>{

    return({
        products: state.products,
    })
}

export default connect(mapStateToProps)(Products);