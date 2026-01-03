function saldoVitorias(vitorias,derrotas){
 let resultado = vitorias - derrotas
 if (resultado < 10) {
    return console.log(`O Herói tem de saldo de ${resultado} está no nível de Ferro`);
  } else if (resultado <= 11 && resultado <= 20) {
    return console.log(`O Herói tem de saldo de ${resultado} está no nível de Bronze`);
  } else if (resultado <= 21 && resultado <= 50) {
    return console.log(`O Herói tem de saldo de ${resultado} está no nível de Prata`);
  } else if (resultado <= 51 && resultado <= 80) {
    return console.log(`O Herói tem de saldo de ${resultado} está no nível de Ouro`);
  } else if (resultado <= 81 && resultado <= 90) {
    return console.log(`O Herói tem de saldo de ${resultado} está no nível de Diamante`);
  } else if (resultado <= 91 && resultado <= 100) {
    return console.log(`O Herói tem de saldo de ${resultado} está no nível de Lendário`);
  }else {
    return console.log(`O Herói tem de saldo de ${resultado} está no nível de Imortal`);
  }
}

saldoVitorias(950,10)