import About from '../Components/Dashboard/About';
import ClientLogos from '../Components/Dashboard/ClientLogos';
import ClientReview from '../Components/Dashboard/ClientReview';
import OrdersInfo from '../Components/Dashboard/OrdersInfo';
import Dashboard from '../Components/Dashboard/Dashboard';
import Projects from '../Components/Dashboard/Projects';
import Services from '../Components/Dashboard/Services';
import UserEmail from '../Components/Dashboard/UserEmail';
import Login from '../Components/Login/Login';
import HomePage from '../Pages/HomePage';
import PageNotFound from '../Pages/PageNotFound';

const routes = [
    {
        path: '/home',
        component: HomePage,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/dashboard',
        component: Dashboard,
        // added nested routes
        routes: [
            {
                path: '/dashboard/services',
                component: Services,
            },
            {
                path: '/dashboard/about',
                component: About,
            },
            {
                path: '/dashboard/ordersInfo',
                component: OrdersInfo,
            },
            {
                path: '/dashboard/projects',
                component: Projects,
            },
            {
                path: '/dashboard/client_review',
                component: ClientReview,
            },
            {
                path: '/dashboard/users_email',
                component: UserEmail
            },
            {
                path: '/dashboard/clients_logo',
                component: ClientLogos
            },
            {
                path: '*',
                component: PageNotFound,
            },
        ],
    },
    {
        path: '*',
        component: PageNotFound,
    },
];

export default routes;
