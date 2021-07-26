import Carousel from 'react-bootstrap/Carousel'
import Image1 from '../../../../../images/products/product1/11493980166120-Roadster-Men-White-Printed-Round-Neck-T-shirt-4411493980165893-5.jpg'
import Image2 from '../../../../../images/products/product1/11493980166143-Roadster-Men-White-Printed-Round-Neck-T-shirt-4411493980165893-4.jpg'
import Image3 from '../../../../../images/products/product1/11493980166174-Roadster-Men-White-Printed-Round-Neck-T-shirt-4411493980165893-2.jpg'

const ProductCard = ()=>{

    const Images = [Image1, Image2, Image3];

    return(
        <div className="product-card">
            <div className='product-card-carousel'>
                <Carousel>
                    {Images.map((image, i)=>
                        <Carousel.Item key={i} interval={1000}>
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
                    <div className="product-card-brand">
                        Moda Rapido
                    </div>
                    <div className="product-card-product-name">
                        Solid Polo Collar T-shirt
                    </div>
                </div>
                
                <div className="product-card-content-secondary">
                        <button className="product-card-content-button">Wishlist</button>
                        <div className="product-card-content-sizes">
                            Sizes: S M L XL XXL XXXL
                        </div>
                </div>
            </div>
            <div className="product-card-content-container">
                <div className="product-card-content">
                    <div style={{display:'inline'}} className="product-card-brand">
                        ₹599<span className="product-card-product-name"> <strike>₹649</strike> <span style={{color:'pink'}}>(40% OFF)</span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;