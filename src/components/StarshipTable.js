import React from 'react';

const StarshipTableHeaders = () =>
    <thead>
        <tr>
          { [
              'Name',
              'Model',
              'Length',
              'Cost in Credits',
              'Crew',
              'Hyperdrive Rating',
          ]
            .map(key => <th key={key} className="starship-data-header">{key}</th>) }
        </tr>
    </thead>;

const StarshipTableRows = ({ starships }) =>
    <tbody>
        {
          starships.map((starship) =>
              <tr className="starship-container">
                { [
                    'name',
                    'model',
                    'length',
                    'cost_in_credits',
                    'crew',
                    'hyperdrive_rating',
                ]
                  .map(attribute => <td className="starship-data">{starship[attribute]}</td>) }
              </tr>)
        }
    </tbody>;

const StarshipTable = ({ starships }) =>
    <table id="starship-data-table">
        <StarshipTableHeaders />
        <StarshipTableRows starships={starships.data.starships} />
    </table>;

export default StarshipTable;
