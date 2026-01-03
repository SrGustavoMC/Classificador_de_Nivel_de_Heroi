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

## 🛠️ Tecnologias e Conceitos Utilizados

- **Variáveis e Operadores:** Para armazenamento de dados e cálculos aritméticos.
- **Estruturas de Decisão:** `if`, `else if`, `else` para validação das faixas de nível.
- **Laços de Repetição:** Para execução contínua ou testes de múltiplos casos.
- **Funções:** Para modularização e reutilização do código (foco no desafio 2).
- **Interpolação de Strings:** Para saídas de texto dinâmicas.

---

## 📢 Sobre
Projetos desenvolvidos como parte da formação de Lógica de Programação da **DIO (Digital Innovation One)**.