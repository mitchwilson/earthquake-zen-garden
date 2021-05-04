import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './app.css';
import Home from 'pages/home';
import Profile from 'pages/profile';
import MainTemplate from 'templates/MainTemplate';
import Header from 'organisms/Header';
import Logo from 'atoms/Logo';
import Navigation from './molecules/Navigation';
import SiteTitle from './atoms/SiteTitle';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      logo: '',
      dataTitle: '',
      title: ''
    }
  }

  componentDidMount() {
    fetch('/getData')
      .then(res => res.json())
      .then(result => {
        this.setState({
          metadataTitle: result.data.metadata.title,
          firstName: result.profile.firstName,
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
            <Link to="/">
              <Logo image={ this.state.logo }/>
            </Link>
            <SiteTitle title={ this.state.title }/>
            <Navigation>
              <Link to="/profile">{ `Welcome ${this.state.firstName}` }</Link>
            </Navigation>
          </Header>
          <Switch>
            <Route path="/profile">
              <Profile/>
            </Route>
          <Route path="/">
              <Home title={ this.state.metadataTitle }/>
            </Route>
          </Switch>
        </MainTemplate>
      </Router>
    );
  }

};

export default App;