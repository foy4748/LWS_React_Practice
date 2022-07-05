//Scafolding
const storage = {};

storage.toCelsius = (temperature) => {
  let temp = parseFloat(temperature);
  return ((temp - 32) * 5) / 9;
};

storage.toFarenheit = (temperature) => {
  let temp = parseFloat(temperature);
  return (9 * temp) / 5 + 32;
};

storage.convert = (temperature, convFunc) => {
  let temp = parseFloat(temperature);
  let result = convFunc(temp);
  let rounded = Math.round(result * 1000) / 1000;
  return toString(rounded);
};

export default storage;
