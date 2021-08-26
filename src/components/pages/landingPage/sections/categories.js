import {Grid} from '@material-ui/core'
import KurthaImage from '../images/categories/kurthas.webp'; 
import FusionImage from '../images/categories/fusion.webp';
import SareeImage from '../images/categories/sarees.webp'; 
import OtherImage from '../images/categories/others.webp'; 
import RegalImage from '../images/categories/regal-mustard.webp'; 
import TopImage from '../images/categories/tops.webp'; 


const categorieSet = [
    {
        name: 'Kurthas',
        image: KurthaImage
    },
    {
        name: 'Fusion',
        image: FusionImage
    },
    {
        name: 'Sarees',
        image: SareeImage
    },
    {
        name: 'Regal',
        image: RegalImage
    },
    {
        name: 'Top',
        image: TopImage
    },
    {
        name: 'Others',
        image: OtherImage
    },
];



const Categories = ()=>{

    return(
        <div className='landing-page-categories'>
            <div className='landing-page-categories-title'>
                <h4>Categories</h4>
            </div>

            <Grid container spacing={1}>
                <Grid container item xs={4} md={12} spacing={3}>
                    {categorieSet.map((item, i)=>(
                        <Grid item xs={3}>
                        <div style={{backgroundImage:`url(${item.image})`}} className='landing-page-categories-item'>
                            <div className='half-overlay'></div>
                            <div className='title'>{item.name}</div>
                        </div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </div>
    )
}

export default Categories;