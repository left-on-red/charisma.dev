let HomeView = Vue.component('home-view', {
    template: `
        <div>
            <div class="heading">
                <h1 class="display-5 title"><span class="accent">{{keyword}}</span> your Discord server with <span class="accent">Charisma</span></h1>
                
                <div class="container">
                    <div class="row">
                        <div class="col"></div>
                        <div class="col-10">
                            <p class="subtitle">Charisma is a multi-purpose Discord bot that's designed to do literally everything. Features moderation/administration commands, a fully featured economy system, auto-management commands and so much more!</p>
                
                            <!--<a class="btn btn-primary btn-lg" href="#start_link" target="_blank" role="button">Get started</a>
                            <a class="btn btn-secondary btn-lg" href="#server_link" target="_blank" role="button">Add to server</a>-->
                            
                            <a class="btn btn-secondary btn-lg" href="#" target="_blank" role="button">Join the Official Discord Server</a>
                        </div>
                        <div class="col"></div>
                    </div>
                </div>
            </div>
            
            <div class="features">
                <div class="container">
                    <div class="title">Closed Beta</div>
                    <div class="subtitle">Charisma is currently in a closed beta as development towards a 1.0 release draws near. There are however several ways that you could assist with the development of Charisma and maybe even test her yourself.</div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title"><a href="https://discord.com/invite/gfSmJd3JjE" target="blank_">Join the Discord</a></h5>
                            <p class="card-text">This is where all of her development takes place. And this is often where you can gather sneak peaks into upcoming features and developments. And more often than not, you may get a hands on experience with her yourself!</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title"><a href="https://github.com/shadeRed/charisma/" target="_blank">Check out her GitHub</a></h5>
                            <p class="card-text">Charisma's GitHub repository (usually) contains her most up-to-date codebase along with an issue tracker. Charisma was/is developed almost <b>entirely</b> by <a href="https://github.com/shadeRed/" target="_blank">red;</a> so any support by way of issues or even GitHub stars is greatly appreciated.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title"><a href="https://www.patreon.com/charismabot" target="_blank">Support her on Patreon</a></h5>
                            <p class="card-text">Patreon is where you can financially support Charisma. Her Patreon page will have a lot more specific information, but most Patreon tiers earn you certain exclusive perks inside her Discord server along with potential rewards within Charisma herself once 1.0 releases.</p>
                        </div>
                    </div>
                </div>
            </div>

            <statistics></statistics>
        </div>
    `,

    data: () => {
        return {
            keyword: ''
        }
    },

    mounted() {
        let words = [
            'Revolutionize',
            'Level Up',
            'Upgrade',
            'Spruce Up',
            'Overhaul'
        ]
        this.keyword = words[Math.floor(Math.random() * words.length)];
    }
});