import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { peopleActions } from '../../actions/peopleActions';
import Person from '../Person';

class Home extends Component {

    componentWillMount() {
        this.props.getPeopleData();
    }

    successfulPeopleLoad() {
        return (this.props.people.status === 'SUCCESS');
    }

    renderLoadingMessage() {
        if (!this.successfulPeopleLoad()) {
            return <h1 id="loading-screen">{ 'Loading' }</h1>;
        }
        return null;
    }

    renderTable() {
        if (this.successfulPeopleLoad()) {
            return (
                <table id="people-data-table">
                    <tbody>
                        <tr>
                            <th className="person-data-header">Name</th>
                            <th className="person-data-header">Age</th>
                            <th className="person-data-header">Year Born</th>
                        </tr>
                        { this.renderPeople() }
                    </tbody>
                </table>
            );
        }
        return null;
    }

    renderPeople() {
        if (this.successfulPeopleLoad()) {
            const { people } = this.props.people.data;
            return (
                people.map((person, id) => {
                    return (
                        <Person
                          key={id}
                          name={person.name}
                          gender={person.gender}
                          birth_year={person.birth_year}
                        />
                    );
                })
            );
        }
        return null;
    }

    render() {
        return (
            <div>
                {this.renderLoadingMessage()}
                {this.renderTable()}
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
