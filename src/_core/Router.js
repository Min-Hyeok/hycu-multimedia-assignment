import { Home } from '../views';

export class Router {
    el;
    routes = {};

    constructor({ el, routes = {} }) {
        this.el = el;
        this.routes = routes;
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
    }

    beforeEach() {}
    afterEach() {}
}