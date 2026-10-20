1. Teste de Subtotal para Item Único (Caminho Feliz)
ID: TU-01

Função Alvo: calcularSubtotal()

Entrada (Parâmetros): q1 = 2, preco1 = 35.00, q2 = 0, preco2 = 18.00, q3 = 0, preco3 = 7.00

Resultado Esperado: Retornar 70.00

2. Teste de Subtotal com Múltiplos Produtos
ID: TU-02

Função Alvo: calcularSubtotal()

Entrada (Parâmetros): q1 = 1, preco1 = 35.00, q2 = 2, preco2 = 18.00, q3 = 1, preco3 = 7.00

Resultado Esperado: Retornar 78.00 (35 + 36 + 7)

3. Teste Unitário com Carrinho Vazio
ID: TU-03

Função Alvo: calcularSubtotal()

Entrada (Parâmetros): q1 = 0, preco1 = 35.00, q2 = 0, preco2 = 18.00, q3 = 0, preco3 = 7.00

Resultado Esperado: Retornar 0.00

4. Teste de Resiliência a Quantidade Negativa (Valor Limite)
ID: TU-04

Função Alvo: calcularSubtotal()

Entrada (Parâmetros): q1 = -3, preco1 = 35.00, q2 = 0, preco2 = 18.00, q3 = 0, preco3 = 7.00

Resultado Esperado: Retornar 0.00 (A função deve tratar preventivamente o número negativo convertendo-o para 0)

5. Teste de Cálculo com Cupom Promocional Válido
ID: TU-05

Função Alvo: calcularTotalFinal()

Entrada (Parâmetros): subtotal = 100.00, taxaEntrega = 8.00, cupom = "SENAC20"

Resultado Esperado: Retornar 86.40 ([100 + 8] = 108; 108 * 0.80 = 86.40)

6. Teste de Cálculo com Cupom Inválido ou Digitado Errado
ID: TU-06

Função Alvo: calcularTotalFinal()

Entrada (Parâmetros): subtotal = 100.00, taxaEntrega = 8.00, cupom = "DESCONTO10"

Resultado Esperado: Retornar 108.00 (O cupom não deve aplicar desconto algum, somando apenas subtotal + frete)

7. Teste de Cálculo com Cupom em Branco (String Vazia)
ID: TU-07

Função Alvo: calcularTotalFinal()

Entrada (Parâmetros): subtotal = 50.00, taxaEntrega = 8.00, cupom = ""

Resultado Esperado: Retornar 58.00

8. Teste de Aplicação de Cupom com Sensibilidade a Caixa (Case Sensitivity)
ID: TU-08

Função Alvo: calcularTotalFinal()

Entrada (Parâmetros): subtotal = 100.00, taxaEntrega = 8.00, cupom = "senac20" (em minúsculo)

Resultado Esperado: Retornar 86.40 (Caso a função utilize .toUpperCase() na captura, ela deve aceitar o cupom independentemente de maiúsculas/minúsculas)

9. Teste de Limite de Custo com Subtotal Elevado e Cupom
ID: TU-09

Função Alvo: calcularTotalFinal()

Entrada (Parâmetros): subtotal = 350.00, taxaEntrega = 8.00, cupom = "SENAC20"

Resultado Esperado: Retornar 286.40 ([350 + 8] = 358; 358 * 0.80 = 286.40)

10. Teste de Validação de Tipos de Dados Numéricos
ID: TU-10

Função Alvo: calcularSubtotal()

Entrada (Parâmetros): q1 = "2" (string numérica), preco1 = 35.00, q2 = 0, preco2 = 18.00, q3 = 0, preco3 = 7.00

Resultado Esperado: Retornar 70.00 (O operador aritmético ou conversão interna deve processar a string corretamente sem gerar NaN)