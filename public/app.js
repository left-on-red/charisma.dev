let router = new VueRouter({
    routes: [
        { path: '/', component: HomeView }
    ]
});

let app = new Vue({
    router,
    el: '#app'
});