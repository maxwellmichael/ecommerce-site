import {Switch, Route} from 'react-router-dom';
import LandingPage from '../components/pages/landingPage'
import About from '../components/pages/about';
import LogIn from '../components/pages/user/login';
import Profile from '../components/pages/user/profile';
import Register from '../components/pages/user/register';
import ClothingPage from '../components/pages/products';
import RouteWithSubRoutes from './routesWithSubRoutes';


const Routes = ()=>{

    const ClothingRoutes = [
        {
            path:'/clothing/men',
            component: ClothingPage,
            props:{
                filter:{
                    gender:'male',
                }
            }
        },
        {
            path:'/clothing/women',
            component: ClothingPage,
            props:{
                filter:{
                    gender:'female',
                }
            }
        },
    ];

    const userRoutes = [
        {
            path: '/user/login',
            component: LogIn,
        },
        {
            path: '/user/register',
            component: Register,
        },
        {
            path: '/user/profile',
            component: Profile,
        }
    ]

    const mainRoutes = [
        {
            path: '/',
            component: LandingPage,
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
            {userRoutes.map((route, i)=><RouteWithSubRoutes key={i} {...route} />)}
        </Switch>
    )
}

export default Routes;