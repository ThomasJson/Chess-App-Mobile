export class ShareController {

    index = async () => {

        const {ShareView} = await import('../views/share/share.view.js');
        const view = new ShareView();
        return view.render();

    }

}