import {motion} from 'framer-motion'
import {Row} from 'react-bootstrap'


const WomensClothingPage = ()=>{


    return(
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ease:'easeInOut', duration:0.6, delay:0.5}} 
        exit={{x:'-100vw', opacity:0, transition:{ease:'easeInOut', duration:0.6}}} style={{ padding: 0, overflowX: 'hidden', maxWidth:'100vw'}}>

            <Row>
                <div className="clothing-title-1">Men's Clothing</div>
            </Row>
            

        </motion.div>
    )
}

export default WomensClothingPage;