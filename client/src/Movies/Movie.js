import React from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { prototype } from "module";

export default class Movie extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    this.fetchMovie(this.props.match.params.id);
  }

  
  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchMovie(newProps.match.params.id);
    }
  }
  
  fetchMovie = id => {
    axios
    .get(`http://localhost:5000/api/movies/${id}`)
    .then(res => this.setState({ movie: res.data }))
    .catch(err => console.log(err.response));
  };
  
  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie);
  };
  
//--------------------------------------------------------------------
  handleDelete = e => {
    e.preventDefault();
    return axios
    .delete(`http://localhost:5000/api/movies/${this.state.movie.id}`)
    .then(res => 
    this.props.history.push("/")
    )
    .catch(err => console.log(err))
  }
//--------------------------------------------------------------------

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }


    

    return (
      <div className="save-wrapper">
        <MovieCard movie={this.state.movie} />
        <div className="save-button" onClick={this.saveMovie}>
          Save
        </div>
        <div className="del-button" onClick={this.handleDelete} >
          Delete
        </div>
        <div className="edit-button"  >
          Edit
        </div>
      </div>
    );
  }
}
