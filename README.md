# ⚔️ Desafios de Lógica de Programação - DIO

Este repositório reúne soluções práticas para desafios de lógica de programação, focando em estruturas de controle, funções e manipulação de variáveis em contextos "gamificados".

---

## 1️⃣ Classificador de Nível de Herói
**Objetivo:** Classificação dinâmica baseada em Experiência (XP).

Este algoritmo determina o rank de um herói com base em sua experiência acumulada. O sistema avalia faixas de XP (de 0 a 10.000+) utilizando estruturas de decisão para classificar o herói em níveis que vão desde **Ferro** até **Radiante**.

**Exemplo de Lógica:**
Se o herói possui 6.500 de XP, o sistema identifica o intervalo correspondente e retorna: *"O Herói de nome Arthas está no nível de Ouro"*.

---

## 2️⃣ Calculadora de Partidas Rankeadas
**Objetivo:** Gerenciamento de saldo de vitórias e definição de elo.

Neste segundo desafio, a lógica foi encapsulada em uma **função** que recebe a quantidade de vitórias e derrotas de um jogador. O algoritmo realiza dois passos principais:
1. **Cálculo de Saldo:** Subtrai as derrotas das vitórias.
2. **Definição de Rank:** Com base no saldo de vitórias, classifica o jogador em níveis (Ferro, Bronze, Prata, Ouro, Diamante, Lendário ou Imortal).

**Saída Esperada:**
O sistema exibe uma mensagem interpolada com o saldo final e o nível atingido, como: *"O Herói tem de saldo de 55 está no nível de Ouro"*.

---

## 3️⃣ Escrevendo as Classes de um Jogo
**Objetivo:** Implementação de conceitos de Orientação a Objetos (POO).

O foco deste desafio é a criação de uma **Classe Genérica** que representa um herói de uma aventura, contendo propriedades como nome, idade e tipo (ex: Guerreiro, Mago, Monge, Ninja). A classe possui um método `atacar` que exibe mensagens personalizadas conforme a classe do herói:

* **Mago:** "usou magia"
* **Guerreiro:** "usou espada"
* **Monge:** "usou artes marciais"
* **Ninja:** "usou shuriken"

**Saída Esperada:**
O método dispara uma saída interpolada combinando o tipo do herói e seu ataque específico: *"o mago atacou usando magia"* ou *"o guerreiro atacou usando espada"*.

---

## 🛠️ Tecnologias e Conceitos Utilizados

- **Variáveis e Operadores:** Para armazenamento de dados e cálculos aritméticos.
- **Estruturas de Decisão:** `if`, `else if`, `else` ou `switch` para validação de regras.
- **Laços de Repetição:** Para execução contínua ou testes de múltiplos casos.
- **Funções:** Para modularização e reutilização do código.
- **Classes e Objetos:** Para modelagem de entidades e métodos (foco no desafio 3).
- **Interpolação de Strings:** Para saídas de texto dinâmicas.

---

## 📢 Sobre
Projetos desenvolvidos como parte da formação de Lógica de Programação da **DIO (Digital Innovation One)**.