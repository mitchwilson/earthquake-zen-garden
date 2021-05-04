import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Features from '../organisms/features';

const Home = (props) => {
  return (
    <div>
      <h2>{ props.title }</h2>
      <Features>
        <thead>
          <tr>
            <th>Title</th>
            <th>Magnitude</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
        {
          props.features.map((feature, i)=>{
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

export default Home;