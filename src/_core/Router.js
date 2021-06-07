import { Home } from '../views';

export class Router {
    el;
    routes = {};
    linkActiveClass;

    constructor({ el, routes = {}, linkActiveClass }) {
        this.el = el;
        this.routes = routes;
        this.linkActiveClass = linkActiveClass;
    }

    init() {
        window.addEventListener('popstate', () => this.routing());

        this.routing();
    }

    routing() {
        this.beforeEach();

        let selectedPath = location.hash.replace('#', '');
        let selectedRoute = Home;

        if (!selectedPath.length) selectedPath = '/';

        for (const path of Object.keys(this.routes)) {
            if (selectedPath.includes(path)) {
                selectedRoute = this.routes[path];

                break;
            }
        }

        if (selectedRoute) new selectedRoute(this.el);

        this.afterEach();
        this.activeLink();
    }

    activeLink() {
        const $activeLink = document.querySelectorAll(`.${this.linkActiveClass}`);
        $activeLink.forEach((item) => item.classList.remove(this.linkActiveClass));

        const $active = document.querySelector(`a[href="/${location.hash}"]`);
        $active && $active.classList.add(this.linkActiveClass);
    }

    beforeEach() {}
    afterEach() {}
}