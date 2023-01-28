export class BoutiqueController {

    index = async () => {

        const {BoutiqueView} = await import('../views/boutique/boutique.view.js');
        const view = new BoutiqueView();
        return view.render();

    }

}