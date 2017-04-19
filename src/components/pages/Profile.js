import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { starshipsActions } from '../../actions/starshipsActions';

class Profile extends Component {

    componentWillMount() {
        const { id } = this.props.match.params;
        this.props.getStarshipsData(id);
    }

    successfulStarshipsLoad() {
        return (this.props.starships.status === 'SUCCESS');
    }

    findPersonById(people, idNumber) {
        return people.filter(person => {
            return person.url === `http://swapi.co/api/people/${idNumber}/`;
        });
    }

    renderLoadingMessage() {
        if (!this.successfulStarshipsLoad()) {
            return <p id="loading-text">{ 'Loading' }</p>;
        }
        return null;
    }

    renderTable() {
        if (this.successfulStarshipsLoad()) {
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
        if (this.successfulStarshipsLoad()) {
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
        return null;
    }

    render() {
        const { id } = this.props.match.params;
        const { people } = this.props.people.data;
        const person = this.findPersonById(people, id);

        return (
            <div>
                <h1> Name: { person[0].name } </h1>
                <h1> Height: { person[0].height } </h1>
                <h1> Mass: { person[0].mass } </h1>
                <h1> Hair Color: { person[0].hair_color } </h1>
                <h1> Eye Color: { person[0].eye_color } </h1>
                <h1> Birth Year: { person[0].birth_year } </h1>
                <h1> Gender: { person[0].gender } </h1>
                <div> Starships:
                  { this.renderTable() }
                  { this.renderLoadingMessage() }
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
