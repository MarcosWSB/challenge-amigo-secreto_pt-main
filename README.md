# Challenge Amigo Secreto 🎉

Um aplicativo simples para sorteio aleatório de nomes de amigos, desenvolvido para praticar lógica de programação e manipulação do DOM.

## Funcionalidades Principais 🚀

### 1. Adição Controlada de Amigos
- **Validação de campo vazio:** Impede a inserção de nomes vazios
- **Prevenção de duplicatas:** Detecta e bloqueia nomes repetidos
- **Limpeza automática do campo:** O input é resetado após cada adição
- **Atualização dinâmica da lista:** Exibe em tempo real todos os amigos adicionados

### 2. Sistema de Sorteio Inteligente
- **Validação mínima de participantes:** Requer pelo menos 2 amigos para sorteio
- **Algoritmo aleatório robusto:** 
  ```javascript
  Math.floor(Math.random() * amigos.length)
