export class EndgameController {

    index = async () => {

        const {EndgameView} = await import('../views/endgame/endgame.view.js');
        const view = new EndgameView();
        return view.render();

    }

}