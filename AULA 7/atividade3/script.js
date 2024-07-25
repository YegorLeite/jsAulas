const celsiusParaFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

const converterTemperatura = (celsius, callback) => {
  return callback(celsius);
};

const temperaturaCelsius = 25;
const temperaturaFahrenheit = converterTemperatura(
  temperaturaCelsius,
  celsiusParaFahrenheit
);

console.log(`Temperatura em Fahrenheit: ${temperaturaFahrenheit}`);
