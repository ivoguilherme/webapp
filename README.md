
# WebApp NX

Este projeto é baseado em um monorepo utilizando NX e tem por objetivo ser capaz de orquestrar várias aplicações diferentes coexistindo no mesmo ambiente de forma individual.<br><br>
A aplicação principal é chamada de WebApp e todas as demais são web componentes individuais e desacoplados, capazes de terem suas próprias arquiteturas, componentes visuais independentes e que devem funcionar perfeitamente, independente de serem chamadas por WebApp ou qualquer outra aplicação.
<br>

## Navegação
- [Configurações do Projeto](#configurações-do-projeto)
  - [Instalação](#instalação)
  - [Configurações Opcionais](#configurações-opcionais)
- [Estrutura do Projeto](#estrutura-do-projeto)
<br>

## Configurações do Projeto
#### Instalação
```bash
# Clone o projeto
$ git clone https://github.com/ivoguilherme/webapp.git

# Instale todas as dependências necessárias
$ npm install

# Inicie o projeto
$ npm run start
```
<br>
 
#### Configurações Opcionais
```bash
# Instale o NX globalmente
$ npm install -g nx

# Faça a instalação de todas as extensões sugeridas pelo projeto
# NX Console, Jest Runner, Prettier
```
<br>

## Estrutura do Projeto

```bash
# Estrutura de pastas do Projeto

|   # Diretório principal
|___ apps				
|   |
|   |   # Aplicação principal
|   |___ webapp
|   |
|   |   # Testes e2e
|   |___ webapp-e2e			
|
|   # Diretório de Webcomponents e código compartilhado
|___ libs	
|   |
|   |   # Componentes genéricos
|   |___ components		
|   |
|   |   # Webcomponentes (Aplicações independentes)
|   |___ webcomponents		
|       |
|       |   # Aplicação de authenticação
|       |___ authentication
|
|   # Ferramentas
|___ tools
|   |
|   |   # Geradores
|   |___ generators
```
