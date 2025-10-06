#language: pt

Funcionalidade: Login no site
  Descrição: cenários voltados para os -caminhos felizes- da Solicitação

 
  Cenário: Validação do carregamento do site
    Dado que eu acesso a página inicial do site
    Quando eu verifico o carregamento completo da página
    Então eu devo ver o logotipo da empresa "Swag Labs" no topo da página
    
    Cenário: Validação do input Login
    Dado eu insiro o usuário válido no campo de username
    Quando eu insiro a senha válida no campo de password
    E eu clico no botão de login
    Então eu devo ser redirecionado para a página do products