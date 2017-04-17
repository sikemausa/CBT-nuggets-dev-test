import React, { Component } from 'react';
import { connect } from 'react-redux';
import { peopleActions } from '../../actions/peopleActions';
import { Link } from 'react-router-dom';

class Home extends Component {

  componentWillMount() {
    this.props.getPeopleData();
    console.log(this.props);
  }

  renderLoader() {
      if (this.props.people.status === 'LOADING') {
          return (
            'Loading'
          );
      }
      return null;
  }

  renderSuccess() {
      if (this.props.people.status === 'SUCCESS') {
          return (
            this.props.people.data.people[0].name
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
              <p>
                { this.renderSuccess() }
                { this.renderLoader() }
              </p>
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
