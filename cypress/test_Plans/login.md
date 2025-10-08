# Plano de Testes - Login

Feliz		1	Alta	Login	Entrada válida	Acesso o link "https://www.saucedemo.com/"	Insiro usuário válido no campo Username	Insiro senha válida no campo Password	Clico em login				Ter usuário(Email, Telefone ou ID) e senha cadastrados	Username e senha válidos deve permitir envio do formulário	Usuário: standard_user	Senha: secret_sauce	"Cenário: Entrada válida

Dado que Acesso o link ""https://www.saucedemo.com/"":
Quando Insiro usuário válido no campo Username
E Insiro senha válida no campo Password
E Clico em login
E 

E 

E 

Então Username e senha válidos deve permitir envio do formulário"	
Feliz		2	Alta	Login	Campo "Username" visível e habilitado	Acesso o link "https://www.saucedemo.com/"	clico no campo username	insiro caracteres válidos					O campo "Username" deve estar visível e permitir entrada de texto	Campo aparece na tela e aceita digitação	Usuário: standard_user	Senha: secret_sauce	"Cenário: Campo ""Username"" visível e habilitado

Dado que Acesso o link ""https://www.saucedemo.com/"":
Quando clico no campo username
E insiro caracteres válidos
E 
E 

E 

E 

Então Campo aparece na tela e aceita digitação"	
Feliz		3	Alta	Login	Campo "Password" visível e habilitado	Acesso o link "https://www.saucedemo.com/"	clico no campo password	insiro caracteres válidos					O campo "Password" deve estar visível e permitir entrada de texto	Campo aparece na tela e aceita digitação	Usuário: standard_user	Senha: secret_sauce	"Cenário: Campo ""Password"" visível e habilitado

Dado que Acesso o link ""https://www.saucedemo.com/"":
Quando clico no campo password
E insiro caracteres válidos
E 
E 

E 

E 

Então Campo aparece na tela e aceita digitação"	
Feliz		4	Alta	Login	Botão visível na tela	Acesso o link "https://www.saucedemo.com/"	verifico se o botão login é renderizado na tela						O botão "Login" deve estar visível na interface ao carregar a página.	Botão "Login" aparece corretamente na interface	Usuário: standard_user	Senha: secret_sauce	"Cenário: Botão visível na tela

Dado que Acesso o link ""https://www.saucedemo.com/"":
Quando verifico se o botão login é renderizado na tela
E 
E 
E 

E 

E 

Então Botão ""Login"" aparece corretamente na interface"	
Feliz		5	Alta	Login	Clique no botão com mouse	Acesso o link "https://www.saucedemo.com/"	clico no botão login						Ao clicar com o mouse, o botão deve disparar o evento de submissão do formulário.	Evento de clique é disparado corretamente	Usuário: standard_user	Senha: secret_sauce	"Cenário: Clique no botão com mouse

Dado que Acesso o link ""https://www.saucedemo.com/"":
Quando clico no botão login
E 
E 
E 

E 

E 

Então Evento de clique é disparado corretamente"	
Feliz		6	Média	Login	Pressionar Enter com foco nos campos	Acesso o link "https://www.saucedemo.com/"	preencho o campo Username	preencho o campo Password	pressiono enter ainda nos campos do formulário				O sistema deve processar a ação e retornar o comportamento esperado (ex: redirecionamento, mensagem de erro ou sucesso).	Evento de envio de formulário é disparado corretamente	Usuário: standard_user	Senha: secret_sauce	"Cenário: Pressionar Enter com foco nos campos

Dado que Acesso o link ""https://www.saucedemo.com/"":
Quando preencho o campo Username
E preencho o campo Password
E pressiono enter ainda nos campos do formulário
E 

E 

E 

Então Evento de envio de formulário é disparado corretamente"	
Feliz		7	Baixa	Login	Foco via teclado (Tab)	Acesso o link "https://www.saucedemo.com/"	navego na página com a tecla "tab"	sigo com o foco até o botão login					O focus button deve ser direcionado corretamente ao elemento em questão	botão login é focado exibindo outline de confirmação	Usuário: standard_user	Senha: secret_sauce	"Cenário: Foco via teclado (Tab)

Dado que Acesso o link ""https://www.saucedemo.com/"":
Quando navego na página com a tecla ""tab""
E sigo com o foco até o botão login
E 
E 

E 

E 

Então botão login é focado exibindo outline de confirmação"	
Feliz		8	Baixa	Login	Estilo visual (CSS)	Acesso o link "https://www.saucedemo.com/"	valido que a cor do botão login está de acordo com especificação						Botão deve apresentar caracteristicas descritas conforme especificação	botão login apresenta caracteristicas corretas	Usuário: standard_user	Senha: secret_sauce	"Cenário: Estilo visual (CSS)

Dado que Acesso o link ""https://www.saucedemo.com/"":
Quando valido que a cor do botão login está de acordo com especificação
E 
E 
E 

E 

E 

Então botão login apresenta caracteristicas corretas"	
Infeliz		9	Alta	Login	Campo "Username" obrigatório	Acesso o link "https://www.saucedemo.com/"	clico no campo username	Insiro senha válida no campo	clico em login				O sistema deve impedir envio e exibir mensagem clara	Mensagem de erro: "Caracteres inválidos"	Usuário: standard_user	Senha: secret_sauce	"Cenário: Campo ""Username"" obrigatório

Dado que Acesso o link ""https://www.saucedemo.com/"":
Quando clico no campo username
E Insiro senha válida no campo
E clico em login
E 

E 

E 

Então Mensagem de erro: ""Caracteres inválidos"""	
Infeliz		10			Campo "Password" obrigatório	Acesso o link "https://www.saucedemo.com/"	clico no campo password	mensagem de alerta em vermelho é exibido(Password obrigatório) abaixo do campo "Password" obrigatório					Password e atualizado cadastrado	mensagem de alerta em vermelho é exibido(Password obrigatório) abaixo do campo "Password" obrigatório	Usuário: standard_user	Senha: secret_sauce	"Cenário: Campo ""Password"" obrigatório

Dado que Acesso o link ""https://www.saucedemo.com/"":
Quando clico no campo password
E mensagem de alerta em vermelho é exibido(Password obrigatório) abaixo do campo ""Password"" obrigatório
E 
E 

E 

E 

Então mensagem de alerta em vermelho é exibido(Password obrigatório) abaixo do campo ""Password"" obrigatório"	
		11													Usuário: standard_user	Senha: secret_sauce	"Cenário: 

Dado que :
Quando 
E 
E 
E 

E 

E 

Então "	