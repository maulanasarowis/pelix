class DataSource {
  static searchMovie(keyword) {
    return fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=4a014da82393af81cebcaf15678d560e&query=${keyword}&page=1`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`is not found`);
        }
      });
    console.log(this.searchMovie);
  }

  static movieTrending() {
    return fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=4a014da82393af81cebcaf15678d560e`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`is not found`);
        }
      });
  }

  static informationMovie(id) {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4a014da82393af81cebcaf15678d560e`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson) {
          return Promise.resolve(responseJson);
        } else {
          return Promise.reject(`${id} is not found`);
        }
      });
  }
}

export default DataSource;
