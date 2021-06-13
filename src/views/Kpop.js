import { Component } from '../_core';

export class Kpop extends Component {
    template() {
        return `
            <div class="content">
                <div class="content__desc">
                    K-pop은 대한민국에서 대중적 인기를 얻는 유행 음악을 말합니다.<br><br>
                    가요라고 불리기도 하며, 영미권의 대중음악을 팝이라고 부르고, 영미권 이외의 국가의 대중가요도 국가 이니셜을 붙여 나타내는 데서 K-POP이라고 쓰고 있습니다.<br>
                    특히 대한민국 대중가요가 해외에서 인기를 얻게 된 이후에 K-pop이라는 명칭이 대한민국 이외 국가에서 대한민국 대중가요를 가리키는 이름으로 널리 사용된다.
                </div>
                <div class="content__logo">
                    <img src="https://ichef.bbci.co.uk/news/640/cpsprodpb/E475/production/_99458485_bts-2017-ama-backstage-portrait-billboard-1548.jpg">
                </div>
                <div class="content__desc">
                    현재 제일 유명한 K-pop 가수인 BTS분들의 노래입니다.
                </div>
                <div class="content__video">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/WMweEpGlu_U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        `;
    }
}