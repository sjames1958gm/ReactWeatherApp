var React = require("react");

var WeatherInfo = ({temperature, location}) => {
  return (
    <div>
      {(location.length > 0) ?
        <h1>The temperature in {location} is {temperature}</h1> : ""}
    </div>      
  )
}

module.exports = WeatherInfo;