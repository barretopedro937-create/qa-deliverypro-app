// ==========================================
// MÓDULO 1: LÓGICA PURA (Alvo de Teste Unitário)
// Esta função não sabe o que é HTML. Ela só faz matemática.
// Teste no Console: calcularSubtotal(3, 25.00, 0, 0, 0, 0)
// ==========================================
function calcularSubtotal(q1, preco1, q2, preco2, q3, preco3) {
    if (quantidade < 0) return 0; // Regra de negócio de prevenção
    return quantidade * precoUnitario;
}

function aplicarDesconto(subtotal, codigoCupom) {
    if (codigoCupom === "SENAC20") {
        return subtotal * 0.80; // Dá 20% de desconto real
    }
    return subtotal;
}

// ==========================================
// MÓDULO 2: INTEGRAÇÃO (Lógica + Interface HTML)
// Alvo do Teste de Integração
// ==========================================
function atualizarInterface() {
    // 1. Coleta dados do HTML
    let qtd = parseInt(document.getElementById("qtdLanche").value) || 0;
    let cupom = document.getElementById("cupomInput").value;
    let precoFixo = 25;

    // 2. Chama as funções Unitárias
    let subtotal = calcularSubtotal(qtd, precoFixo);
    let totalComDesconto = aplicarDesconto(subtotal, cupom);

    // 3. Integra o resultado de volta no HTML
    document.getElementById("displayTotal").innerText = "Total: R$ " + totalComDesconto.toFixed(2);
}

// Escuta a digitação do usuário no navegador (Teste de Sistema)
document.getElementById("qtdLanche").addEventListener("input", atualizarInterface);
document.getElementById("cupomInput").addEventListener("input", atualizarInterface);