This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
# Desafio final Go beyond. Particinado por [Corebiz](https://www.corebiz.ag/pt/)

## Introdução
Neste desafio foi proposto a execução de um site responsivo com direcionamento para 4 links e exibição de quatro imagens ( cada imagem leva a um dos links fornecidos). 
No footer há informações para contato e endereços da Corebiz pelo mundo. (Meu preferido é Buenos Aires! rs)
Faz parte do desafio também o consumo de uma API para utilização de imagens.

## Iniciando o Projeto

Primeiro, Rode:

```bash
npm run dev
# or
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) em seu browser para ver o resultado.

## API Next
### ./pages/api

Veja a [API](https://gobeyond-desafio-final-emoises-emoises.vercel.app/api/photos).
Ela fornece um arquivo JSON com uma Array com objetos com este formato: 
```JSON
{
    "albumId": 0,
    "id": 0,
    "title": "conheça um pouco de nossa história, nosso crescimento e nossa cultura.",
    "url": "https://...",
    "thumbnailUrl": "https://...",
    "link": "https://www.corebiz...",
    "label": "a corebiz"
  },
```

Para consumir essa API e cumprir um dos parâmetros do desafio utilizei a biblioteza [axios](https://www.npmjs.com/package/axios). 

Com estes objetos renderizos meus componentes de forma dinâmica.

## ./styles - Css

A maior dificuldade do desafio foi fazer uma aplicação responsiva para diversos dispositivos.
Na pasta ./Styles estão todos os arquivos, separados por componente, que modelam o site.
Priorizei executar o site com display grid para ter mais flexibilidade na responsividade.
Dica [Responsividade na prática](https://www.youtube.com/watch?v=H91DhKPjhPk&t=2011s)

## ./pages

O arquivo index.tsx é responsável por renderizar a única página deste desafio. Porém as lógicas foi separadas em componentes buscando boas práticas na execução do código.

### ./page/components

Desenvolvi 6 componentes. 
#### Contacts
#### Hamburguer
#### Header
#### Locations
#### Menu
#### Slider


### Sitemap

Buscando ir além procurei desenvolver o sitemap. Mas dada a simplicidade da página ainda observei grandes mudanças. Siga este link [sitemap](https://www.youtube.com/watch?v=rIh-VelVzgc).

## Conclusão

Cumpri os parâmetros do desafio. E posso afirmar que o grande desafio foi desenvolver o CSS de forma limpa e objetiva alcançando a responvidade para o site.

Grato!

#gobeyond #neverstoplearning #corebiz