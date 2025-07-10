# 🎲 Projeto Sorteio

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

## 🎯 Sobre o Projeto

Este projeto é uma aplicação de linha de comando (CLI) desenvolvida em Node.js e TypeScript para realizar sorteios de uma maneira única. A aplicação lê uma lista de participantes a partir de um arquivo CSV e realiza o sorteio em um formato de "resta um", onde os participantes são sorteados e eliminados um a um, até que o último nome restante seja declarado o grande vencedor.

---

## ✨ Funcionalidades

O projeto atualmente possui as seguintes funcionalidades:

- [x] Leitura de participantes a partir de um arquivo `participantes.csv`.
- [x] Lógica de sorteio invertida (o último a ser sorteado vence).
- [x] Exibição do resultado e do processo de sorteio de forma interativa no terminal.
- [x] Geração de um arquivo de log com os resultados dos sorteios.

---

## 🛠️ Tecnologias Utilizadas

As seguintes ferramentas e tecnologias foram usadas na construção do projeto:

- **[Node.js](https://nodejs.org/en/)**: Ambiente de execução do JavaScript no servidor.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática.
- **tsx**: Ferramenta para executar arquivos TypeScript diretamente, sem compilação prévia.
- **terminal-kit**: Biblioteca para criar interfaces de terminal ricas e interativas.

---

## 🚀 Como Executar o Projeto

Siga os passos abaixo para executar o projeto em seu ambiente local.

### Pré-requisitos

Antes de começar, você vai precisar ter as seguintes ferramentas instaladas em sua máquina:

- Node.js
- Git (Opcional, para clonar o repositório)

### Estrutura do CSV

Crie um arquivo chamado `participantes.csv` na raiz do projeto. O arquivo deve conter uma única coluna com o nome dos participantes, um por linha, sem cabeçalho.

### clonando o Repositório

```bash
# Clone este repositório
$ git clone https://[SEU-USUARIO-GIT]/projetoSorteio.git

# Acesse a pasta do projeto no terminal/cmd
$ cd projetoSorteio
```

### Instalando as Dependências

```bash
# Instale as dependências do projeto
$ npm install
```

### Executando a Aplicação

```bash
# Execute o script principal da aplicação
$ npm start
```

---

## ✒️ Autor

**Carlos Felipe Leopoldino da Silva**

- [[LinkedIn](https://www.linkedin.com/in/carlos-leopoldino/)]
