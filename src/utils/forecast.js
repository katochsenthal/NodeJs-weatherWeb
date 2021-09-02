const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=fe34010a8012d330f495e5ae65bc09da&query=${latitude},${longitude}3&units=f`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      const weatherDescription = body.current.weather_descriptions[0];
      const currentTemperature = body.current.temperature;
      const feelsLike = body.current.feelslike;
      callback(
        undefined,
        `${weatherDescription}, it is currently ${currentTemperature} degrees and it feels like ${feelsLike} degrees`
      );
    }
  });
};

module.exports = forecast;
