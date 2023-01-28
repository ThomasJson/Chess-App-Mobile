export class SettingsController {

    index = async () => {

        const {SettingsView} = await import('../views/settings/settings.view.js');
        const view = new SettingsView();
        return view.render();

    }

}