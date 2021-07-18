import {Switch, Route} from 'react-router-dom';
import Home from './components/pages/home';
import About from './components/pages/about';
import Products from './components/pages/products';



const Routes = ()=>{

    const mainRoutes = [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/about',
            component: About,
        },
        {
            path: '/products',
            component: Products,
        }
    ]

    return(
        <Switch>
            {mainRoutes.map((route, i)=>
            <Route key={i} path={route.path} exact component={route.component} />)}
        </Switch>
    )
}

export default Routes;