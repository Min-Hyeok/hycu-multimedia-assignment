import { Component } from '../_core';

export class Home extends Component {
    template() {
        return `
            <div class="content">
                <div class="content__desc">
                    안녕하세요 H201946007 김민혁 입니다!<br>
                    제가 음악을 굉장히 좋아해서 음악 장르 관련된 주제로 홈페이지를 만들어 보았습니다.<br><br>
                    webpack을 이용해 프로젝트를 빌드하였으며, scss를 활용하여 스타일 작업을 하였습니다.<br>
                    es6 이상의 문법을 사용하기 위해 babel설정을 하였고 프로젝트 전반적으로 class, import 등 es6 이상의 문법들을 활용했습니다.<br>
                    프로젝트 구조는 spa 프레임워크(Vue, React 등)를 보고 영감을 얻었고 두 프레임워크를 조금씩 참고하여 직접 구현하였으며, 새로고침 없이 페이지 이동이 가능하도록 만들어보았습니다.<br><br>
                </div>
                <div class="content__logo">
                    <img src="https://joshua1988.github.io/webpack-guide/logo.png">
                    <img src="https://miro.medium.com/max/6552/1*XmHUL5DeySv_dGmvbPqdDQ.png">
                    <img src="https://media.vlpt.us/images/leo-xee/post/ac25a592-7b47-4584-9db6-2bc449c93290/sass.png">
                </div>
                <div class="content__desc content__desc--s-margin">
                    페이지별 html들을 views 폴더 안에 template 함수에서 리턴해주는 방식이며, 페이지 url에 맞게 router에서 js를 import 해서<br>
                </div>
                <pre class="content__code">
// router/index.js

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
                </pre>
                <div class="content__desc content__desc--s-margin">div#content에 렌더링 해주고 있습니다.</div>
                <pre class="content__code">
// _core/Router.js

let selectedPath = location.hash.replace('#', '');
let selectedRoute = Home;

if (!selectedPath.length) selectedPath = '/';

for (const path of Object.keys(this.routes)) {
    if (selectedPath.includes(path)) {
        selectedRoute = this.routes[selectedPath];

        break;
    }
}

if (selectedRoute) new selectedRoute(this.el);
                </pre>
            </div>
        `;
    }
}