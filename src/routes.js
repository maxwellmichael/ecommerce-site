import {Switch, Route} from 'react-router-dom';
import Home from './components/pages/home';
import About from './components/pages/about';
import MensClothingPage from './components/pages/products/clothing/mensClothing';
import WomensClothingPage from './components/pages/products/clothing/womensClothing'
import RouteWithSubRoutes from './components/utils/routesWithSubRoutes';



const Routes = ()=>{

    const ClothingRoutes = [
        {
            path:'/clothing/men',
            component: MensClothingPage, 
        },
        {
            path:'/clothing/women',
            component: WomensClothingPage,
        },
    ];

    const mainRoutes = [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/about',
            component: About,
        },
    ]

    return(
        <Switch>
            {mainRoutes.map((route, i)=><Route key={i} path={route.path} exact component={route.component} />)}
            {ClothingRoutes.map((route, i)=><RouteWithSubRoutes key={i} {...route} />)}
        </Switch>
    )
}

export default Routes;