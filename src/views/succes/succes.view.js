export class SuccesView {

    constructor() {
        this.importCss();
    }
  
    importCss = async () => {
        const cssModule = await import("./succes.view.css", {
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

                <div id="titre">Succès</div>
                <div id="user"><p>Username</p></div>
            </header>

            <main class="col">

                <div class="row border">
                    <p>33%</p>
                    <h2>Mats</h2>
                    <i class="fa-solid fa-angle-down"></i>
                </div>
                <div class="row border">
                    <p>20%</p>
                    <h2>Théorie</h2>
                    <i class="fa-solid fa-angle-down"></i>
                </div>
                <div class="row border">
                    <p>100%</p>
                    <h2>Blunders</h2>
                    <i class="fa-solid fa-angle-down"></i>
                </div>
                <div class="row border">
                    <p>50%</p>
                    <h2>Simple Chess</h2>
                    <i class="fa-solid fa-angle-down"></i>
                </div>
                <div class="row border">
                    <p>0%</p>
                    <h2>GM</h2>
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