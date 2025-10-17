# language: pt
Funcionalidade: Login no site
  Descrição: cenários voltados para os -caminhos felizes- da Solicitação de Login no site

  @Carregamento
  Cenário: Validação do carregamento do site
    Dado que eu acesso a página inicial do site
    Quando eu verifico o carregamento completo da página
    Então eu devo ver o logotipo da empresa "Swag Labs" no topo da página

  @LoginSucesso
  Cenário: Validação do login com usuário e senha válidos
    Dado eu insiro o usuário válido no campo de username
    Quando eu insiro a senha válida no campo de password
    E eu clico no botão de login
    Então eu devo ser redirecionado para a página do products

  @CampoUsernameVisivel
  Cenário: Verificar se o campo "Username" está visível e habilitado.
    Dado que clico no campo username
    Então campo aparece na tela e aceita digitação

  @CampoPasswordVisivel
  Cenário: Verificar se o campo "Password" está visível e habilitado.
    Dado que clico no campo password
    Então campo aparece na tela e aceita digitação

  @BotãoLoginVisivel
  Cenário: Verificar se o botão de login está visível na tela.
    Dado que verifico se o botão login é renderizado na tela
    Então botão Login aparece corretamente na interface

  @BotãoLoginClicável
  Cenário: Validar o clique no botão de login com o mouse.
    Dado que clico no botão login
    Então evento de clique é disparado corretamente

  @PressionarEnterNoFormulário
  Cenário: Validar o acionamento do botão de login ao pressionar Enter com foco nos campos.
    Dado que preencho o campo Username        
    Quando preencho o campo Password
    E pressiono enter ainda nos campos do formulário
    Então devo ser redirecionado para a página do produtos

  @FocoViaTabulaçãoFormulário
  Cenário: Verificar se o foco pode ser alternado entre os campos via tecla Tab.
    Dado que seleciono o body da página
    Quando e navego na página com a tecla tab entre os campos username, password e botão login
    Então o foco deve alternar corretamente entre os campos

  @EstiloVisualBotãoLogin
  Cenário: Estilo visual (CSS)
    Dado que valido que a fonte e cor do botão login estão de acordo com especificação
    Então botão login apresenta características corretas
