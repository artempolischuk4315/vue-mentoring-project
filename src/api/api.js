import axios from "axios";

const ApiService = {

  findAllMovies() {
    return axios
      .get('http://react-cdp-api.herokuapp.com/movies?limit=12')
      .then(res => res.data)
  },

  findMovieById(id) {
    return axios
      .get(`http://react-cdp-api.herokuapp.com/movies/${id}`)
      .then((response) => response.data)
  },

  sortMoviesByOption(searchField, filterField, sortOption) {
    return axios
      .get('http://react-cdp-api.herokuapp.com/movies', { params: {
          search: searchField,
          sortBy: sortOption,
          searchBy: filterField,
          sortOrder: "desc",
          limit: 12
        }})
      .then(res => res.data)
  },

  findMoviesByTitle(searchField, sortField) {
    return axios
      .get('http://react-cdp-api.herokuapp.com/movies', { params: {
          search: searchField,
          sortBy: sortField,
          searchBy: "title",
          sortOrder: "desc",
          limit: 12
        }})
      .then(res => res.data)
  },

  findMoviesByGenre(searchField, sortField) {
    return axios
      .get('http://react-cdp-api.herokuapp.com/movies', { params: {
          search: searchField,
          sortBy: sortField,
          searchBy: "genres",
          sortOrder: "desc",
          limit: 12
        }})
      .then(res => res.data)
  }
}

export default ApiService;
