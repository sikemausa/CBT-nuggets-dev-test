import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Person extends Component {

    userRoute(userId) {
        return `/${userId}`;
    }

    render() {
        const userId = this.userRoute(this.props.id);
        return (
            <tr key={this.props.id}>
                <Link className="link" to={userId}>
                    <td className="person-name person-data">
                        { this.props.name }
                    </td>
                </Link>
                <td className="person-gender person-data">
                    { this.props.gender }
                </td>
                <td className="person-birth-year person-data">
                    { this.props.birth_year }
                </td>
            </tr>
        );
    }
}

export default Person;
