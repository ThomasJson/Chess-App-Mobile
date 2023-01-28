export class BattleController {

    index = async () => {

        const {BattleView} = await import('../views/battle/battle.view.js');
        const view = new BattleView();
        return view.render();

    }

}