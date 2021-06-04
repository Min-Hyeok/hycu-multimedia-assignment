import { Router } from '../_core';
import { Home } from '../views';

const router = {
    init () {
        const router = new Router({
            el: document.querySelector('#content'),
            routes: {
                '/': Home
            }
        });

        router.beforeEach = () => {
            // console.log('beforeEach')
        }

        router.afterEach = () => {
            // console.log('afterEach')
        }

        router.init();
    }
}

export default router;