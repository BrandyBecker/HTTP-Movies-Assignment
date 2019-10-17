import React, { useState, useEffect } from "react";
import axios from "axios";

const initialMovie = {
  id: "",
  title: '',
  director: '',
  metascore: '',
  stars: []
};
//-----------------------------------------------------
const UpdateForm = props => {
  const [movie, setMovie] = useState(initialMovie);
  useEffect(() => {
    console.log(props.movies);
    const movieToEdit = props.movies.find(movie => {
      console.log(movie.id, props.match.params.id);
      return `${movie.id}` === props.match.params.id;
    });

    console.log(movieToEdit);
    if (movieToEdit) {
      setMovie(movieToEdit);
    }
  }, [props.movie, props.match.params.id]);
  //-----------------------------------------------------
  const changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;

    setMovie({
      ...movie,
      [ev.target.name]: value
    });
  };
  //-------------------------------------------------------
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
      .then(res => {
        // needs to call setItems
        //trinkets sends back neitre array w/ updated items
        //proj today do
        //const newItems= props.items.map //map through all itesm on list
        //find item that matches updated item id
        //update item in newItems array
        //then pass newItems to updater function
        //similar logic to toggling todo items
        //if successful,
        props.history.push("/movies");
      })
      .catch(err => console.log(err.response));
  };
  //-------------------------------------------------------
  return (
    <div>
      <h2>Update Movie 🎬</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={changeHandler}
          placeholder="title"
          value={movie.title}
        />
        <div className="baseline" />

        <input
          type="text"
          name="director"
          onChange={changeHandler}
          placeholder="Director"
          value={movie.director}
        />
        <div className="baseline" />

        <input
          type="text"
          name="metascore"
          onChange={changeHandler}
          placeholder="Metascore"
          value={movie.metascore}
        />
        <div className="baseline" />

        <input
          type="text"
          name="stars"
          onChange={changeHandler}
          placeholder="Actors"
          value={movie.stars}
        />
        <div className="baseline" />

        <button className="md-button form-button">Update</button>
      </form>
    </div>
  );
};

export default UpdateForm;
