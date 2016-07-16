import React, { PropTypes, Component } from 'react';

const propTypes = {

};

class SearchBar extends Component {
  render() {
    return (
      <form className="form-inline">
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-addon">
              <span className="glyphicon glyphicon-search"></span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Search for a city"/>
          </div>
        </div>
        <button className="btn btn-primary">Search</button>
      </form>
    );
  }
}
SearchBar.PropTypes = PropTypes;

export default SearchBar;
