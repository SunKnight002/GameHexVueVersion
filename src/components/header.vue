<template>
    <header>
            <nav class="navbar">
                <router-link to="/index"class="nav-link"><img src="@/assets/img/logo.png" alt="GameHex Logo" class="header_Logo"></router-link>
                <ul class="nav-menu" v-show="isMenuOpen" :class="{ active: isMenuOpen }">
                    <router-link to="/index"class="nav-link"><li class="nav-item"><span>產品銷售</span></li></router-link>
                    <router-link to="/productcheckout"class="nav-link"><li class="nav-item"><span>購物推車</span></li></router-link>
                    <router-link to="/warehouse"class="nav-link"><li class="nav-item"><span>遊戲倉庫</span></li></router-link>
                    <router-link to="/companycoop"class="nav-link"><li class="nav-item"><span>企業合作</span></li></router-link>
                    <router-link to="/myaccount"class="nav-link"><li class="nav-item"><span>我的帳號</span></li></router-link>
                    <router-link to="/loginpage"class="nav-link"><li class="nav-item"><span>登入/註冊</span></li></router-link>
                </ul>
                <div class="hamburger" :class="{ active: isMenuOpen }" @click="showMenuBar">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </nav>
    </header>
</template>

<script>
    export default {
        data() {
            return {isMenuOpen: false}
        },
        methods: {
            showMenuBar() {
                this.isMenuOpen = !this.isMenuOpen;
            },
            handleResize() {
            // 根據螢幕寬度調整 isMenuOpen 狀態
            if (window.innerWidth > 968) {
                this.isMenuOpen = true;
            } else {
                this.isMenuOpen = false;
            }
        }
        },
        mounted() {
            // // 檢查螢幕寬度
            // if (window.innerWidth < 968) {
            //     this.isMenuOpen = false;
            // } else {
            //     this.isMenuOpen = true;
            // }

            // 檢查螢幕寬度並設置初始值
            this.handleResize();
            // 添加 resize 事件監聽器
            window.addEventListener('resize', this.handleResize);
        },
        beforeUnmount() {
            // 移除 resize 事件監聽器
            window.removeEventListener('resize', this.handleResize);
        }
    }
</script>

<style lang="scss" scoped>

@use 'sass:map';
@use '../assets/sass/basic/_var' as var;
@use '../assets/sass/basic/_color' as color;
@use '../assets/sass/mixins/_minins' as minins;
@use '../assets/sass/basic/_animate' as animate;

header {

    width: 100%;
    background-color: #000000;
    margin: 0 auto;
    padding-top: 16px;
    padding-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @include minins.rwd(968px) {

        justify-content: space-around;

        ul {
            display: none;
        }
    }

    @include minins.rwd(600px) {
        padding-top: 8px;
        padding-bottom: 8px;
    }

}

.header_Logo {


}

.nav-link {
    text-decoration: none;
    color: #fff;
    transition: 0.7s ease;
    font-size: 18px;
    font-family: "Noto Sans TC", sans-serif;
    font-weight: 400;

    img{
        width: 100%;
        height: 6vh;
        display: block;
    }

    span {
        display: inline-block;
        font-weight: 500;
        position: relative;

        &::after {
            content: "";
            position: absolute;
            width: 0;
            height: 2px;
            display: block;
            left: 0;
            top: 25px;
            background-color: rgb(168, 212, 255);
            transition: width 0.3s ease;
        }

        &:hover {
            color: map.get(color.$colors , dodgerBlue);

            &::after {
                width: 100%;
                background: rgb(5, 205, 255);
            }
        }
    }
}

.navbar {
    width: 100%;
    min-height: 6vh;
    display: flex;
    justify-content: space-around;
    align-items: center;

}

.nav-menu {
    width: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 40px;

    // 當選單開啟時，left 設置為 0
    &.active {
    left: 0;
    }

    @include minins.rwd(1536px) {
        gap: 28px;
    }

    @include minins.rwd(1100px) {
        gap: 12px;
    }

    @include minins.rwd(968px) {
        position: fixed;
        left: -100%;
        top: 9%;
        gap: 0;
        flex-direction: column;
        background-color: map.get(color.$colors , grayDeep);
        width: 100%;
        text-align: center;
        transition: 0.3s;
        z-index: 5;
    }
}

.hamburger {
    display: none;
    cursor: pointer;

    @include minins.rwd(968px) {
        display: block;

        .hamburger.active .bar:nth-child(2) {
            opacity: 0;
        }

        .hamburger.active .bar:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }

        .hamburger.active .bar:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }
    }

    @include minins.rwd(1000px) {
        margin-left: 160px;
    }

    @include minins.phone {
        margin-left: 100px;
    }
}

.bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: #fff;
}

@include minins.rwd(968px) {

    .hanber > img {
        display: block;
    }

    .nav-item {
        margin: 16px 0;
    }

    .nav-menu.active {
        left: 0;
    }
}

.active-link span {
    color: dodgerblue;
}
</style>