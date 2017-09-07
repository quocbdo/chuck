import React from 'react';
import './JokeArea.css';
import tokenService from '../../utils/tokenService';

class JokeArea extends React.Component {
  constructor() {
    super()
    this.state = {
      currentJoke: {
        category: null,
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
          category: data.category,
          value: data.value,
          id: data.id
        }
      })
    })
  }

  saveJoke = () => {
    console.log("test")
    const options = {
      method: 'post',
      headers: new Headers({
        'Authorization': 'Bearer ' + tokenService.getToken(),
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(this.state.currentJoke),
    }
    fetch(`/api/savedjokes`, options)
    .then(res => {
      console.log(res)
      return res.json()
    }) .then(res => {
      console.log(res)
    })
  }

  render() {
    return (
      <div>
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-block">
                <h3 class="card-title">Category</h3>
                <p class="card-text">{this.state.currentJoke.value}</p>
                  <div>
                    {/* <button
                      className="btn btn-default"
                      style={{margin: 10}}
                    >
                      Save Joke
                    </button> */}
                  </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="container">
          <div class="panel panel-default" style={{margin: 10}}>
            <div class="panel-body">
              {this.state.currentJoke.value}
            </div>
          </div>
        </div> */}
        <button
          className="btn btn-default"
          style={{margin: 10}}
          onClick={this.getRandomJoke}
        >
          New Joke
        </button>
        <button
          className="btn btn-default"
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