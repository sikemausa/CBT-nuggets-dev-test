import React from 'react';
import StarshipTable from './StarshipTable';

const ProfileView = ({ person, profilePicture, spaceship, starships, successfulLoad }) =>
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
            {
              successfulLoad
              ? <StarshipTable starships={starships} />
              : <h1>Loading</h1>
            }
            </div>
        </div>
    </div>;

export default ProfileView;
