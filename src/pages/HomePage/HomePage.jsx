import React from 'react';
import {Link} from 'react-router-dom';
import './HomePage.css';
// import NavBar from '../../components/NavBar/NavBar';
import Display from '../../components/Display/Display';
import ChuckHead from '../../components/ChuckHead/ChuckHead';
import JokeArea from '../../components/JokeArea/JokeArea';
// import Categories from '../../components/Categories/Categories';
import NewJokeButton from '../../components/NewJokeButton/NewJokeButton';

const HomePage = (props) => {

  return (
    <container>
    <div className="HomePage">
      <div className="HomePage-display">
        <Display
        />
          <div className="HomePage-chuckhead">
            <ChuckHead
            />
          </div>
          <div className="HomePage-jokearea">  
            <JokeArea history={props.history}
            />
          </div>
          {/* <div className="HomePage-categories">
            <Categories
            />
          </div> */}
      </div>
    </div>
    </container>
  );
}

export default HomePage;