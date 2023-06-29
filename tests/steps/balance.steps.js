import assert from 'assert';
import { Given, When, Then } from 'cucumber';
import HomeScreen from '../screens/home.screen';

Given(/^que eu esteja na Home$/, async () => {
    await HomeScreen.waitForIsShown();
});

When(/^clicar no botão ocultar exibir saldo$/, async () => {
    await HomeScreen.clickShowBalanceButton();
});

Then(/^o aplicativo deve exibir o saldo de 5.500$/, async () => {
    assert.equal(await HomeScreen.getTextBalance(), 'R$ 5.500,00');
});
