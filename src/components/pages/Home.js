import { connect } from 'react-redux';
import { peopleActions } from '../../actions/peopleActions';
import React, { Component } from 'react';

class Home extends Component {

  componentWillMount() {
    this.props.getPeopleData();
  }

  render() {
    return (
      <div>
        <div className="innermax padding-20">
          <div className="row">
            <div className="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 padding-top-20">
              <p>
                  Welcome to the home page, everyone can see this!
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
  return { people: people };
};

const mapDispatchToProps = dispatch => {

  return {
    getPeopleData: people => {
       dispatch(peopleActions.getPeopleData(people));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
