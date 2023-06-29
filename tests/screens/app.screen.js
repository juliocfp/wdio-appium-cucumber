export default class AppScreen {
    
    constructor (selector) {
        this.selector = selector;
    }

    async waitForIsShown (isShown = true) {
        const elem = await $(this.selector);
        return elem.waitForDisplayed({
            reverse: !isShown,
        });
    }
}
