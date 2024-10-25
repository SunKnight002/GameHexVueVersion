<template>
    <Header />
    <main class="main-frontpage">
        <section class="wrapper-frontpage">
            <!-- Logo圖片 -->
            <img
                src="@/assets/img/logo.png"
                alt=""
                class="frontpage-logo"
                ref="frontpageLogo">
                <!-- 內容部分 -->
                <section class="content-frontpage">

                    <!-- 前端按鈕 -->
                    <router-link to="/index/">
                        <section class="frontpage-btnL" ref="frontpageBtnL">
                            <img src="@/assets/img/BTN-yellow.png" alt="" class="glow-effect-L">
                                <a href="">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    進入前台
                                </a>
                            </section>
                        </router-link>

                        <!-- 右側按鈕 -->
                        <router-link to="/BackstageLogin/">
                            <section class="frontpage-btnR" ref="frontpageBtnR">
                                <img src="@/assets/img/BTN-blue.png" alt="" class="glow-effect-R">
                                    <a href="">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        進入後台
                                    </a>
                                </section>
                            </router-link>
                        </section>
                        <p class="Tibame-declare" ref="TibameDeclare">本網站為緯育TibaMe【第93期】前端工程師專業技術養成班學員作品,僅供學習、展示之用途。<br>若有抵觸有關著作權，或有第三人主張侵害智慧財產權等情事，均由學員負法律上責任，緯育公司概不負責。<br>若有侵權疑慮，您可以私訊［緯育TibaMe］，後續會由專人協助處理
                                </p>

        </section>
    </main>
    <Footer />
</template>

<script>
import '../assets/css/style.css';
import Header from '../components/header.vue'; // 引入header組件
import Footer from '../components/footer.vue';// 引入footer

    export default {
        components: {
            Header,
            Footer
        }
    }

</script>

<style lang="scss" scoped>

@use 'sass:map';
@use '../assets/sass/basic/_var' as var;
@use '../assets/sass/basic/_color' as color;
@use '../assets/sass/mixins/_minins' as minins;
@use '../assets/sass/basic/_animate' as animate;

    .main-frontpage {
        width: 100%;
        height: 100vh;
        background-image: url("/src/assets/img/BG-fontpage.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        background-attachment: fixed;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .wrapper-frontpage {
        width: 80%;
        margin: 0 auto;
        // minins.padding: 20px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        @include minins.pad {
            width: 90%;
            padding: 40px 0;
        }
    }

    .frontpage-logo {
        width: 20%;
        margin-bottom: 20px;
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 1s ease-in-out, transform 1s ease-in-out;

        @include minins.rwd(1440px) {
            width: 25%;
        }

        @include minins.rwd(900px) {
            width: 30%;
        }

        @include minins.pad {
            width: 35%;
        }
    }

    .frontpage-logo.show {
        opacity: 1;
        transform: translateY(0px);
    }

    .content-frontpage {
        width: 100%;
        display: flex;
        gap: 360px;
        align-items: center;
        justify-content: center;

        @include minins.rwd(1200px) {
            gap: 200px;
        }

        @include minins.rwd(854px) {
            gap: 200px;
        }

        @include minins.pad {
            gap: 120px;
        }

        @include minins.rwd(600px) {
            gap: 80px;
        }

        @include minins.phone {
            gap: 20px;
        }

        @include minins.rwd(350px) {
            gap: 12px;
        }
    }

    // 左側按鈕
    .frontpage-btnL {
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 1s ease-in-out, transform 1s ease-in-out;

        img {
            width: 100%;
            margin-bottom: 20px;

            @include minins.pad {
                width: 80%;
            }

            @include minins.phone {
                width: 50%;
            }

        }

        a {
            position: relative;
            display: inline-block;
            padding: 20px 10px;
            // color: #2196f3;
            color: map.get(color.$colors, gold);
            text-transform: uppercase;
            letter-spacing: 4px;
            font-size: 28px;
            transition: 0.2s;
            overflow: hidden;
            text-decoration: none;
            font-weight: bold;

            &:hover {
                color: map.get(color.$colors, underyellow);
                background: map.get(color.$colors, white);
                box-shadow: 0 0 10px #e0d4ac, 0 0 40px #e0d4ac, 0 0 80px #e0d4ac;
                transition-delay: 1s;
            }

            span {
                position: absolute;
                display: block;
            }

            span:nth-child(1) {
                top: 0;
                left: -100%;
                width: 100%;
                height: 2px;
                background: linear-gradient(90deg, transparent, #ffd06c);
                /* 修正這裡的顏色 */
            }

            &:hover span:nth-child(1) {
                left: 100%;
                transition: 0.5s;
            }

            span:nth-child(3) {
                bottom: 0;
                right: -100%;
                width: 100%;
                height: 2px;
                background: linear-gradient(270deg, transparent, #ffd06c);
            }

            &:hover span:nth-child(3) {
                right: 100%;
                transition: 0.5s;
                transition-delay: 0.5s;
            }

            span:nth-child(2) {
                top: -100%;
                right: 0;
                width: 2px;
                height: 100%;
                background: linear-gradient(180deg, transparent, #ffd06c);
            }

            &:hover span:nth-child(2) {
                top: 100%;
                transition: 0.5s;
                transition-delay: 0.25s;
            }

            span:nth-child(4) {
                bottom: -100%;
                right: 0;
                width: 2px;
                height: 100%;
                background: linear-gradient(360deg, transparent, #ffd06c);
            }

            &:hover span:nth-child(4) {
                bottom: 100%;
                transition: 0.5s;
                transition-delay: 0.75s;
            }
        }
    }

    .frontpage-btnL.show {
        opacity: 1;
        transform: translateY(0);
    }

    // 左側按鈕DIV特效
    .glow-effect-L {
        animation: glow02 2s infinite alternate;
        animation-delay: 1s;
        filter: contrast(150%);
        /* 增加對比度 */
    }

    @keyframes glow02 {
        0% {
            box-shadow: 0 0 40px rgba(227, 206, 87, 0.8);
        }

        100% {
            box-shadow: 0 0 60px rgb(255, 253, 184, 1);
        }
    }

    // 右側按鈕
    .frontpage-btnR {
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 1s ease-in-out, transform 1s ease-in-out;

        img {
            width: 100%;
            margin-bottom: 20px;

            @include minins.pad {
                width: 80%;
            }

            @include minins.phone {
                width: 50%;
            }
        }

        a {
            position: relative;
            display: inline-block;
            padding: 20px 10px;
            color: map.get(color.$colors, fbblue);
            text-transform: uppercase;
            letter-spacing: 4px;
            font-size: 28px;
            transition: 0.2s;
            overflow: hidden;
            text-decoration: none;
            font-weight: bold;

            &:hover {
                color: #085b63;
                background: #85c8ff;
                box-shadow: 0 0 10px #1765a4, 0 0 40px #1765a4, 0 0 80px #1765a4;
                transition-delay: 1s;
            }

            span {
                position: absolute;
                display: block;
            }

            span:nth-child(1) {
                top: 0;
                left: -100%;
                width: 100%;
                height: 2px;
                background: linear-gradient(90deg, transparent, #21f0f3);
            }

            &:hover span:nth-child(1) {
                left: 100%;
                transition: 0.5s;
            }

            span:nth-child(3) {
                bottom: 0;
                right: -100%;
                width: 100%;
                height: 2px;
                background: linear-gradient(270deg, transparent, #21f0f3);
            }

            &:hover span:nth-child(3) {
                right: 100%;
                transition: 0.5s;
                transition-delay: 0.5s;
            }

            span:nth-child(2) {
                top: -100%;
                right: 0;
                width: 2px;
                height: 100%;
                background: linear-gradient(180deg, transparent, #21f0f3);
            }

            &:hover span:nth-child(2) {
                top: 100%;
                transition: 0.5s;
                transition-delay: 0.25s;
            }

            span:nth-child(4) {
                bottom: -100%;
                right: 0;
                width: 2px;
                height: 100%;
                background: linear-gradient(360deg, transparent, #21f0f3);
            }

            &:hover span:nth-child(4) {
                bottom: 100%;
                transition: 0.5s;
                transition-delay: 0.75s;
            }
        }
    }

    .frontpage-btnR.show {
        opacity: 1;
        transform: translateY(0);
    }

    // 右側按鈕DIV特效
    .glow-effect-R {
        animation: glow01 2s infinite alternate;
        animation-delay: 1s;
        filter: contrast(150%);
        /* 增加對比度 */
    }

    @keyframes glow01 {
        0% {
            box-shadow: 0 0 40px rgba(132, 182, 233, 0.8);
        }

        100% {
            box-shadow: 0 0 60px rgb(253, 253, 253, 1);
        }
    }

    // 內文
    .frontpage-text {
        width: 80%;
        color: #fff;
        text-align: center;
        display: grid;
        gap: 12px;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, auto);
        justify-content: center;
        align-items: center;

        .frontpage-topic {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            @include minins.pad {
                display: none;
            }

            h1 {
                font-size: 24px;
                font-weight: bold;
                line-height: 1.5;
            }

            p {
                font-size: 16px;
                font-weight: 500;
                line-height: 1.5;
            }
        }

        .frontpage-slogran {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin-top: 20px;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 1s ease-in-out, transform 1s ease-in-out;

            @include minins.rwd(900px) {
                flex-direction: column;
                gap: 40px;
                margin-top: 40px;
            }

            span {
                font-size: 40px;
                font-weight: bold;
                margin-right: 20px;

                @include minins.pad {
                    margin-right: 0;
                }
            }

            .frontpage-slogranred {
                font-size: 60px;
                font-weight: bold;
                color: red;

            }
        }

        .frontpage-slogran.show {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .Tibame-declare {
        font-size: 12px;
        line-height: 1.3;
        width: 90%;
        margin-bottom: 0;
        margin-top: 20px;
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 1s ease-in-out, transform 1s ease-in-out;
        text-align: center;

        @include minins.pad {
            width: 96%;
            font-size: 8px;
        }

    }

    .Tibame-declare.show {
        opacity: 0.7;
        transform: translateY(0);
    }

</style>