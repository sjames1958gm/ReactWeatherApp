var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherInfo = require("WeatherInfo");
var ErrorModal = require("ErrorModal");
var openWeatherMap = require("openWeatherMap");

var Weather = React.createClass({
  getInitialState: function() {
    return {location: "",
            isLoading: false,
            errorMessage: undefined};
  },
  
  handleSearch: function(location) {
    this.setState({isLoading: true, errorMessage: undefined});

    openWeatherMap.getTemp(location)
    .then(({city, temp}) => {
      this.setState({location: city, temperature: temp, isLoading: false});
    }, (e) => {
      this.setState({isLoading: false,
        errorMessage: e.message});
    });

  },

  render: function() {
    var {temperature, location, isLoading, errorMessage} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Is Loading ...</h3>;
      } if (temperature && location) {
        return <WeatherInfo  className="text-center" location={location} temperature={temperature} />;
      }
    }

    function renderError() {
      if (errorMessage) {
        return <ErrorModal title="Lookup Error" message={errorMessage}/>;
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>      
    )
  }
});

module.exports = Weather;