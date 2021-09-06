import Carousel from 'react-bootstrap/Carousel';
import {Grid, Button} from '@material-ui/core';
import {FaCartPlus} from 'react-icons/fa';

const ProductCard = (props)=>{


    const images = props.product.items.map((item)=>item.image_url.src)
    images.push(props.product.main_image.src);

    return(
        <div className="product-card">
            <div className='product-card-carousel'>
                <Carousel>
                    {images.map((image, i)=>
                        <Carousel.Item key={i} >
                            <img
                            className="d-block w-100"
                            src={image}
                            alt="slide"
                            />
                        </Carousel.Item>
                    )}
                </Carousel>
            </div>
            
            <div className="product-card-content-container">

                <div className="product-card-content-primary">
                    
                    <Grid container spacing={3}>

                        <Grid item xs={12}>
                            <div className="product-card-product-name">
                                {props.product.name}
                            </div>
                        </Grid>

                        <Grid xs={6} item>
                            <div className="product-card-content-text-secondary">
                                ₹{props.product.selling_price}<span>/set</span>
                            </div>
                            <div className="product-card-content-text-secondary">
                                {props.product.items.length}<span> Pieces</span>
                            </div>
                        </Grid>

                        <Grid xs={6} item>
                            <Button variant="outlined" color="primary" startIcon={<FaCartPlus />}>Cart</Button>
                        </Grid>

                    </Grid>
                    
                </div>
                

            </div>

        </div>
    )
}

export default ProductCard;