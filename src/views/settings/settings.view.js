export class SettingsView {

    constructor() {
        this.importCss();
    }
  
    importCss = async () => {
        const cssModule = await import("./settings.view.css", {
            assert: { type: "css" },
        });

        document.adoptedStyleSheets = [cssModule.default];
    };
  
    render = () => {
        
        return `
            <header class="row background-color color2">

                <div id="logo">
                    <a class="spa-link color2" href="/home">
                        <i class="fa-solid fa-arrow-left"></i>
                    </a>
                </div>

                <div id="titre">Nouvelle Partie</div>
                <div id="user"><p>Username</p></div>
            </header>

            <main class="col">
                
                <select class="buttonEffect">
                    <option>Cadence</option>
                    <option>3:00</option>
                    <option>5:00</option>
                    <option>10:00</option>
                </select>
                
                <div class="buttonEffect">
                    <a class="spa-link" href="/matchmaking">Jouer</a>
                </div>
                <div class="buttonEffect">
                    <a class="spa-link" href="#">Jouer avec un ami</a>
                </div>
                <div class="buttonEffect">
                    <a class="spa-link" href="#">Thèmes</a>
                </div>
            </main>

            <footer class="background-color">
                <nav class="row color2">
                    <div><a class="spa-link color2" href="/home">Annuler</a></div>
                </nav>
            </footer>
        `;
    };

}