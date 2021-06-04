import { Router } from '../_core';
import { Home } from '../views';

const router = {
    init () {
        new Router({
            el: document.querySelector('#content'),
            routes: {
                '/': Home
            }
        });
    }
}

export default router;