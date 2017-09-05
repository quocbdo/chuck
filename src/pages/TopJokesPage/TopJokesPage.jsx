import React, { Component } from 'react';
import './TopJokesPage.css';
import topjokesAPI from '../../utils/topjokesAPI';
import JokesTable from '../../components/JokesTable/JokesTable';

class TopJokesPage extends Component {
  constructor() {
    super();
    this.state = {
      jokes: []
    }
  }
  
  componentDidMount() {
    topjokesAPI.index().then(jokes =>
      this.setState({jokes})
    );
  }

  render() {
    return (
      <div className='TopJokesPage'>
        <header className='header-footer'>Top Jokes</header>
        <a href='/' className='return-link'>RETURN</a><br />
        <JokesTable jokes={this.state.jokes} />
      </div>
    );
  }
}

export default TopJokesPage;