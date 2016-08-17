var axios = require("axios");

const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?' +
    '&appid=7e8ed0d293b2253f6f723a08d82395bd&units=imperial&q=';

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestURL = BASE_URL + encodedLocation;

    return axios.get(requestURL)
    .then(function(res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      }
      else {
        return res.data.main.temp;
      }
    }, function(res) {
      throw new Error(res.data.message);
    });
  }
};
