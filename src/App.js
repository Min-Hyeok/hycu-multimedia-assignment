import { Component } from './_core';
import router from './router';

export class App extends Component {
    setup() {

    }

    template() {
        return `
            <header class="header">
                <ul class="header__list">
                    <li class="header__list-item"><a href="/#/">Home</a></li>
                    <li class="header__list-item"><a href="/#/sub1">Sub1</a></li>
                    <li class="header__list-item"><a href="/#/sub2">Sub2</a></li>
                    <li class="header__list-item"><a href="/#/sub3">Sub3</a></li>
                </ul>
            </header>
            <main id="content"></main>
            <footer class="footer">Copyright 2021 김민혁</footer>
        `;
    }

    onMounted() {
        router.init();
    }
}