import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';
import HomePage from '../HomePage/HomePage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import TopJokesPage from '../TopJokesPage/TopJokesPage';
import userService from '../../utils/userService';

class App extends Component {
  constructor(props) {
    super(props);
    
  
  }
  
  /*---------- Helper Methods ----------*/

  getInitialState() {
    return {

    };
  }


  /*---------- Callback Methods ----------*/

  handleNewJokeClick = () => {
    this.setState(this.getInitialState());
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }
  
  handleLogin = () => {
    this.setState({user: userService.getUser()});
  }

  /*---------- Lifecycle Methods ----------*/

  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});
  }

  render() {
    return (
      <div>
        <header className='header-footer'>C H U C K &nbsp;&nbsp; F A C T S</header>
        <Router>
          <Switch>
            <Route exact path='/' render={() =>
              <HomePage
              />
            }/>
            <Route exact path='/signup' render={(props) =>
              <SignupPage
                {...props}
                handleSignup={this.handleSignup}
              />
            }/>
            <Route exact path='/login' render={(props) => 
              <LoginPage
                {...props}
                handleLogin={this.handleLogin}
              />
            }/>
            <Route exact path='/topjokes' render={() => (
              userService.getUser() ?
                <TopJokesPage />
                  :
                <Redirect to='/login' />
            )}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
