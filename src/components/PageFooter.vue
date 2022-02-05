<template>
    <div class="footer-container">
        <div class="footer-bg"></div>
        <div class="footer-text">
            <!--<img src="assets/BotLogoWord.svg" width="150">-->
            <p class="credit">maintained by <a href="https://github.com/shadeRed/">red;</a></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageFooter'
}
</script>

<style lang="scss" scoped>
@import "../assets/variables";

div.footer-container {
    width: 100%;
    text-align: center;
    color: #ecf2ff;

    .footer-bg {
        padding-top: 20%;
        background-image: url("../assets/svg/wavy-light.svg");
        background-position: bottom;
        background-size: 200%;
        background-repeat: no-repeat;
    }

    .footer-text {
        background-color: #282933;
        height: 100px;
        margin-top: -5px;
        padding-bottom: 15px;

        img { display: inline-block; }
    
        p.credit {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            letter-spacing: 0.15em;
            font-variant: small-caps;
    
            a {
                color: $accent;
                text-decoration: none;
            }
        }
    }
}
</style>
