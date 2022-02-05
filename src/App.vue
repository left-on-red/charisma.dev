<template>
    <div id="app">
        <navbar />
        <router-view />
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
    name: 'App',
    components: {
        Navbar
    }
}
</script>

<style lang="scss">
@import "assets/variables";

body {
    font-family: 'Poppins', sans-serif;
    background-color: #1D1E28;
    color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    border-top: 3px $accent solid;
    font-size: 16px;
}

.accent {
    color: $accent !important;
}

.btn {
    border-radius: 10px !important;
    font-size: 16px !important;
    font-weight: 600 !important;
    text-transform: uppercase !important;
}

.btn-primary { background-color: $accent !important; }
.btn-secondary {
    background-color: #2C2F33 !important;
    &:hover { color: $accent !important; }
}

.navbar-toggler-icon { color: #fff; }
</style>
