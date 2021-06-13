import { Component } from '../_core';

export class Ballad extends Component {
    template() {
        return `
            <div class="content">
                <div class="content__desc">
                    발라드는 대중 음악의 한 부류로, 남녀간의 사랑을 주제로 한 감상적인 노래를 지칭하며, 느린 박자와 낭만적이고 감성적인 가사를 지닌 노래와 때로는 약간 빠르면서도 반복적이고 서술적인 노래를 포함하고 있습니다<br><br>
                    랩과 반대로 대체적으로 조용한 음악이며, 발라드라는 이름은 이야기 형태의 시나 악곡을 지칭하던 발라드에서 유래하였습니다.
                </div>
                <div class="content__logo">
                    <img src="https://image.bugsm.co.kr/essential/images/250/141/14132.jpg?_up=20180419-055548">
                </div>
                <div class="content__desc">
                    제가 즐겨듣는 발라드 가수분이 규현님이라 자주듣는 규현님의 노래를 준비해보았습니다.
                </div>
                <div class="content__video">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/vIPug7A8Fds" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        `;
    }
}