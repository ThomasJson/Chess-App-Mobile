export class SaveController {

    index = async () => {

        const {SaveView} = await import('../views/save/save.view.js');
        const view = new SaveView();
        return view.render();

    }

}