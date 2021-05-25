import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './app.scss';
import Home from 'pages/home';
import Profile from 'pages/profile';
import Detail from 'pages/detail';
import MainTemplate from 'templates/MainTemplate';
import Header from 'organisms/Header';
import Logo from 'atoms/Logo';
import Navigation from './molecules/Navigation';
import SiteTitle from './atoms/SiteTitle';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      avatarImage: '',
      bio: '',
      email: '',
      features: [],
      phone: '',
      firstName: '',
      lastName: '',
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
          avatarImage: result.profile.avatarImage,
          bio: result.profile.bio,
          email: result.profile.email,
          features: result.data.features,
          phone: result.profile.phone,
          metadataTitle: result.data.metadata.title,
          firstName: result.profile.firstName,
          lastName: result.profile.lastName,
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
            <Route path="/detail" component={ Detail }/>
            <Route path="/profile">
              <Profile
                avatarImage={ this.state.avatarImage }
                firstName={ this.state.firstName }
                lastName={ this.state.lastName }
                phone={ this.state.phone }
                email={ this.state.email }
                bio={ this.state.bio }
              />
            </Route>
            <Route path="/">
              <Home features={ this.state.features } title={ this.state.metadataTitle }/>
            </Route>
          </Switch>
        </MainTemplate>
      </Router>
    );
  }

};

export default App;