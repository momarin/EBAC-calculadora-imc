// DOM
const classification = [
  { limite: 18.5, nome: "Abaixo do peso" },
  { limite: 24.9, nome: "Peso normal" },
  { limite: 29.9, nome: "Sobrepeso" },
  { limite: 34.9, nome: "Obesidade grau I" },
  { limite: 39.9, nome: "Obesidade grau II" },
  { limite: Infinity, nome: "Obesidade grau III" },
];

function calcularIMC() {
  //Entrada
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  // Processamento
  const IMC = weight / (height * height);

  // Saída
  document.getElementById("resultado").textContent = `Seu IMC é: ${IMC}`;

  classificacaoIMC(IMC);

  let classificacao = classificacaoIMC(IMC);
  document.getElementById("classificacao").textContent = classificacao;
}

function classificacaoIMC(imc) {
  // console.log(classification);
  if (imc <= classification[0].limite) return classification[0].nome;
  else if (imc <= classification[1].limite) return classification[1].nome;
  else if (imc <= classification[2].limite) return classification[2].nome;
  else if (imc <= classification[3].limite) return classification[3].nome;
  else if (imc <= classification[4].limite) return classification[4].nome;
  else return classification[5].nome;
}
