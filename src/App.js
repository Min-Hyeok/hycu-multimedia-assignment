import { Component } from './_core';
import router from './router';

export class App extends Component {
    setup() {
        
    }

    template() {
        return `
            <header class="header">
                <ul class="header__list">
                    <li class="header__list-item"><a href="#/">과제설명</a></li>
                    <li class="header__list-item"><a href="#/hiphop">힙합</a></li>
                    <li class="header__list-item"><a href="#/ballad">발라드</a></li>
                    <li class="header__list-item"><a href="#/kpop">k-pop</a></li>
                </ul>
                <audio controls class="header__audio">
                    <source src="https://www.sellbuymusic.com/upload/music/0000000369/918889031769702.mp3" type="audio/mp3">
                </audio>
            </header>
            <main id="content"></main>
            <footer class="footer">Copyright&copy; 2021 김민혁</footer>
        `;
    }

    onMounted() {
        router.init();
    }
}