(() => {
    Vue.component('nav-bar', {
        template: `
            <nav class="navbar sticky-top navbar-expand-lg navbar-dark accent-bg">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="container">
                    <div class="collapse navbar-collapse">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Disabled</a>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </nav>
        `
    });
})();

/**
 * <div class="container">
            <div class="row">
                <div class="col"></div>
                <div class="col-10">
                    <router-view></router-view>
                </div>
                <div class="col"></div>
            </div>
        </div>
 */