import React, {useEffect, useState} from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
const Movie = (props) => {
  
const [movie, setMovie] = useState(null);
  useEffect(()=> {
      fetchMovie(props.match.params.id)
  }, [])
  
  
  useEffect(() => {
        fetchMovie(props.match.params.id);
}, [props])
  
  const fetchMovie = id => {
    axios
    .get(`http://localhost:5000/api/movies/${id}`)
    .then(res => setMovie(res.data))
    .catch(err => console.log(err.response));
  };
  
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie);
  };
  
//--------------------------------------------------------------------
  const handleDelete = e => {
    e.preventDefault();
    const movie = props.movies.find(
      thing => `${thing.id}` === props.match.params.id
    )
    return axios
    .delete(`http://localhost:5000/api/movies/${movie.id}`)
    .then(res => 
    props.history.push("/movies")
    )
    .catch(err => console.log(err))
  }
//--------------------------------------------------------------------
    if (!movie) {
      return <div>Loading movie information...</div>;
    }
    return (
      <div className="save-wrapper">
        <MovieCard movie={movie} movies={props.movies} />
        <div className="save-button" onClick={saveMovie}>
          Save
        </div>
        <div className="del-button" onClick={handleDelete} >
          Delete
        </div>
        <div className="edit-button"  >
          Edit
        </div>
      </div>
    );
}
export default Movie;
