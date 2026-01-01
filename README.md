# 🛡️ Hero Level Classifier
> Uma aplicação de lógica de programação para classificação dinâmica de níveis baseada em experiência (XP).

## 💻 Sobre o Projeto

Este projeto consiste em um algoritmo de classificação que determina o rank de um herói com base em sua experiência acumulada. O sistema processa o nome e a quantidade de XP fornecidos e retorna o nível correspondente de acordo com regras predefinidas, simulando a mecânica de rankeamento comum em jogos de RPG e MOBAs.

O objetivo principal foi implementar lógica condicional encadeada e manipulação de variáveis para criar uma solução limpa e funcional.

## ✨ Funcionalidades

- **Classificação Dinâmica:** O sistema avalia faixas de XP que variam de 0 a 10.000+.
- **Feedback Imediato:** Retorna uma mensagem formatada com o nome e a patente atual do herói.
- **Cobertura de Casos:** Trata desde o nível iniciante ("Ferro") até o nível máximo ("Radiante").

## 👀 Exemplo de Uso

Ao executar o script com diferentes valores de entrada, o comportamento esperado é:

**Entrada 1:**
```json
{
  "heroi": "Arthas",
  "xp": 6500
}
