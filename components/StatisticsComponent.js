(() => {
    Vue.component('statistics', {
        template: `
            <div class="statistics" ref="statistics_element" :style="hidden ? 'opacity: 0;' : 'opacity: 1;'">
                <div>
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <p class="card-title">{{text.servers}}</h1>
                            <p>servers</p>
                        </div>
                    </div>
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <p class="card-title">{{text.users}}</h1>
                            <p>users</p>
                        </div>
                    </div>
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <p class="card-title">{{text.channels}}</h1>
                            <p>channels</p>
                        </div>
                    </div>
                </div>
                <div class="subtitle" style="color: rgba(255, 255, 255, 0.46);">These are just placeholder numbers</div>
            </div>
        `,

        data: () => {
            return {
                hidden: true,
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

        mounted() {
            let options = {
                threshold: 1.0
            }

            let target = this.$refs.statistics_element;

            let observer = new IntersectionObserver((entries, observer) => {
                if (entries[0].isIntersecting) {
                    if (this.hidden) {
                        this.hidden = false;

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
            }, options);

            setInterval(() => observer.observe(target), 100);
        }
    });
})();