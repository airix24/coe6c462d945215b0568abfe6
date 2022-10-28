import renderMovies from "./renderMovies.js";

const watchlistContainer = document.getElementById("watchlist-container");

export let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

renderWatchlist();

function renderWatchlist() {
  if (watchlistContainer) {
    watchlistContainer.addEventListener("click", removeFromWatchlist);
    if (watchlist.length === 0) {
      watchlistContainer.innerHTML = `
    <div class="placeholder">
        <p>Your watchlist is looking a little empty...</p>
        <a href="index.html">
            <p class="bot-par">
                <img src="./images/plus.png" /><span>Let’s add some movies!</span>
            </p>
        </a>
    </div>
    `;
    } else {
      watchlistContainer.innerHTML = renderMovies(watchlist, false);
    }
  }
}

function removeFromWatchlist(e) {
  if (e.target.matches(".watchlist-butt")) {
    watchlist.map((movie, index) => {
      if (movie.imdbID === e.target.value) {
        watchlist.splice(index, 1);
      }
    });
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
    renderWatchlist();
  }
}
