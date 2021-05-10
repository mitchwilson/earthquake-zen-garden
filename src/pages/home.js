import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Features from '../organisms/features';

const Home = (props) => {
  const { features } = props;
  const [sortColumn, setSortColumn] = useState({});
  let sortedTable = [ ... features];
  const updateSort = (name) => {
    let direction = 'ascending';
    if (sortColumn.name === name && sortColumn.direction === 'ascending') {
      direction = 'descending';
    }
    setSortColumn({ name, direction });
  }

  if(sortColumn !== null) {
    sortedTable.sort( (a, b) => {
      if(a.properties[sortColumn.name] > b.properties[sortColumn.name]) {
        return sortColumn.direction === 'ascending' ? 1 : -1;
      }
      if(a.properties[sortColumn.name] < b.properties[sortColumn.name]) {
        return sortColumn.direction === 'ascending' ? -1 : 1;
      }
      return 0;
    });
  }

  return (
    <div>
      <h2>{ props.title }</h2>
      <Features>
        <thead>
          <tr>
            <th onClick={ () => updateSort('title') }>Title</th>
            <th onClick={ () => updateSort('mag') }>Magnitude</th>
            <th onClick={ () => updateSort('time') }>Time</th>
          </tr>
        </thead>
        <tbody>
        {
          sortedTable.map((feature, i)=>{
            const options = {
              month:'short',
              day: '2-digit',
              year: 'numeric',
              hour: 'numeric',
              minute: 'numeric'

            };
            const dateTime = new Date(feature.properties.time).toLocaleDateString('en-US', options);
            const linkObj = {
              pathname: "/detail",
              state: {
                magnitude: feature.properties.mag,
                status: feature.properties.status,
                time: dateTime,
                title: feature.properties.title,
                tsunami: feature.properties.tsunami,
                type: feature.properties.type
              }
            }
            return (
              <tr key={ i }>
                <td><Link to={ linkObj }>{ feature.properties.place }</Link></td>
                <td className="magnitude">{ feature.properties.mag }</td>
                <td>{ dateTime }</td>
              </tr>
            )

          })
        }
        </tbody>
      </Features>
    </div>
  )
}

Home.propTypes = {
  title: PropTypes.string
}

export default Home;