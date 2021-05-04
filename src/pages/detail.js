import React, { Component } from 'react';
import Properties from '../organisms/properties';

class Detail extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      magnitude: '',
      status: '',
      time: '',
      title: '',
      tsunami: '',
      type: ''
    }
  }

  componentDidMount() {
    const { magnitude, status, time, title, tsunami, type } = this.props.location.state;
    this.setState({
      magnitude: magnitude,
      status: status,
      time: time,
      title: title,
      tsunami: tsunami,
      type: type
    })
  }

  render() {
    return (
      <div>
        <h2>{ this.state.title }</h2>
        <Properties>
          <tbody>
          <tr>
            <td className="label">Title</td>
            <td>{ this.state.title }</td>
          </tr>
          <tr>
            <td className="label">Magnitude</td>
            <td>{ this.state.magnitude }</td>
          </tr>
          <tr>
            <td className="label">Time</td>
            <td>{ this.state.time }</td>
          </tr>
          <tr>
            <td className="label">Status</td>
            <td>{ this.state.status }</td>
          </tr>
          <tr>
            <td className="label">Tsunami</td>
            <td>{ this.state.tsunami }</td>
          </tr>
          <tr>
            <td className="label">Type</td>
            <td>{ this.state.type }</td>
          </tr>
          </tbody>
        </Properties>
      </div>
    )
  }
}

export default Detail;