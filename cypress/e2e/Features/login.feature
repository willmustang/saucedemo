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
  Cenário: Campo "Username" visível e habilitado
    Dado que clico no campo username
    Então campo aparece na tela e aceita digitação

  @CampoPasswordVisivel
  Cenário: Campo "Password" visível e habilitado
    Dado que clico no campo password
    Então campo aparece na tela e aceita digitação

  @BotãoLoginVisivel
  Cenário: Botão visível na tela
    Dado que verifico se o botão login é renderizado na tela
    Então Botão Login aparece corretamente na interface

  @BotãoLoginClicável
  Cenário: Clique no botão com mouse
    Dado que clico no botão login
    Então evento de clique é disparado corretamente

  @PressionarEnterNoFormulário
  Cenário: Pressionar Enter com foco nos campos
    Dado que preencho o campo Username        
    Quando preencho o campo Password
    E pressiono enter ainda nos campos do formulário
    Então devo ser redirecionado para a página do products

  @FocoViaTabulaçãoUsername
  Cenário: Foco via teclado (Tab) Username
    Dado que seleciono o body da página
    Quando e navego na página com a tecla tab até o campo username
    Então devo conseguir digitar no campo username

  @FocoViaTabulaçãoPassword@
  Cenário: Foco via teclado (Tab) Password
    Dado que seleciono o body da página
    Quando navego na página com a tecla tab até o campo password
    Então devo conseguir digitar no campo password

  @FocoViaTabulaçãoLogin
  Cenário: Foco via teclado (Tab) botão Login
    Dado que seleciono o body da página
    Quando navego na página com a tecla tab até o botão login
    Então devo conseguir clicar no botão login

  @EstiloVisualBotãoLogin
  Cenário: Estilo visual (CSS)
    Dado que valido que a fonte e cor do botão login estão de acordo com especificação
    Então botão login apresenta características corretas
