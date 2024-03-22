let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]

function rankin(vitorias, derrotas) {
  let soma = vitorias - derrotas;
  return soma
}

let resultado = rankin(100, 25);

if (resultado < 10) {
  console.log("O Herói tem de saldo de " + resultado + " vitórias e está no nível " + nivel[0]);
} else if (resultado >= 11 && resultado <= 20) {
  console.log("O Herói tem de saldo de " + resultado + " vitórias e está no nível " + nivel[1]);
} else if (resultado >= 21 && resultado <= 50) {
  console.log("O Herói tem de saldo de " + resultado + " vitórias e está no nível " + nivel[2]);
} else if (resultado >= 51 && resultado <= 80) {
  console.log("O Herói tem de saldo de " + resultado + " vitórias e está no nível " + nivel[3]);
} else if (resultado >= 81 && resultado <= 90) {
  console.log("O Herói tem de saldo de " + resultado + " vitórias e está no nível " + nivel[4]);
} else if (resultado >= 91 && resultado <= 100) {
  console.log("O Herói tem de saldo de " + resultado + " vitórias e está no nível " + nivel[5]);
} else if (resultado >= 101) {
  console.log("O Herói tem de saldo de " + resultado + " vitórias e está no nível " + nivel[6]);
}
