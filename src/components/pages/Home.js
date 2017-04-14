import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {

  getPeopleData() {
    axios.get('http://swapi.co/api/people')
    .then(response => console.log(response));
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

export default Home;
