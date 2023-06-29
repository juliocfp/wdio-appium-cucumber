# WebdriverIO, Appium e Cucumber Boilerplate

<img src="https://appium.io/docs/en/2.0/assets/images/appium-logo-horiz.png" width="450" height="100"> <img src="https://cucumber.io/cucumber/media/images/logos/icons/cucumber-open-icon.svg" width="100" height="100"> <img src="https://webdriver.io/img/logo-webdriver-io.png" width="100" height="100">

Este boilerplate fornece uma estrutura básica para realizar testes de interface em um aplicativo Android. Utilizando as ferramentas Appium, WebDriverIO e Cucumber, você poderá escrever testes em uma linguagem natural compreensível por todas as partes interessadas no projeto.

## Tecnologias Utilizadas

- [Appium]: Framework open-source para automação de testes em aplicativos móveis.
- [WebDriverIO]: Uma biblioteca de automação de teste baseada em Node.js.
- [Cucumber]: Framework de BDD para escrever testes em linguagem natural.
- [Node.js]: Ambiente de execução JavaScript.

[Appium]: <https://appium.io/>
[WebDriverIO]: <https://webdriver.io/>
[Cucumber]: <https://cucumber.io/>
[Node.js]: <https://nodejs.org/>

## Pré-requisitos

Antes de começar, verifique se você possui o seguinte instalado em seu ambiente:

- Node.js (versão 12 ou superior)
- Appium (instalado globalmente)
- Yarn (instalado globalmente)
- Android SDK configurado e emulador ou dispositivo Android conectado

## Configuração do Projeto

Siga as etapas abaixo para configurar o projeto:

1. Clone o repositório em seu computador:
```javascript
git clone https://github.com/juliocfp/mottu-wdio-appium-boilerplate.git
```
2. Navegue até o diretório do projeto.
3. Instale as dependências do projeto:
```javascript
npm install
```
4. Configure as informações do dispositivo e aplicativo no arquivo **wdio.conf** e **wdio.android.conf**.
- Defina as informações do dispositivo no objeto capabilities:
```javascript
capabilities: [{
  platformName: 'Android',
  deviceName: 'Nome do dispositivo',
  appPackage: 'pacote.do.aplicativo',
  appActivity: 'atividade.do.aplicativo'
}],
```
- Defina as informações de conexão do Appium no objeto services:
```javascript
services: ['appium'],
appium: {
  command: 'appium',
},
```

### Criando seus testes

- Crie arquivos **.feature** no diretório **tests/features**, escritos em gherkin na linguagem natural BDD:
```gherkin
# language: pt
Funcionalidade: Nome da Funcionalidade
  Cenário: Nome do Cenário
    Dado ...
    Quando ...
    Então ...
```

- Implemente os steps dos cenários em arquivos **.js** no diretório **test/steps**:
```javascript
import { Given, When, Then } from 'cucumber';

Given(/^<SEU STEP AQU>$/, async () => {
    //Seu código aqui
});

When(/^<SEU STEP AQU>$/, async () => {
    //Seu código aqui
});

Then(/^<SEU STEP AQU>$/, async () => {
    //Seu código aqui
});
```

## Executando os Testes

Para executar os testes, precisaremos do servidor Appium e do gerenciador de dependências Yarn.

- Inicie o servidor do Appium:
```javascript
appium
```
- Em um novo terminal, execute os testes usando o seguinte comando:
```javascript
yarn run:android
```
Os testes serão executados de acordo com os cenários definidos nas features. Os logs e resultados dos testes serão exibidos no terminal.


Para visualizar o relatório gerado pelo Allure, apenas execute o comando:
```javascript
yarn report:show
```
Isso fará com que um html seja exibido com as principais informações da execução.

## Conclusão

Este projeto boilerplate fornece uma estrutura básica para realizar testes de interface em um aplicativo Android usando as ferramentas Appium, WebDriverIO e Cucumber. Você pode personalizar e expandir este projeto de acordo com as necessidades do seu aplicativo.

Certifique-se de configurar corretamente as informações do dispositivo e aplicativo nos arquivos **wdio.android.conf.js** e **wdio.conf.js** antes de executar os testes.
