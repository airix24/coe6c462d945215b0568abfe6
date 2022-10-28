import renderMovies from "./renderMovies.js";
import { watchlist } from "./watchlist.js";

const searchBar = document.getElementById("searchbar");
const searchBox = document.getElementById("search");
const moviesContainer = document.getElementById("movies-container");

let movies = [];

function handleSubmit(e) {
  e.preventDefault();
  movies = [];

  fetch(`http://www.omdbapi.com/?apikey=83ef20f4&s=${searchBox.value}`)
    .then((res) => res.json())
    .then((data) => {
      data.Search.map((item) => {
        fetch(`http://www.omdbapi.com/?apikey=83ef20f4&i=${item.imdbID}`)
          .then((res) => res.json())
          .then((data) => {
            movies.push(data);
            moviesContainer.innerHTML = renderMovies(movies, true);
          });
      });
    })
    .catch(error => {
      console.log(error);
      moviesContainer.innerHTML = `
        <div class="placeholder no-results">
          <p>Unable to find what you’re looking for. Please try another search.</p>
        </div>
      `
    });
}

function addToWatchlist(e) {
  if (e.target.matches(".watchlist-butt")) {
    fetch(`http://www.omdbapi.com/?apikey=83ef20f4&i=${e.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        watchlist.push(data);
        localStorage.setItem("watchlist", JSON.stringify(watchlist));
      });
  }
}

searchBar.addEventListener("submit", handleSubmit);
moviesContainer.addEventListener("click", addToWatchlist);
