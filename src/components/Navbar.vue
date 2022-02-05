<template>
    <nav class="navbar navbar-expand-lg bg-transparent">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <img src="assets/menuIcon.svg" width="20px" height="20px" style="max-width: none !important;">
        </button>
        <!--<img src="assets/BotLogo.svg" width="50" height="50">-->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                </li>
                <div class="nav-item">
                    <a class="nav-link" href="#">Documentation</a>
                </div>
                <div class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </div>
            </ul>
            <!-- <button class="btn login-btn btn-outline-accent my-2 my-sm-0" style="font-size: 10px !important;font-family: poppins !important;">LOGIN</button> -->
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style lang="scss" scoped>
@import "../assets/variables";

.navbar {

    box-shadow: none !important;

    .navbar-collapse {

        .login-btn {
            border: 2px solid $accent;
            font-size: 10px;

            &:hover { background: $accent; }
        }

        .navbar-nav {

            .nav-item {

                .nav-link {
                    font-size: 14px !important;
                    background: transparent !important;
                    font-family: Lato, sans-serif;
                    text-transform: capitalize;

                    &:hover {
                        background: transparent;
                        color: $accent !important;
                    }

                }

            }

        }

    }

}
</style>
