export class MatchmakingView {

    constructor() {
        this.importCss();
    }
  
    importCss = async () => {
        const cssModule = await import("./matchmaking.view.css", {
            assert: { type: "css" },
        });

        document.adoptedStyleSheets = [cssModule.default];
    };
  
    render = () => {

        let counter = 3;
        let compteARebours = null;

        compteARebours = setInterval(() => {
            if(counter == -1) {
                clearInterval(compteARebours);
                document.location.href = "/battle";
            }
            else {
                document.getElementById('compteARebours').innerText = counter;
                counter--;
            }
        },1000);

        
        
        return `
            <header class="row background-color color2">

                <div id="logo">
                    <a class="spa-link color2" href="/home">
                        <i class="fa-solid fa-arrow-left"></i>
                    </a>
                </div>

                <div id="titre">Matchmaking</div>
                <div id="user"><p>Username</p></div>
            </header>

            <main class="col">
                <div>
                    <p>Recherche d'adversaire en cours ... </p>
                </div>
                <p id="compteARebours"></p>
            </main>

            <footer class="background-color">
                <nav class="row color2">
                    <div><a class="spa-link color2" href="/home">Annuler</a></div>
                </nav>
            </footer>
        `;
    };

}