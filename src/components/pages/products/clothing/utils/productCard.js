import Carousel from 'react-bootstrap/Carousel'

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
                    <div className="product-card-product-name">
                        {props.product.name}
                    </div>
                    <div className="product-card-price">
                        {props.product.selling_price}<span>/set</span>
                    </div>
                    <div className="product-card-price">
                        {props.product.items.length}<span>Pieces</span>
                    </div>
                </div>
                

            </div>

        </div>
    )
}

export default ProductCard;