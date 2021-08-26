import {motion} from 'framer-motion'
import {Row, Col} from 'react-bootstrap'
import FilterDropdown from '../../utils/filterDropdown';
import ProductCard from './clothing/utils/productCard';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {useSelector} from 'react-redux';
import { useFirestoreConnect } from "react-redux-firebase";



const ClothingPage = (props)=>{

    useFirestoreConnect({
        collection: `sets`,
    });
    const sets = useSelector((state)=>state.firestore.data.sets)
    console.log('Sets', sets)
    console.log(props)
    const options = [
        'NEWEST', 'FEATURED', 'Price: High to Low', 'Price: Low to High'];

    const defaultOption = options[0];

    const mensFilters = [
        {
            name:'CATEGORY',
            types:['T-Shirt', 'Shirt', 'Vest', 'Shorts', 'Joggers', 'Boxers'],
        },
        {
            name:'SIZES',
            types:['STANDARD', 'XS', 'S', 'M', 'L', 'XL', '2XL'],
        },
        {
            name:'COLORS',
            types:['BLACK', 'BLUE', 'RED', 'WHITE', 'GREEN'],
        },
        {
            name:'DESIGN',
            types:['PLAIN', 'PRINTED', 'CHEQUED', 'CHEST PRINTED'],
        },

    ];


    return(
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ease:'easeInOut', duration:0.6, delay:0.5}} 
        exit={{x:'-100vw', opacity:0, transition:{ease:'easeInOut', duration:0.6}}}>

            <Row style={{margin:0}}>
                <div className="clothing-title-1">Men's Clothing</div>
            </Row>
            <Row style={{margin:0, width:'100%'}}>
                <Col xs={12} md={2} style={{padding:'12px 30px 6px 40px', position:'sticky', height:'500px', top:0}}>
                    <div className="clothing-filters">
                        <Row style={{margin:0}}>
                            <div className="clothing-title-3-faded filter-dropdown-heading">FILTERS</div>
                        </Row>
                        {mensFilters.map((filter, i)=><FilterDropdown key={i} filter={filter} />)}
                    </div>
                </Col>
                <Col xs={12} md={10} style={{padding:0}}>
                    <Row style={{margin:0}}>
                        <Dropdown className="sort-dropdown" controlClassName="sort-dropdown-control" options={options} value={defaultOption} placeholder="SORT" />
                    </Row>
                    <Row style={{margin:'100px 0 0 0'}}>
                        <div className="clothing-card-container">

                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>

                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>

                        </div>
                    </Row>
                    
                </Col>
            </Row>

        </motion.div>
    )
}


export default ClothingPage;