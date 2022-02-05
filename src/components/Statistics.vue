<template>
    <lazy @reveal="reveal()">
        <div class="statistics">
            <div>
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <p class="card-title">{{text.servers}}</p>
                        <p>servers</p>
                    </div>
                </div>
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <p class="card-title">{{text.users}}</p>
                        <p>users</p>
                    </div>
                </div>
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <p class="card-title">{{text.channels}}</p>
                        <p>channels</p>
                    </div>
                </div>
            </div>
            <div class="subtitle" style="color: rgba(255, 255, 255, 0.46);">These are just placeholder numbers</div>
        </div>
    </lazy>
</template>

<script>
import Lazy from './Lazy.vue';

export default {
    name: 'Statistics',

    components: { Lazy },

    data: () => {
        return {
            stats: {
                servers: 1234,
                users: 123456,
                channels: 5678
            },

            text: {
                servers: '0',
                users: '0',
                channels: '0'
            }
        }
    },

    methods: {
        reveal() {
            // src: http://gizma.com/easing/
            function easeInOutCubic(t, b, c, d) {
                t /= d/2;
                if (t < 1) return c/2*t*t*t + b;
                t -= 2;
                return c/2*(t*t*t + 2) + b;
            }

            let arr = ['servers', 'users', 'channels'];

            let duration = 40;
            let counter = 0;

            let interval = setInterval(() => {
                for (let a = 0; a < arr.length; a++) {
                    this.text[arr[a]] = `${Math.round(easeInOutCubic(counter, 0, this.stats[arr[a]], duration))}`;
                }

                counter += 1;
                if (counter > duration) { clearInterval(interval); return; }
            }, 25);
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/variables";

.statistics {
    text-align: center;
    padding-top: 100px;
    margin-top: -1px;
    background-color: #1D1E28;

    div {
        .card {
            background: transparent;
            box-shadow: none;
            color: #f7f7f7;

            .card-body {
                font-size: 20px;
                font-weight: bold !important;
        
                .card-title {
                    font-size: 50px;
                    letter-spacing: -0.06em;
                    color: $accent;
                }
            }
        }
    }
}
</style>
