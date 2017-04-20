import React from 'react';
import Person from './Person';

const PeopleTableRows = ({ people, getPersonId }) => {
    return (
        <tbody>
            { people.map(person =>
                <Person
                  key={getPersonId(person.url)}
                  id={getPersonId(person.url)}
                  people={people}
                  name={person.name}
                  gender={person.gender}
                  birth_year={person.birth_year}
                />) }
        </tbody>
    );
};

const PeopleTableHeader = () =>
    <thead>
        <tr>
            { [ 'Name', 'Gender', 'Year Born' ].map(header =>
                <th className="person-data-header name-header">{header}</th>
            ) }
        </tr>
    </thead>;

const PeopleTable = ({ people, getPersonId }) =>
    <table>
        <PeopleTableHeader />
        <PeopleTableRows people={people} getPersonId={getPersonId} />
    </table>;

export default PeopleTable;
