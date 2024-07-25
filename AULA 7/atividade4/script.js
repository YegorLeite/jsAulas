const calcularCubo = (numero) => {
  return numero ** 3;
};

const processarNumero = (numero, callback) => {
  return callback(numero);
};

const numero = 3;
const cubo = processarNumero(numero, calcularCubo);

console.log(`O cubo de ${numero} é ${cubo}`);

