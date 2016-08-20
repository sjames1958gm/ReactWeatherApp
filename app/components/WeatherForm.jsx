var React = require("react");

var WeatherForm = React.createClass({

  onFormSubmit: function (e) {
    e.preventDefault();
    var loc = this.refs.location.value;
    if (this.props.onSearch && loc.length > 0) {
        this.props.onSearch(loc);
    }

    this.refs.location.value = "";
  },
  
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="location" placeholder="Enter City Name"/>
        <button className="button" >Get Weather</button>
        </form>
      </div>      
    )
  }
});

module.exports = WeatherForm;