# language: pt

Funcionalidade: Validação do Saldo

  Contexto:
    Dado que eu esteja na Home

  Cenário: Visualização do Saldo
    Quando clicar no botão ocultar exibir saldo
    Então o aplicativo deve exibir o saldo de 5.500
