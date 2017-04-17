import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { peopleActions } from '../../actions/peopleActions';

class Home extends Component {

  componentWillMount() {
    this.props.getPeopleData();
  }

  renderLoadingMessage() {
    if (this.props.people.status === 'LOADING') {
      return (
        <h1 id="loading">{ 'Loading' }</h1>
      );
    }
    return null;
  }

  renderPeople() {
    if (this.props.people.status === 'SUCCESS') {
      const { people } = this.props.people.data;
      return (
        people.map((person, id) => {
          return (
            <h1 className="persons-name" key={id}>
              { person.name }
            </h1>
          );
        })
      );
    }
    return null;
  }

  render() {
    return (
      <div>
        <div className="innermax padding-20">
          <div className="row">
            <div className="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 padding-top-20">
                { this.renderPeople() }
                { this.renderLoadingMessage() }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { people } = state;
  return { people };
};

const mapDispatchToProps = dispatch => {
  return {
    getPeopleData: people => {
      dispatch(peopleActions.getPeopleData(people));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
