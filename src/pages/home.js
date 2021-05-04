import React, { Component } from 'react';
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
            return (
              <tr key={ i }>
                <td>{ feature.properties.place }</td>
                <td>{ feature.properties.mag }</td>
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