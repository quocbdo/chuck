import React from 'react';
import './Categories.css';

class Categories extends React.Component {
  constructor() {
    super()
    this.state = {
      currentCategory: {
        value: null,
        id: null
      }
    }
  }

  getAnimalJoke = () => {
    // GET random Animal joke from API
    fetch("https://api.chucknorris.io/jokes/random?category=animal")
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

  getDevJoke = () => {
    // GET random Dev joke from API
    fetch("https://api.chucknorris.io/jokes/random?category=dev")
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
        <container className="Categories" style={{margin: 10}}>
          <div>
            <a href='/animal'>Animal</a><br />
            <a href='/career'>Career</a><br />
            <a href='/celebrity'>Celebrity</a><br />
            <a href='/dev'>Dev</a><br />
            <a href='/explicit'>Explicit</a><br />
            <a href='/fashion'>Fashion</a><br />
            <a href='/food'>Food</a><br />
            <a href='/history'>History</a><br />
            <a href='/money'>Money</a><br />
            <a href='/movie'>Movie</a><br />
            <a href='/music'>Music</a><br />
            <a href='/political'>Political</a><br />
            <a href='/religion'>Religion</a><br />
            <a href='/science'>Science</a><br />
            <a href='/sport'>Sport</a><br />
            <a href='/travel'>Travel</a><br />
          </div>
        </container>
      </div>
    );
  }
}




export default Categories;