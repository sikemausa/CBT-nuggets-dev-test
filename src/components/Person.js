import React, { Component } from 'react';

class Person extends Component {
    render() {
        return (
            <tr key={this.props.id}>
                <td className="persons-name person-data">
                    { this.props.name }
                </td>
                <td className="persons-gender person-data">
                    { this.props.gender }
                </td>
                <td className="persons-birth-year person-data">
                    { this.props.birth_year }
                </td>
            </tr>
        );
    }
}

export default Person;
