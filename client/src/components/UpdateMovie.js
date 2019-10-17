import React from 'react';

const UpdateMovie = props => {
    return (
        <form>
            <input type='text' name='title'></input>
            <input type='text' name='director'></input>
            <input type='number' name='metascore'></input>
        </form>
    )
}

export default UpdateMovie;