let saldo = 100;

let opcao;

do {
  let menu =
    "Bem-vindo ao Simulador de Caixa Eletrônico\n" +
    "1. Ver Saldo\n" +
    "2. Depositar\n" +
    "3. Sacar\n" +
    "4. Sair";
  opcao = parseInt(prompt(menu), 10);

  if (opcao === 1) {
    alert(`Seu saldo atual é: R$${saldo}`);
  } else if (opcao === 2) {
    let valorDeposito = parseFloat(prompt("Digite o valor para depositar: "));
    if (valorDeposito > 0) {
      saldo += valorDeposito;
      alert(`Você depositou R$${valorDeposito}. Seu novo saldo é: R$${saldo}`);
    } else {
      alert("Valor de depósito inválido.");
    }
  } else if (opcao === 3) {
    let valorSaque = parseFloat(prompt("Digite o valor para sacar: "));
    if (valorSaque > 0 && valorSaque <= saldo) {
      saldo -= valorSaque;
      alert(`Você sacou R$${valorSaque}. Seu novo saldo é: R$${saldo}`);
    } else if (valorSaque > saldo) {
      alert("Saldo insuficiente para este saque.");
    } else {
      alert("Valor de saque inválido.");
    }
  } else if (opcao === 4) {
    alert("Obrigado por usar o Simulador de Caixa Eletrônico. Até mais!");
  } else {
    alert("Opção inválida. Por favor, escolha uma opção válida.");
  }
} while (opcao !== 4);
