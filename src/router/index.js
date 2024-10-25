// 從'vue-router'模組中導入createRouter和createWebHistory函數
import {createRouter, createWebHistory} from 'vue-router'

// 組件匯入區域： 使用懶加載導入組件，請將新的組件放置在此處。

const routes = [
    {
        path: '/',
        name: 'frontpage',
        meta: {
            title: '前後台分流頁'
        },
        component: () => import ('../views/GH_FrontPage.vue')
    }, {
        path: '/index',
        name: 'index',
        meta: {
            title: '首頁'
        },
        component: () => import ('../views/GH_Home.vue')
    }, {
        path: '/landingpage',
        name: 'landingpage',
        meta: {
            title: '新品曝光'
        },
        component: () => import ('../views/GH_LandingPage.vue')
    }, {
        path: '/innnerpage',
        name: 'innerpage',
        meta: {
            title: '作品內頁'
        },
        component: () => import ('../views/GH_ShopWorkInnerPage.vue')
    }, {
        path: '/productcheckout',
        name: 'productcheckout',
        meta: {
            title: '購物車確認'
        },
        component: () => import ('../views/GH_ProductCheckout.vue')
    }, {
        path: '/productpayinfo',
        name: 'productpayinfo',
        meta: {
            title: '付款確認'
        },
        component: () => import ('../views/GH_ProductPayInfo.vue')
    }, {
        path: '/productpayfinsh',
        name: 'productpayfinsh',
        meta: {
            title: '付款完成'
        },
        component: () => import ('../views/GH_ProductPayFinsh.vue')
    }, {
        path: '/warehouse',
        name: 'warehouse',
        meta: {
            title: '遊戲倉庫'
        },
        component: () => import ('../views/GH_WareHouse.vue')
    }, {
        path: '/myaccount',
        name: 'myaccount',
        meta: {
            title: '我的帳號'
        },
        component: () => import ('../views/GH_MyAccount.vue')
    }, {
        path: '/companycoop',
        name: 'companycoop',
        meta: {
            title: '企業合作'
        },
        component: () => import ('../views/GH_CompanyCoop.vue')
    }, {
        path: '/loginpage',
        name: 'loginpage',
        meta: {
            title: '帳號登入'
        },
        component: () => import ('../views/GH_LoginPage.vue')
    }, {
        path: '/register',
        name: 'register',
        meta: {
            title: '帳號註冊'
        },
        component: () => import ('../views/GH_Register.vue')
    }, {
        path: '/registerverify',
        name: 'registerverify',
        meta: {
            title: '註冊確認'
        },
        component: () => import ('../views/GH_RegisterVerify.vue')
    }, {
        path: '/registerfinish',
        name: 'registerfinish',
        meta: {
            title: '註冊完成'
        },
        component: () => import ('../views/GH_RegisterFinish.vue')
    }
]

export default function () {
    return createRouter({
        history: createWebHistory(),
        routes,
        scrollBehavior(to, from, savedPosition) {
            return {top: 0};
        }
    });

}