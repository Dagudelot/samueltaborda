/* Client Views */
import Home             from './views/client_pages/Home';
import Blog         from './views/client_pages/Blog';
import Post           from './views/client_pages/Post';
import About             from './views/client_pages/About';
import Contact             from './views/client_pages/Contact';
import Test             from './views/client_pages/Test'; 

/* Admin Views */
import Dashboard             from './views/admin_pages/Dashboard';
import TestPanel             from './views/admin_pages/TestPanel';

/* Vue Routes */
const routes = {
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog
        },
        {
            path: '/blog/:post_slug',
            name: 'post',
            component: Post
        },
        {
            path: '/acercademi',
            name: 'about',
            component: About
        },
        {
            path: '/contacto',
            name: 'contact',
            component: Contact
        },
        {
            path: '/admin',
            name: 'admin',
            component: Dashboard
        },
        {
            path: '/tests',
            name: 'tests',
            component: TestPanel
        },
        {
            path: '/test/:test_slug',
            name: 'test',
            component: Test
        },
        {
            path: '*',          // Not Found
            name: 'not_found',
            component: Home
        }
    ],
};
/* Vue Routes */

export default routes;
