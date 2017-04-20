import React, { Component } from 'react';
import { connect } from 'react-redux';
import { peopleActions } from '../../actions/peopleActions';
import Person from '../Person';
import Search from '../Search';
import LoadingScreen from '../LoadingScreen';
import PeopleTable from '../PeopleTable';
import loadingIcon from '../../assets/loading-icon.png';

class Home extends Component {
    constructor(props){
        super();
        this.state = {
            searchterm: '',
        }
    }

    componentWillMount() {
        if (this.props.people.status === 'SUCCESS') return;
        this.props.getPeopleData();
    }

    getPersonId(url) {
        const id = url.split('/');
        return id.splice(5, 1);
    }

    render() {
        const { people } = this.props.people.data;
        const { search } = this.props;
        const successfulLoad = this.props.people.status === 'SUCCESS';
        const searchInProgress = search.status === 'IN_PROGRESS';
        let list = searchInProgress ? search.data.filteredPeople : people;

        return (
            <div>
                <Search />
                <div>
                    { successfulLoad
                        ? <PeopleTable people={list} getPersonId={this.getPersonId} />
                        : <LoadingScreen picture={loadingIcon} />
                    }
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
