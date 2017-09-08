import React from 'react';

const JokesTable = (props) => {

  return (
    <div className='JokesTable'>
      <container>
        <table className='table table-striped table-bordered striped'>
          <tbody>
            
            {props.jokes.map(joke =>
              <tr key={joke._id}>
                <td className='text-center'>
                  <button type='submit'
                          className='btn btn-sm btn-danger red lighten-1'
                          style={{margin: 10}}
                  >Delete
                  </button>
                  {joke.value}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </container>
    </div>
  );
};

export default JokesTable;