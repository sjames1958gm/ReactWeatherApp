var React = require("react");

var WeatherInfo = ({className, temperature, location}) => {
  return (
    <div>
      {(location.length > 0) ?
        <h1 className={className}>The temperature in {location} is {temperature}</h1> : ""}
    </div>      
  )
}

module.exports = WeatherInfo;