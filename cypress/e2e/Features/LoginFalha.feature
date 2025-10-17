# language: pt
Funcionalidade: Login com falha no site
  Descrição: cenários voltados para os -caminhos infelizes- da Solicitação de Login no site

  @LoginUsuárioObrigatório
  Cenário: Validar se o campo "Username" exibe mensagem de erro ao ser deixado vazio.
    Dado não insiro nenhuma informação no campo username
    Quando insiro senha válida no campo password
    E clico no botão login
    Então devo ver a mensagem de erro: "Epic sadface: Username is required" é exibida em vermelho abaixo do campo "Password"

  @LoginSenhaObrigatória
  Cenário: Validar se o campo "Password" exibe mensagem de erro ao ser deixado vazio.
    Dado que insiro username valido no campo login
    Quando não insiro senha válida no campo password
    E clico no botão login
    Então devo ver a mensagem de erro: "Epic sadface: Password is required" é exibida em vermelho abaixo do campo "Password"