import React from 'react';
import './NewJokeButton.css';

const NewJokeButton = (props) => {
  return (
    <button
      className="btn btn-default"
      style={{margin: 10}}
      onClick={props.handleNewJokeClick}
    >
      New Joke
    </button>
  );
}

export default NewJokeButton;