export class BoutiqueView {

    constructor() {
        this.importCss();
    }
  
    importCss = async () => {
        const cssModule = await import("./boutique.view.css", {
            assert: { type: "css" },
        });

        document.adoptedStyleSheets = [cssModule.default];
    };
  
    render = () => {
        
        return `
            <header class="row background-color color2">

                <div id="logo">
                    <a class="spa-link color2" href="/">
                        <i class="fa-solid fa-arrow-left"></i>
                    </a>
                </div>

                <div id="titre">Boutique</div>
                <div id="user"><p>Username</p></div>
            </header>

            <main class="col">

                <div class="row border">
                    <h2>Pièces</h2>
                    <i class="fa-solid fa-angle-down"></i>
                </div>
                <div class="row border">
                    <h2>Echiquier</h2>
                    <i class="fa-solid fa-angle-down"></i>
                </div>
                <div class="row border">
                    <h2>Bannières</h2>
                    <i class="fa-solid fa-angle-down"></i>
                </div>

            </main>

            <footer class="background-color">
                <nav class="row color2">
                    <div><a class="spa-link color2" href="/home">Home</a></div>
                    <div><a class="spa-link color2" href="/boutique">Boutique</a></div>
                    <div><a class="spa-link color2" href="/succes">Succès</a></div>
                </nav>
            </footer>
        `;
    };

}