export class EndgameView {

    constructor() {
        this.importCss();
    }
  
    importCss = async () => {
        const cssModule = await import("./endgame.view.css", {
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

                <div id="user"><p>Username</p></div>
                
            </header>

            <main class="col">

                <div id="endGame" class="col border">
                    <div class="endgameHeader row">
                        <div><i class="fa-solid fa-xmark"></i></div>
                        <div class="center">
                            <p class="titre">Les blancs</p>
                            <p class="titre">gagnent</p>
                            <p class="titre">par abandon</p>
                        </div>
                        <div><i class="fa-solid fa-share-nodes"></i></div>
                    </div>
                    <div class="result row">
                        <div class="result-user">User</div>
                        <div>1-0</div>
                        <div class="result-adversaire">Adversaire</div>
                    </div>
                    
                    <div class="gold">Gold</div>
                    <div class="amount">25 + 15</div>

                    
                    <a class="spa-link save-link background-color color2" href="/save">Sauvegarder la partie</a>
                    

                    <div class="row endgame-btn">
                        <a class="spa-link background-color color2" href="/matchmaking">Rejouer</a>
                        <a class="spa-link background-color color2" href="/matchmaking">Nouvelle partie en 3 min</a>
                    </div>
                </div>

            </main>

            <footer class="background-color">
                <nav class="row color2">
                    <div><a class="spa-link color2" href="/home">Nulle</a></div>
                    <div><a class="spa-link color2" href="/home">Abandonner</a></div>
                    <div><a class="spa-link color2" href="/home">Tchat</a></div>
                    <div><a class="spa-link color2" href="/home"><i class="fa-solid fa-arrow-left"></i></a></div>
                    <div><a class="spa-link color2" href="/home"><i class="fa-solid fa-arrow-right"></i></a></div>
                </nav>
            </footer>
        `;
    };

}