import {motion} from 'framer-motion';
import Caurosel from './sections/caurosel';
import Categories from './sections/categories';

const LandingPage = ()=>{

    return(
        <motion.div style={{backgroundColor:'#f8f6f4'}} transition={{duration:0.8}} initial={{y:300, opacity: 0 }} animate={{y:0, opacity: 1 }}>
            <Caurosel />
            <Categories />
           
        </motion.div>
    )
}

export default LandingPage;