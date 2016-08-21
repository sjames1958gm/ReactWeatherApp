var React = require("react");

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <h4 className="text-center">A <a href="https://facebook.github.io/react" target="_blank">React</a> based weather application.</h4>
      <p className="text-center">Using <a href="http://openweathermap.org" target="_blank">openweathermap</a> api.</p>
      <p className="text-center">Clone the source at <a href="https://github.com/sjames1958gm/ReactWeatherApp" target="_blank">ReactWeatherApp</a></p>
    </div>);
}

module.exports = About;