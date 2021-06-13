import { Router } from '../_core';
import { Home, Hiphop, Ballad, Kpop } from '../views';

const router = {
    init() {
        const router = new Router({
            el: document.querySelector('#content'),
            routes: {
                '/': Home,
                '/hiphop': Hiphop,
                '/ballad': Ballad,
                '/kpop': Kpop,
            },
            linkActiveClass: 'link-active'
        });

        router.beforeEach = () => {

        }

        router.afterEach = () => {
            setTimeout(() => {
                document.querySelector('.content').classList.add('content--active');
            }, 0);
        }

        router.init();
    }
}

export default router;