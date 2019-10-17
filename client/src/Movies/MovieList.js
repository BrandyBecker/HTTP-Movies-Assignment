// import React, { Component } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import MovieCard from "./MovieCard";

// export default class MovieList extends Component {
//   constructor(props) {
//     super(props);   
//   }
//   render() {
//     return (
//       <div className="movie-list">
//         {this.props.movies.map(movie => (
//           <MovieDetails key={movie.id} movie={movie} />
//         ))}
//       </div>
//     );
//   }
// }
// function MovieDetails({ movie, movies }) {
//   return (
//     <Link to={`/movies/${movie.id}`}>
//       <MovieCard movie={movie} movies={movies} />
//     </Link>
//   );
// }
//-----------------
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = props => {
  
    return (
      <div className="movie-list">
        {props.movies.map(movie => (
          <MovieDetails key={movie.id} movie={movie} />
        ))}
      </div>
    );
}
function MovieDetails({ movie, movies }) {
  return (
    <Link to={`/movies/${movie.id}`}>
      <MovieCard movie={movie} movies={movies} />
    </Link>
  );
}

export default MovieList