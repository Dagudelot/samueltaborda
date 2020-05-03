/* Views */
import Home             from './views/client_pages/Home';
import Blog         from './views/client_pages/Blog';
import Post           from './views/client_pages/Post';
import About             from './views/client_pages/About';
import Contact             from './views/client_pages/Contact';

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
            path: '/blog/:post_id',
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
            path: '*',          // Not Found
            name: 'not_found',
            component: Home
        }
    ],
};
/* Vue Routes */

export default routes;