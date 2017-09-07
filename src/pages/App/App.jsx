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
import userService from '../../utils/userService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }
  
  /*---------- Helper Methods ----------*/

  // getInitialState() {
  //   return {
    
  //   };
  // }


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
        {/* <nav>
          <div class="nav-wrapper">
            <a href="/" class="brand-logo right">Logo</a>
            <ul id="nav-mobile" class="left hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
            </ul>
          </div>
        </nav> */}
          <header className='App-header'>C H U C K &nbsp;&nbsp; F A C T S</header>
        <Router>
          <Switch>
            <Route exact path='/' render={() =>
              <HomePage user={this.state.user}
                        handleLogout={this.handleLogout}
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
        </Router>
      </div>
    );
  }
}

export default App;