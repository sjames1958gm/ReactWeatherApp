var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherInfo = require("WeatherInfo");
var openWeatherMap = require("openWeatherMap")

var Weather = React.createClass({
  getInitialState: function() {
    return {location: "",
            isLoading: false};
  },
  
  handleSearch: function(location) {
    this.setState({isLoading: true});

    openWeatherMap.getTemp(location)
    .then((temperature) => {
      this.setState({location, temperature, isLoading: false});
    }, function(errorMessage) {
      alert(errorMessage);
      this.setState({isLoading: false});
    });

  },

  render: function() {
    var {temperature, location, isLoading} = this.state
    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Is Loading ...</h3>;
      } if (temperature && location) {
        return <WeatherInfo  className="text-center" location={location} temperature={temperature} />;
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>      
    )
  }
});

module.exports = Weather;