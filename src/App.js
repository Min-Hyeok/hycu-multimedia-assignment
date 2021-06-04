import { Component } from './_core';
import router from './router';

export class App extends Component {
    setup() {

    }

    template() {
        return `
            <header class="header">
                <ul class="header__list">
                    <li class="header__list-item">홈</li>
                    <li class="header__list-item">서브메뉴1</li>
                    <li class="header__list-item">서브메뉴2</li>
                    <li class="header__list-item">서브메뉴3</li>
                </ul>
            </header>
            <main id="content"></main>
            <footer class="footer"></footer>
        `;
    }

    onMounted() {
        

        router.init();
    }
}