// REMOVE COMPONENT

// import React from 'react';
// import './NewJokeButton.css';

// class NewJokeButton extends React.Component{
//   constructor() {
//     super()
//     this.state = {
//       currentJoke: {
//         value: null,
//         id: null
//       }
//     }
//   }

//   getRandomJoke = () => {
//     // GET random joke from API
//     fetch("https://api.chucknorris.io/jokes/random")
//     .then(data => data.json())
//     .then(data => {
//       this.setState({
//         currentJoke: {
//           value: data.value,
//           id: data.id
//         }
//       })
//     })
//   }

//   render() {
//     return (
//       <div>
//         <div class="panel panel-default" style={{margin: 10}}>
//           <div class="panel-body">
//             {this.state.currentJoke.value}
//           </div>
//         </div>
//         <button
//           class="btn btn-default"
//           style={{margin: 10}}
//           onClick={this.getRandomJoke}
//         >
//           Generate New Joke
//         </button>
//       </div>
//     );
//   }
// }

// OLD CODE
// const NewJokeButton = (props) => {
//   return (
//     <button
//       className="btn btn-default"
//       style={{margin: 10}}
//       onClick={props.handleNewJokeClick}
//     >
//       New Joke
//     </button>
//   );
// }

// export default NewJokeButton;