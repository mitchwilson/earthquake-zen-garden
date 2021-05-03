import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from 'pages/home';
import Profile from 'pages/profile';

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
      <Router>
        <Link to="/home">Home</Link>&nbsp;
        <Link to="/profile">Profile</Link>
        <Switch>
          <Route path="/home">
            <Home title={this.state.title} />
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
        </Switch>
      </Router>
    );
  }

};

export default App;