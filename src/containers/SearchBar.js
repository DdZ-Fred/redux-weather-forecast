import React, { PropTypes, Component } from 'react';

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
  }

  onInputChange(e) {
    this.setState({
      term: e.target.value,
    });
  }

  onFormSubmit(e) {
    e.preventDefault();
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

export default SearchBar;
