import React, { Component } from 'react';
import Home from 'pages/home';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'my title'
    }
  }

  componentDidMount() {
    fetch('/getData')
      .then(res => res.json())
      .then(result => {
        this.setState({
          title: result.site.title 
        })
      })
  }

  render() {
    return (
      <Home title={this.state.title} />
    );
  }

};

export default App;