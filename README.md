# 👨🏻‍💻 Desafio Técnico - Tic Tac Toe

## 🙃 ❤️ Preview

![preview](./public/docs/preview.gif)

## 🎮 Acesse o Projeto Online

Você pode acessar a versão online do projeto de Tic Tac Toe clicando no link abaixo:

[react-challenge-tic-tac-toe.vercel.app](https://react-challenge-tic-tac-toe.vercel.app/)

O projeto está hospedado na plataforma Vercel.

## 📋 Descrição

Este projeto é uma implementação funcional do jogo da velha (Tic Tac Toe). O objetivo é desenvolver um jogo completo que permita a dois jogadores competirem em um tabuleiro 3x3. O projeto utiliza técnicas de estilização de sua escolha, como CSS Modules, SASS, ou Styled Components.

## ✅ Funcionalidades

- [x] **Tabuleiro 3x3**: O jogo é jogado em um tabuleiro de 3x3 células.
- [x] **Dois Jogadores**: Permite que dois jogadores façam suas jogadas alternadamente.
- [x] **Preenchimento de Jogadas**: Ao clicar em um quadrado, ele será preenchido com a jogada do jogador atual.
- [x] **Finalização do Jogo**: O jogo avisa quando um jogador vence ou quando ocorre um empate (velha).

## 🧠 Abordagens Utilizadas

### Gerenciamento de Estado com `useReducer`

Para lidar com o estado da aplicação, optei por utilizar o hook `useReducer` em vez do `useState`. Essa decisão foi tomada para abstrair as regras do jogo e centralizar as ações do usuário em um único local. Com isso, consegui facilitar a manutenção e o entendimento do código, uma vez que todas as mudanças de estado são tratadas através de um único reducer, que gerencia o fluxo das ações de forma previsível e organizada.

### Animações e Efeitos Visuais

Para melhorar a experiência do usuário, implementei animações CSS utilizando keyframes que são ativadas quando um jogador vence. Além disso, utilizei a biblioteca [react-confetti](https://www.npmjs.com/package/react-confetti) para incrementar as animações de celebração, adicionando um toque visual dinâmico e festivo ao jogo.

---

Essas abordagens foram escolhidas para proporcionar uma experiência de usuário mais fluida e visualmente atraente, ao mesmo tempo em que mantêm o código limpo e modular.

## 🔨 Como Rodar o Projeto

1. **Clone o repositório**:

```bash
git clone https://github.com/bmenegidio/react-challenge-tic-tac-toe.git
```

2. **Navegue até o diretório do projeto**:

```bash
cd react-challenge-tic-tac-toe
```

3. **Instale as dependências**:

```bash
npm install # ou o seu gerenciador de dependências favorito
```

4. **Inicie o servidor de desenvolvimento**:

```bash
npm run dev
```

5. **Abra o navegador**:

```bash
vá para http://localhost:5173 para ver a aplicação em execução
```
