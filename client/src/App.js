import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import axios from 'axios';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };
//-------------------------------------------------
  const [movies, setMovies] = useState([])
  useEffect(()=>{
    axios
    .get("http://localhost:5000/api/movies")
    .then(res => setMovies(res.data))
    .catch(err => console.log(err.response))
  }, [])
  
//-------------------------------------------------
  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/movies" render={props => { return <MovieList {...props} movies={movies} />}}/>
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props}  movies={movies} addToSavedList={addToSavedList} />;
        }}
      />
      <Route path="/update-movie/:id"/>
    </>
  );
};

export default App;
