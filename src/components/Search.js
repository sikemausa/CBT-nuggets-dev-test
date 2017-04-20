import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchActions } from '../actions/searchActions';

class Search extends Component {

    render() {
        const { filterPeople } = this.props;
        const { searchTerm } = this.props.search.data;
        return (
            <div id="search-container">
                <h1 id="title">Rebellion Database</h1>
                <input
                  id="search-input"
                  placeholder="Search"
                  onChange={e => filterPeople(e.target.value)}
                  value={searchTerm || ''}
                />
            </div>
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
