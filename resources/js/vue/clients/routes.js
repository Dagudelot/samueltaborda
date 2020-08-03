/* Client Views */
import Home             from './views/Home';
import Blog         from './views/Blog';
import Post           from './views/Post';
import About             from './views/About';
import Contact             from './views/Contact';
import Test             from './views/Test'; 

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
