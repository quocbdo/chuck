import React from 'react';
import {Link} from 'react-router-dom';
import './HomePage.css';
import NavBar from '../../components/NavBar/NavBar';
import Display from '../../components/Display/Display';
import ChuckHead from '../../components/ChuckHead/ChuckHead';
import JokeArea from '../../components/JokeArea/JokeArea';
import Categories from '../../components/Categories/Categories';
import NewJokeButton from '../../components/NewJokeButton/NewJokeButton';

const HomePage = (props) => {

  return (
    <div className="HomePage">
      <NavBar
        user={props.user}
        handleLogout={props.handleLogout}
      />
      <div className="HomePage-display">
        <Display
        />
          <div className="HomePage-chuckhead">
            <ChuckHead
            />
          </div>
          <div className="HomePage-jokearea">  
            <JokeArea
            />
          </div>
          <div className="HomePage-categories">
            <Categories
            />
          </div>
      </div>

        {/* <div className="HomePage-newjokebtn">
          <NewJokeButton
          />
        </div> */}
    </div>
  );
}

export default HomePage;