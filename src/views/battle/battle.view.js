export class BattleView {

    constructor() {
        this.importCss();
    }
  
    importCss = async () => {
        const cssModule = await import("./battle.view.css", {
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

                <div id="adversaire-container" class="row">
                    <div id="adversaire" class="player row">
                        <p class="row align-center">Enrique <img class="countryFlag" src="./src/img/espagne.png"></p>
                        <div class="clock">3 : 00</div>
                    </div>
                </div>

                
                <div class="parent">

                    <div id="a1" class="div1 chess-clr1"><p class="absolute-number">1</p><i class="fa-regular fa-chess-rook"><p class="absolute-letter">a</p></i></div>
                    <div id="a2" class="div2 chess-clr2"><p class="absolute-number">2</p><i class="fa-regular fa-chess-pawn"></i></div>
                    <div id="a3" class="div3 chess-clr1"><p class="absolute-number">3</p></div>
                    <div id="a4" class="div4 chess-clr2"><p class="absolute-number">4</p></div>
                    <div id="a5" class="div5 chess-clr1"><p class="absolute-number">5</p></div>
                    <div id="a6" class="div6 chess-clr2"><p class="absolute-number">6</p></div>
                    <div id="a7" class="div7 chess-clr1"><p class="absolute-number">7</p><i class="fa-solid fa-chess-pawn"></i></div>
                    <div id="a8" class="div8 chess-clr2"><p class="absolute-number">8</p><i class="fa-solid fa-chess-rook"></i></div>

                    <div id="b1" class="div9 chess-clr2"><i class="fa-regular fa-chess-knight"><p class="absolute-letter">b</p></i></div>
                    <div class="div10 chess-clr1"><i class="fa-regular fa-chess-pawn"></i></div>
                    <div class="div11 chess-clr2"></div>
                    <div class="div12 chess-clr1"></div>
                    <div class="div13 chess-clr2"></div>
                    <div class="div14 chess-clr1"></div>
                    <div class="div15 chess-clr2"><i class="fa-solid fa-chess-pawn"></i></div>
                    <div class="div16 chess-clr1"><i class="fa-solid fa-chess-knight"></i></div>

                    <div id="c1" class="div17 chess-clr1"><i class="fa-regular fa-chess-bishop"><p class="absolute-letter">c</p></i></div>
                    <div class="div18 chess-clr2"><i class="fa-regular fa-chess-pawn"></i></div>
                    <div class="div19 chess-clr1"></div>
                    <div class="div20 chess-clr2"></div>
                    <div class="div21 chess-clr1"></div>
                    <div class="div22 chess-clr2"></div>
                    <div class="div23 chess-clr1"><i class="fa-solid fa-chess-pawn"></i></div>
                    <div class="div24 chess-clr2"><i class="fa-solid fa-chess-bishop"></i></div>

                    <div id="d1" class="div25 chess-clr2"><i class="fa-regular fa-chess-queen"><p class="absolute-letter">d</p></i></div>
                    <div class="div26 chess-clr1"><i class="fa-regular fa-chess-pawn"></i></div>
                    <div class="div27 chess-clr2"></div>
                    <div class="div28 chess-clr1"></div>
                    <div class="div29 chess-clr2"></div>
                    <div class="div30 chess-clr1"></div>
                    <div class="div31 chess-clr2"><i class="fa-solid fa-chess-pawn fa-2x"></i></div>
                    <div class="div32 chess-clr1"><i class="fa-solid fa-chess-queen fa-2x"></i></div>

                    <div id="e1" class="div33 chess-clr1"><i class="fa-regular fa-chess-king fa-2x"><p class="absolute-letter">e</p></i></div>
                    <div class="div34 chess-clr2"><i class="fa-regular fa-chess-pawn fa-2x"></i></div>
                    <div class="div35 chess-clr1"></div>
                    <div class="div36 chess-clr2"></div>
                    <div class="div37 chess-clr1"></div>
                    <div class="div38 chess-clr2"></div>
                    <div class="div39 chess-clr1"><i class="fa-solid fa-chess-pawn"></i></div>
                    <div class="div40 chess-clr2"><i class="fa-solid fa-chess-king"></i></div>

                    <div id="f1" class="div41 chess-clr2"><i class="fa-regular fa-chess-bishop"><p class="absolute-letter">f</p></i></div>
                    <div class="div42 chess-clr1"><i class="fa-regular fa-chess-pawn"></i></div>
                    <div class="div43 chess-clr2"></div>
                    <div class="div44 chess-clr1"></div>
                    <div class="div45 chess-clr2"></div>
                    <div class="div46 chess-clr1"></div>
                    <div class="div47 chess-clr2"><i class="fa-solid fa-chess-pawn"></i></div>
                    <div class="div48 chess-clr1"><i class="fa-solid fa-chess-bishop"></i></div>

                    <div id="g1" class="div49 chess-clr1"><i class="fa-regular fa-chess-knight"><p class="absolute-letter">g</p></i></div>
                    <div class="div50 chess-clr2"><i class="fa-regular fa-chess-pawn"></i></div>
                    <div class="div51 chess-clr1"></div>
                    <div class="div52 chess-clr2"></div>
                    <div class="div53 chess-clr1"></div>
                    <div class="div54 chess-clr2"></div>
                    <div class="div55 chess-clr1"><i class="fa-solid fa-chess-pawn"></i></div>
                    <div class="div56 chess-clr2"><i class="fa-solid fa-chess-knight"></i></div>

                    <div id="h1" class="div57 chess-clr2"><i class="fa-regular fa-chess-rook"><p class="absolute-letter">h</p></i></div>
                    <div class="div58 chess-clr1"><i class="fa-regular fa-chess-pawn"></i></div>
                    <div class="div59 chess-clr2"></div>
                    <div class="div60 chess-clr1"></div>
                    <div class="div61 chess-clr2"></div>
                    <div class="div62 chess-clr1"></div>
                    <div class="div63 chess-clr2"><i class="fa-solid fa-chess-pawn"></i></div>
                    <div class="div64 chess-clr1"><i class="fa-solid fa-chess-rook"></i></div>
                        
                </div>

                <div id="user-container" class="row">
                    <div id="user" class="player row">
                        <p class="row align-center">Pablo <img class="countryFlag" src="./src/img/france.png"></p>
                        <div class="clock">3 : 00</div>
                    </div>
                </div>

            </main>

            <footer class="background-color">
                <nav class="row color2">
                    <div><a class="spa-link color2" href="/home">Nulle</a></div>
                    <div><a class="spa-link color2" href="/endgame">Abandonner</a></div>
                    <div><a class="spa-link color2" href="/share">Tchat</a></div>
                    <div><a class="spa-link color2" href="/home"><i class="fa-solid fa-arrow-left"></i></a></div>
                    <div><a class="spa-link color2" href="/share"><i class="fa-solid fa-arrow-right"></i></a></div>
                </nav>
            </footer>
        `;
    };

}