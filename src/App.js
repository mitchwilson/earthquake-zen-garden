import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from 'pages/home';
import Profile from 'pages/profile';
import MainTemplate from 'templates/MainTemplate';
import Header from 'organisms/Header';
import Logo from 'atoms/Logo';
import Navigation from './molecules/Navigation';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      logo: '',
      title: ''
    }
  }

  componentDidMount() {
    fetch('/getData')
      .then(res => res.json())
      .then(result => {
        this.setState({
          logo: result.site.logoImage,
          title: result.site.title
        })
      })
  }

  render() {
    return (
      <Router>
        <MainTemplate>
          <Header>
            <Logo image={ this.state.logo }/>
            <Navigation>
              <Link to="/">Home</Link>&nbsp;
              <Link to="/profile">Profile</Link>
            </Navigation>
          </Header>
          <Switch>
            <Route path="/profile">
              <Profile/>
            </Route>
          <Route path="/">
              <Home title={ this.state.title } />
            </Route>
          </Switch>
        </MainTemplate>
      </Router>
    );
  }

};

export default App;