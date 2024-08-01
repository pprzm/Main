function calcular() {
  // Captura dos valores de entrada
  let nomeObra = document.getElementById("nomeObra").value;
  let nomeProprietario = document.getElementById("nomeProprietario").value;
  let item = document.getElementById("item").value;
  let sugestaoAdicional = parseFloat(document.getElementById("sugestaoAdicional").value);
  let aplicarAdicional = document.getElementById("aplicarAdicional").checked;
  let percentualAplicado = parseFloat(document.getElementById("percentualAplicado").value);

  // Lógica de cálculo (ajustar conforme as fórmulas da planilha)
  let custoTotal = sugestaoAdicional * (aplicarAdicional ? percentualAplicado : 1);

  // Exibição do resultado
  document.getElementById("resultado").innerText = `Custo Total Estimado: R$ ${custoTotal.toFixed(2)}`;
}
