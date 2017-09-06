import React from 'react';
import './JokeArea.css';

class JokeArea extends React.Component {
  constructor() {
    super()
    this.state = {
      currentJoke: {
        value: null,
        id: null
      }
    }
  }

  getRandomJoke = () => {
    // GET random joke from API
    fetch("https://api.chucknorris.io/jokes/random")
    .then(data => data.json())
    .then(data => {
      this.setState({
        currentJoke: {
          value: data.value,
          id: data.id
        }
      })
    })
  }

  render() {
    return (
      <div>
        <div class="panel panel-default" style={{margin: 10}}>
          <div class="panel-body">
            {this.state.currentJoke.value}
          </div>
        </div>
        <button
          className="btn btn-default"
          style={{margin: 10}}
          onClick={this.getRandomJoke}
        >
          New Joke
        </button>
      </div>
    );
  }
}

export default JokeArea;