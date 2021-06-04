export class Component {
    el;
    state = {};
    props = {};

    constructor(el, props = {}) {
        this.el = el;
        this.props = props;

        this.init();
    }

    init() {
        this.state = this.stateInit();
        this.eventInit();
        this.render();
    }

    render() {
        this.setup();
        if (this.el) this.el.innerHTML = this.template();
        this.onMounted();
    }

    setState(newState) {
        this.state = {
            ...this.state,
            ...newState
        };

        this.render();
    }

    template() { return ''; }

    eventInit() {}

    stateInit() { return {}; }

    setup() {}

    onMounted() {}
}
