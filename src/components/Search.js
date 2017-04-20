import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchActions } from '../actions/searchActions';

class Search extends Component {

    render() {
        const { filterPeople } = this.props;
        const { searchTerm } = this.props.search.data;
        return (
            <input
              className="form-control"
              placeholder="Search"
              onChange={e => filterPeople(e.target.value)}
              value={searchTerm || ''}
            />
        );
    }
}

const mapStateToProps = state => {
    const { search } = state;
    return { search };
};

const mapDispatchToProps = dispatch => {
    return {
        filterPeople: searchTerm => {
            dispatch(searchActions.filterPeople(searchTerm));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
