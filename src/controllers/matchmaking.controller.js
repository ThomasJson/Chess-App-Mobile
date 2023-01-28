export class MatchmakingController {

    index = async () => {

        const {MatchmakingView} = await import('../views/matchmaking/matchmaking.view.js');
        const view = new MatchmakingView();
        return view.render();

    }

}