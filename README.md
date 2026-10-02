# Instadev

Projeto front-end criado com o objetivo de praticar HTML, CSS e JavaScript, replicando a interface visual de uma página inicial de rede social inspirada no Instagram.

## Projeto publicado

- Link: https://maria-elane7.github.io/instadev/

## Descrição

Este projeto é uma reprodução estática da página inicial do Instagram, com foco em layout, responsividade e organização de componentes visuais. A ideia foi desenvolver uma interface semelhante ao feed social, incluindo:

- header e navegação superior
- menu lateral em telas maiores
- área de stories com rolagem horizontal
- feed de publicações com imagens, botões de ação e comentários
- sidebar com perfil e sugestões de contas
- footer mobile para navegação

## Objetivo de prática

O projeto foi construído para exercitar:

- estruturação de páginas com HTML semântico
- estilização com CSS moderno e responsivo
- uso de variáveis de cor e espaçamento reutilizáveis
- posicionamento de elementos em layout de feed
- criação de interações simples com JavaScript
- simulação de comportamento de rolagem de stories

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript

## Estrutura do projeto

```text
instadev/
├── index.html
├── assets/
│   ├── css/
│   │   ├── aside.css
│   │   ├── base.css
│   │   ├── feed.css
│   │   ├── footer.css
│   │   ├── header.css
│   │   ├── main.css
│   │   └── stories.css
│   ├── imagens/
│   │   ├── avatars/
│   │   ├── feed/
│   │   └── logo-black.png
│   │   └── logo-white.png
│   └── js/
│       └── script.js
└── README.md
```

## Funcionalidades

- Layout responsivo para desktop e mobile
- Stories com botões de navegação lateral
- Feed com cards de publicações
- Sidebar com sugestões para seguir
- Botões e ícones visuais inspirados no Instagram
- Scroll horizontal controlado por JavaScript

## JavaScript

O arquivo `assets/js/script.js` controla a navegação dos stories, permitindo que a seção de histórias desça e suba horizontalmente ao clicar nos botões laterais. A lógica também oculta os botões quando o usuário chega ao início ou ao fim da área de rolagem.

## Como executar

Como o projeto é estático, basta abrir o arquivo `index.html` em um navegador.

Se preferir usar um servidor local:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

## Observações

Este é um projeto de estudo e não representa uma reprodução completa da plataforma original. A proposta principal foi praticar a criação de uma interface visual moderna, organizada e responsiva, com foco em front-end.
