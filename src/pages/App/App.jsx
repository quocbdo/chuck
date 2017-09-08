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
import SavedJokesPage from '../SavedJokesPage/SavedJokesPage';
import NavBar from '../../components/NavBar/NavBar';
import userService from '../../utils/userService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }
  
  /*---------- Helper Methods ----------*/

  

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
        <header className='App-header'>M O R E &nbsp;&nbsp; B A N G &nbsp;&nbsp; F O R &nbsp;&nbsp; Y O U R &nbsp;&nbsp; C H U C K</header>
        <Router>
          <div>
            <NavBar
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
            <Switch>
              <Route exact path='/' render={(props) =>
                <HomePage user={this.state.user}
                          handleLogout={this.handleLogout}
                          history={props.history}
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
              <Route exact path='/savedjokes' render={() => (
                userService.getUser() ?
                  <SavedJokesPage />
                    :
                  <Redirect to='/login' />
              )}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;