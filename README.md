<h1 align="center">
  IGNEWS - Portal de notícias 📰🚀
</h1>



<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0;
  <a href="#demo">Demo</a> &#xa0; | &#xa0;
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;  
  <a href="#white_check_mark-requerimentos">Requerimentos</a> &#xa0; | &#xa0;  
  <a href="#checkered_flag-começando">Começando</a> &#xa0; &#xa0; &#xa0;  
</p>

<br>

## :dart: Sobre ##
<div align="center"> 
  <p>
  ig.news é um blog com conteúdo restrito a usuários que assinam o serviço. O pagamento é feito através do Stripe e o acesso é verificado através de dados salvos no FaunaDB. É uma aplicação Serverless com postagens feitas pelo Prismic CMS.
  </p>
</div> 

<br>
<br>




<div align="center"> 
<img src="https://user-images.githubusercontent.com/104803451/213575678-5a65a768-a50a-403b-94e4-4c33a0ceee80.png" />
</div> 



## :rocket: Tecnologias ##

As seguintes tecnologias foram utilizadas no projeto:

- [Next.js](https://nextjs.org/)
- [Prismic CMS](https://prismic.io/)
- [Stripe](https://stripe.com/)
- [FaunaDB](https://fauna.com/)
- [Github OAuth](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app)

## :white_check_mark: Requerimentos ##

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/lang/en/)
- [Stripe CLI](https://stripe.com/docs/stripe-cli)

## :checkered_flag: Começando ##

```bash
# Execute o comando git clone para realizar o clone do repositório
$ git clone https://github.com/gabriellcastro/ignews.git
# Entre na pasta do repositório clonado
$ cd ignews
```

```bash
# Execute yarn para instalar as dependências
$ yarn or npm install

# Na raiz do projeto crie uma copia do arquivo .env.local.example
# Altere o nome da copia para .env.local
# Preencha as variáveis ambiente de acordo com as instruções
$ cp .env.local.example .env.local

# Execute stripe listen para ouvir eventos do webhook
$ stripe listen --forward-to localhost:3000/api/webhooks 

# Para iniciar a aplicação
$ yarn dev or npm run dev

```
