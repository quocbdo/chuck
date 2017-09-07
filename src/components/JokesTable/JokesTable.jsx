import React from 'react';

const JokesTable = (props) => {

  return (
    <table className='table table-striped table-bordered'>
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