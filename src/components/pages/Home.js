import React, { Component } from 'react';
import { connect } from 'react-redux';
import { peopleActions } from '../../actions/peopleActions';
import Person from '../Person';
import Search from '../Search';
import loadingIcon from '../../assets/loading-icon.png';

class Home extends Component {

    componentWillMount() {
        if (this.successfulPeopleLoad()) return;
        this.props.getPeopleData();
    }

    getPersonId(url) {
        const id = url.split('/');
        return id.splice(5, 1);
    }

    successfulPeopleLoad() {
        return (this.props.people.status === 'SUCCESS');
    }

    appendPeopleToTable() {
        if (this.successfulPeopleLoad()) {
            const { people } = this.props.people.data;
            const { filteredPeople } = this.props.search.data;
            if (!filteredPeople) return this.renderPeople(people);
            return this.renderPeople(filteredPeople);
        }
        return null;
    }

    renderLoadingMessage() {
        if (!this.successfulPeopleLoad()) {
            return <div id="loading-screen"><img id="loading-image" src={loadingIcon} /></div>;
        }
        return null;
    }

    renderTable() {
        if (this.successfulPeopleLoad()) {
            return (
                <table id="people-data-table">
                    <tbody>
                        <tr className="header-container">
                            <th className="person-data-header name-header">Name</th>
                            <th className="person-data-header gender-header">Gender</th>
                            <th className="person-data-header year-born-header">Year Born</th>
                        </tr>
                        { this.appendPeopleToTable() }
                    </tbody>
                </table>
            );
        }
        return null;
    }

    renderPeople(people) {
        return (
            people.map(person => {
                let id = this.getPersonId(person.url);
                return (
                    <Person
                      key={id}
                      id={id}
                      people={people}
                      name={person.name}
                      gender={person.gender}
                      birth_year={person.birth_year}
                    />
                );
            })
        );
    }

    render() {
        return (
            <div>
                <Search />
                <div>
                {this.renderLoadingMessage()}
                {this.renderTable()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { people, search } = state;
    return { people, search };
};

const mapDispatchToProps = dispatch => {
    return {
        getPeopleData: people => {
            dispatch(peopleActions.getPeopleData(people));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
