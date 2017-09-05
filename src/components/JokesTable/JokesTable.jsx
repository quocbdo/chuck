import React from 'react';

const JokesTable = (props) => {

  // function pad(val, places) {
  //   var s = val.toString();
  //   return '0'.repeat(places - s.length) + s;
  //  }
  //  return `${pad(Math.floor(seconds / 60), 2)}:${pad(seconds % 60, 2)}`;

  return (
    <table className='table table-striped table-bordered'>
      <thead>
        <tr>
          <th>Player</th>
          <th className='text-center'># Guesses </th>
          <th className='text-center'>Time</th>
        </tr>
      </thead>
      <tbody>
        {props.jokes.map(joke =>
          <tr key={joke.player}>
            <td>{joke.player}</td>
            <td className='text-center'>{joke.guesses}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default JokesTable;