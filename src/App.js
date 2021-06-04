import { Component } from './_core';
import router from './router';

export class App extends Component {
    setup() {
        console.log('setup')
    }

    template() {
        return `
            <header class="header">

            </header>
            <main id="content"></main>
            <footer class="footer"></footer>
        `;
    }

    onMounted() {
        console.log('onMounted')

        router.init();
    }
}