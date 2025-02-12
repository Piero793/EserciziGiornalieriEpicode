import { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class NewReleases extends Component {
  state = {
    movies: [],
    loading: true, // Stato per lo spinner
    error: null,
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
        this.setState({ movies: data.Search, loading: false });
        console.log("Films", this.state.movies);
      })
      .catch((error) => {
        console.log("Errore durante il fetch dei dati", error);
        this.setState({ error: error.message, loading: false });
      });
  }

  render() {
    console.log("Elenco film", this.state.movies);

    return (
      <Container>
        <div className="d-flex align-items-center mb-4">
          <h4 className="text-light me-2">Trending Now</h4>
          {/* parte lo spinner*/}
          {this.state.loading && (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div>

        {this.state.error ? (
          <div className="text-center text-light">Errore: {this.state.error}</div>
        ) : (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
            {this.state.movies
              .filter((_, index) => index < 6)
              .map((movie) => (
                <div key={movie.imdbID} className="col mb-2 text-center px-1">
                  <img className="img-fluid" src={movie.Poster} alt={movie.Title} />
                  <Link to={`/movie/details/${movie.imdbID}`} className="btn btn-outline-danger mt-2">
                    Dettagli
                  </Link>
                </div>
              ))}
          </div>
        )}
      </Container>
    );
  }
}

export default NewReleases;
