import React, { Component } from 'react';
import './TopJokesPage.css';

class TopJokesPage extends Component {
  constructor() {
    super();    
  }
  
  render() {
    return (
      <div className='TopJokesPage'>
        <header className='header-footer'>Top Jokes</header>
        <a href='/'>RETURN</a><br />
      </div>
    );
  }
}

export default TopJokesPage;