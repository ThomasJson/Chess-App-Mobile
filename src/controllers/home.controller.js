export class HomeController {

    index = async () => {

        const {HomeView} = await import('../views/home/home.view.js');
        const view = new HomeView();
        return view.render();

    }

}