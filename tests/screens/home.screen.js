import AppScreen from "./app.screen";

class HomeScreen extends AppScreen {
    constructor() {
        super('~card-hero');
    }

    get showBalanceButton () {return $('~show-balance');}
    get textBalance () {return $('~user-balance');}

    async clickShowBalanceButton () {
        const elem = await this.showBalanceButton;
        elem.click();
    }

    async getTextBalance () {
        const elem = await this.textBalance;
        return elem.getText();
    }
}

export default new HomeScreen();
