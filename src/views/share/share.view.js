export class ShareView {

    constructor() {
        this.importCss();
    }
  
    importCss = async () => {
        const cssModule = await import("./share.view.css", {
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

                <div id="titre">Sauvegarder une partie</div>
                <div id="user"><p>Username</p></div>
            </header>

            <main class="col">

                <form class="col" action="/action_page.php" method="post">

                    <div class="row">
                        <label for="title"><b>Titre</b></label>
                        <input type="text" name="title" required>
                    </div>
                    <div class="row">
                        <label for="opening"><b>Ouverture</b></label>
                        <input type="text" name="opening" required>
                    </div>
                    <div class="row">
                        <label for="category"><b>Categorie</b></label>
                        <input type="text" name="category" required>
                    </div>
                    <div id="save-btn-bloc" class="row">
                        <button class="buttonEffect" type="submit">Sauvegarder</button>
                    </div>
                </form>

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