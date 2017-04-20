import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { starshipsActions } from '../../actions/starshipsActions';
import spaceship from '../../assets/spaceship.png';
import profilePicture from '../../assets/profile-picture.jpg';

import ProfileView from '../ProfileView';
class Profile extends Component {

    componentWillMount() {
        const { id } = this.props.match.params;
        this.props.getStarshipsData(id);
    }

    findPersonById(people, idNumber) {
        return people.filter(person =>
          person.url === `http://swapi.co/api/people/${idNumber}/`
        );
    }

    render() {
        const { id } = this.props.match.params;
        const { people } = this.props.people.data;
        const person = this.findPersonById(people, id)[0];
        const starships = this.props.starships;
        const successfulLoad = starships.status === 'SUCCESS';

        return (
            <ProfileView
              person={person}
              successfulLoad={successfulLoad}
              starships={starships}
              spaceship={spaceship}
              profilePicture={profilePicture}
            />
        );
    }
  }

const mapStateToProps = state => {
    const { starships, people } = state;
    return { starships, people };
};

const mapDispatchToProps = dispatch => {
    return {
        getStarshipsData: starships => {
            dispatch(starshipsActions.getStarshipsData(starships));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
