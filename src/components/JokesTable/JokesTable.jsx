import React from 'react';

const JokesTable = (props) => {

  return (
    <table className='table table-striped table-bordered'>
      {/* <thead>
        <tr>
          <th>Player</th>
          <th className='text-center'># Guesses </th>
          <th className='text-center'>Time</th>
        </tr>
      </thead> */}
      <tbody>
        {props.jokes.map(joke =>
          <tr key={joke._id}>
            <td>{joke.player}</td>
            <td className='text-center'>{joke.value}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default JokesTable;