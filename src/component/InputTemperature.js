function InputTemperature({ temperature, scale, handleTempChange }) {
  const scales = { c: "Celsius", f: "Farenheit" };

  const currentScale = scales[scale];
  return (
    <fieldset>
      <legend>Enter temperature in {currentScale}</legend>
      <input
        type="text"
        value={temperature}
        onChange={(e) => handleTempChange(e, scale)}
      />
    </fieldset>
  );
}

export default InputTemperature;
