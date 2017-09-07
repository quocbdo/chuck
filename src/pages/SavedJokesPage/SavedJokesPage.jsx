import React, { Component } from 'react';
import './SavedJokesPage.css';
import savedjokesAPI from '../../utils/savedjokesAPI';
import JokesTable from '../../components/JokesTable/JokesTable';

class SavedJokesPage extends Component {
  constructor() {
    super();
    this.state = {
      jokes: []
    }
  }
  
  componentDidMount() {
    savedjokesAPI.index().then(jokes =>
      this.setState({jokes})
    ); console.log(this.state.jokes)
  }

  render() {
    return (
      <div className='SavedJokesPage'>
        <header className='header-footer'>Saved Jokes</header>
        <a href='/' className='return-link'>RETURN</a><br />
        <JokesTable jokes={this.state.jokes} />
      </div>
    );
  }
}

export default SavedJokesPage;