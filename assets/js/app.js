// JavaScript source code
const router = new VueRouter({
    routes: [{ path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/education', component: Education }]
})
const app = new Vue({ el: '#page-wrapper', router })
