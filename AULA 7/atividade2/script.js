const contarVogais = (str) => {
  const vogais = "aeiouAEIOU";
  let contagem = 0;
  for (let char of str) {
    if (vogais.includes(char)) {
      contagem++;
    }
  }
  return contagem;
};

const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
console.log(contarVogais(alfabeto));
