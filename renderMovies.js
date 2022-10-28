export default function renderMovies(movies, home) {
  let html = "";
  movies.map((movie) => {
    html += `
            <div class="movie-card">
                <div class="poster-container">
                    <img src="${movie.Poster}" class="poster"/>
                </div>
                <div class="info-container">
                  <div class="first-row">
                    <h3 class="movie-title">${movie.Title}</h3>
                    <p class="movie-rating"><img src="./images/star.png"}"/>${
                      movie.imdbRating
                    }</p>
                  </div>
                  <div class="second-row">
                    <p class="movie-runtime">${movie.Runtime}</p>
                    <p class="movie-genre">${movie.Genre}</p>
                    <p class="watchlist-par">
                      <button class="watchlist-butt ${home ? "plus" : "minus"}" value=${movie.imdbID}></button>
                    ${home ? "Watchlist" : "Remove"}</p>
                  </div>
                  <p class="movie-plot">${movie.Plot}</p>
                </div>
            </div>
            <hr />
        `;
  });
  return html;
}
