import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { starshipsActions } from '../../actions/starshipsActions';
import spaceship from '../../assets/spaceship.png';
import profilePicture from '../../assets/profile-picture.jpg';

class Profile extends Component {

    componentWillMount() {
        const { id } = this.props.match.params;
        this.props.getStarshipsData(id);
    }

    successfulLoad(itemStatus) {
        return (itemStatus === 'SUCCESS');
    }

    findPersonById(people, idNumber) {
        return people.filter(person => {
            return person.url === `http://swapi.co/api/people/${idNumber}/`;
        });
    }

    renderLoadingMessage() {
        if (!this.successfulLoad(this.props.starships.status)) {
            return <p id="loading-text">{ 'Loading' }</p>;
        }
        return null;
    }

    renderTable() {
        if (this.successfulLoad(this.props.starships.status)) {
            return (
                <table id="starship-data-table">
                    <tbody>
                        <tr>
                            <th className="starship-data-header">Name</th>
                            <th className="starship-data-header">Model</th>
                            <th className="starship-data-header">Length</th>
                            <th className="starship-data-header">Cost in Credits</th>
                            <th className="starship-data-header">Crew</th>
                            <th className="starship-data-header">Hyperdrive Rating</th>
                        </tr>
                        { this.renderStarships() }
                    </tbody>
                </table>
            );
        }
        return null;
    }

    renderStarships() {
        if (this.successfulLoad(this.props.starships.status)) {
            const { starships } = this.props.starships.data;
                return (
                    starships.map((starship, index) => {
                        return (
                            <tr key={index} className="starship-container">
                                <td className="starship-data">{starship.name}</td>
                                <td className="starship-data">{starship.model}</td>
                                <td className="starship-data">{starship.length}</td>
                                <td className="starship-data">{starship.cost_in_credits}</td>
                                <td className="starship-data">{starship.crew}</td>
                                <td className="starship-data">{starship.hyperdrive_rating}</td>
                            </tr>
                        );
                    })
                );
        }
        return;
    }

    render() {
        const { id } = this.props.match.params;
        const { people } = this.props.people.data;
        const person = this.findPersonById(people, id)[0];

        return (
            <div id="profile-page">
                <div id="profile-attributes-container">
                    <div id="profile-picture-name">
                        <p className="profile-attribute">{ person.name } </p>
                        <img id="profile-picture" role="presentation" src={profilePicture} />
                    </div>
                    <div id="profile-row-1">
                        <p className="profile-attribute"> Hgt: { person.height } </p>
                        <p className="profile-attribute"> Mass: { person.mass } </p>
                        <p className="profile-attribute"> Hair: { person.hair_color } </p>
                    </div>
                    <div id="profile-row-2">
                        <p className="profile-attribute"> Eyes: { person.eye_color } </p>
                        <p className="profile-attribute"> Born: { person.birth_year } </p>
                        <p className="profile-attribute"> Gen: { person.gender } </p>
                    </div>
                </div>
                <div id="starships-info">
                    <img id="starships-title" role="presentation" src={spaceship} />
                    <div id="starships-table">
                    { this.renderTable() }
                    { this.renderLoadingMessage() }
                    </div>
                </div>
            </div>
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
