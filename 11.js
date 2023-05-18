function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  // Test the celsiusToFahrenheit function
  const celsiusTemperature = 25;
  const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
  console.log('Fahrenheit Temperature:', fahrenheitTemperature);
  