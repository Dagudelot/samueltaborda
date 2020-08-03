/* Admin Views */
import Dashboard             from './views/Dashboard';
import TestPanel             from './views/TestPanel';

/* Vue Routes */
const routes = {
    mode: 'history',
    routes: [
        {
            path: '/admin',
            name: 'admin',
            component: Dashboard
        },
        {
            path: '/tests',
            name: 'tests',
            component: TestPanel
        }
    ],
};
/* Vue Routes */

export default routes;
