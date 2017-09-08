import React from 'react';
import './JokeArea.css';
import tokenService from '../../utils/tokenService';

class JokeArea extends React.Component {
  constructor() {
    super()
    this.state = {
      currentJoke: {
        category: null,
        value: "Press New Joke to Begin",
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
          category: data.category,
          value: data.value,
          id: data.id
        }
      })
    })
  }

  saveJoke = () => {
    const options = {
      method: 'post',
      headers: new Headers({
        'Authorization': 'Bearer ' + tokenService.getToken(),
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(this.state.currentJoke),
    }
    fetch(`/api/savedjokes`, options)
    .then(res => res.json()).then(joke => {
      console.log(joke);
      this.props.history.push('/savedjokes');
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col sm8">
            <div className="card"
                 //style={{margin: 10}}
            >
              <div className="card-block">
                <p className="card-text">{this.state.currentJoke.value}</p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="btn btn-newjoke"
          style={{margin: 10}}
          onClick={this.getRandomJoke}
        >
          New Joke
        </button>
        <button
          className="btn btn-savejoke"
          style={{margin: 10}}
          onClick={this.saveJoke}
        >
          Save Joke
        </button>
      </div>
    );
  }
}

export default JokeArea;