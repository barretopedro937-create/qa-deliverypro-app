# 🍔 DeliveryPro Express - Sistema de Gestão de Pedidos

Repositório oficial utilizado nas atividades práticas da Unidade Curricular **UC11 - Planejar e executar testes nas aplicações desenvolvidas** do curso Técnico em Desenvolvimento de Sistemas.

## 📋 Sobre o Projeto
O **DeliveryPro Express** é uma aplicação web de comércio eletrônico voltada para o setor de alimentação (*delivery*). O sistema foi estruturado para simular um cenário corporativo real de desenvolvimento e garantia de qualidade (QA), contendo um catálogo interativo de produtos, carrinho de compras dinâmico, taxas de entrega regionalizadas, motor de cupons promocionais e um módulo de feedback de usuários.

---

## 🎯 Critérios de Aceitação (Regras de Negócio)
O software opera sob premissas técnicas rigorosas. Para que uma versão seja considerada estável e liberada para ambiente de produção, ela deve atender obrigatoriamente aos seguintes critérios de aceitação:

1. **Identificação do Cliente:** O preenchimento do nome do cliente é obrigatório para prosseguir com o fechamento do pedido.
2. **Validação de Quantidades:** O sistema rejeita o processamento de quantidades negativas de produtos inseridos no carrinho.
3. **Composição do Frete:** A taxa fixa de entrega (R$ 8,00) deve ser somada matematicamente de forma correta ao subtotal dos itens.
4. **Aplicação de Desconto:** A ativação do cupom promocional `SENAC20` desconta exatamente **20%** do valor consolidado da fatura.
5. **Proteção de Transação Vazia:** O sistema impede o fechamento de pedidos e emite alerta visual caso o carrinho totalize R$ 0,00.

---

## 🛠️ Stack Tecnológica
*   **HTML5:** Marcação semântica e estruturação de conteúdos.
*   **CSS3:** Estilização avançada com CSS Grid, Flexbox e design responsivo.
*   **JavaScript (ES6+):** Lógica comportamental, manipulação de eventos e cálculos dinâmicos.
*   **Git & GitHub:** Controle de versão local/remoto e gerenciamento de ativos.

---

## 🚀 Como Executar a Aplicação

1. Certifique-se de possuir o [Git](https://git-scm.com/) e o [Visual Studio Code (VS Code)](https://code.visualstudio.com/) instalados em sua estação de trabalho.
2. Clone o repositório para o seu ambiente local utilizando o terminal ou o GitHub Desktop:
   ```bash
   git clone [https://github.com/caiolimasilva/qa-deliverypro-app.git](https://github.com/caiolimasilva/qa-deliverypro-app.git)