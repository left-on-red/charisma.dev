let router = new VueRouter({
    routes: [
        { path: '/', component: HomeView }
    ]
});

let app = new Vue({
    router,
    el: '#app',
    vuetify: new Vuetify({
        theme: {
            themes: {
                light: {
                    primary: '#8E6BFF'
                }
            }
        }
    })
})