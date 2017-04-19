import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Person extends Component {

    userRoute(userId) {
        return `/${userId}`;
    }

    render() {
        return (
            <tr key={this.props.id}>
                <td className="persons-name person-data">
                    <Link to={this.userRoute(this.props.id)}>
                        { this.props.name }
                    </Link>
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
