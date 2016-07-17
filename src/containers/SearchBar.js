import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';

const propTypes = {

};

class SearchBar extends Component {

  constructor(props) {
    super(props);

    // Init state
    this.state = {
      term: '',
    };

    // Handlers bindings
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({
      term: e.target.value,
    });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form
        onSubmit={this.onFormSubmit}
        className="form-inline">
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-addon">
              <span className="glyphicon glyphicon-search"></span>
            </div>
            <input
              className="form-control"
              type="text"
              name="city"
              placeholder="Search for a city"
              value={this.state.term}
              onChange={this.onInputChange}/>
          </div>
        </div>
        <button
          role="submit"
          className="btn btn-secondary">Search</button>
      </form>
    );
  }
}
SearchBar.PropTypes = PropTypes;

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  // Turns an object whose values are action creators, into an object with
  // the same keys but with every action creators wrapped into a dispatch
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
