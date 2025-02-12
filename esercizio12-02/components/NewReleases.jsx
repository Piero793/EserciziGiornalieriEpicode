import { Component } from "react";
import { Container } from "react-bootstrap";

class NewReleases extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    console.log("FETCH");
    fetch("http://www.omdbapi.com/?apikey=65f4a0b3&s=fantasy")
      .then((response) => {
        console.log("Response", response);
        return response.json();
      })
      .then((data) => {
        console.log("Dati JSON ok", data);
        this.setState({ movies: data.Search });
        console.log("Films", this.state.movies);
      })
      .catch((error) => {
        console.log("Errore durante il fetch dei dati", error);
      });
  }

  render() {
    console.log("Elenco film", this.state.movies);
    return (
      <Container>
        <h4 className=" text-light mb-4">New Releases</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          {this.state.movies
            .filter((_, index) => index < 6)
            .map((movie) => (
              <div key={movie.imdbID} className="col mb-2 text-center px-1">
                <img className="img-fluid" src={movie.Poster} alt={movie.Title} />
              </div>
            ))}
        </div>
      </Container>
    );
  }
}

export default NewReleases;
