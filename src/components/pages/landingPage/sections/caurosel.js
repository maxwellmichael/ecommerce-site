import {motion, AnimatePresence} from 'framer-motion';
import CauroselImage1 from '../images/caurosel/slider-image-1.jpg';
import CauroselImage2 from '../images/caurosel/slider-image-2.jpg';
import CauroselImage3 from '../images/caurosel/slider-image-3.jpg';
import {useState} from 'react';
import {GoPrimitiveDot} from 'react-icons/go';
const Caurosel = ()=>{

    const [imageIndex, setImageIndex] = useState(0)
    const [slideEnterDirection, setSlideEnterDirection] = useState(-300)
    const [slideExitDirection, setSlideExitDirection] = useState(600)

    const cauroselItems = [
        {
            imageUrl: CauroselImage1,
        },
        {
            imageUrl: CauroselImage2,
        },
        {
            imageUrl: CauroselImage3,
        }
    ];

    
    const handleCauroselNavClick=async (i)=>{
        console.log(`nextIndex:${i}, currentImageIndex:${imageIndex}`)
        console.log(`slideEnterDirection:${slideEnterDirection}, slideExitDirection:${slideExitDirection}`)

        if(i>imageIndex){
            await setSlideExitDirection(600)
            await setSlideEnterDirection(-300)
            
            setImageIndex(i)
        }
        else if(i<imageIndex){
            await setSlideExitDirection(-600)
            await setSlideEnterDirection(300)
            setImageIndex(i)
        }
    }

    return(
        <motion.div className='motion-container' transition={{duration:1}} initial={{y:300, opacity: 0 }} animate={{y:0, opacity: 1 }}>
            <div className='caurosel-main'>
                <div className='caurosel-image-slider'>
                    <AnimatePresence>
                        <motion.div
                        key={imageIndex}
                        initial={{ opacity: 0, x: slideEnterDirection }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: slideExitDirection }}
                        transition={{duration:0.6}}
                        className='caurosel-image' style={{backgroundImage:`url(${cauroselItems[imageIndex].imageUrl})`}}>
                        </motion.div>
                    </AnimatePresence>
                </div>
                <div className='caurosel-nav-buttons'>
                    {cauroselItems.map((item, i)=><button onClick={()=>handleCauroselNavClick(i)} key={i}><GoPrimitiveDot /></button>)}
                </div>
            </div>
        </motion.div>
    )
}

export default Caurosel;