export class SuccesController {

    index = async () => {

        const {SuccesView} = await import('../views/succes/succes.view.js');
        const view = new SuccesView();
        return view.render();

    }

}