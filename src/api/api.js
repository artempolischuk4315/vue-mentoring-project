import axios from "axios";
import { router } from "../router";

const ApiService = {

  findMovieById(id) {
    return axios
      .get(`http://react-cdp-api.herokuapp.com/movies/${id}`)
      .then((response) => response.data)
  },

 async performQuery() {

   return axios
      .get('http://react-cdp-api.herokuapp.com/movies', { params: {
          search: router.currentRoute.query.search,
          sortBy: router.currentRoute.query.sortBy,
          searchBy: router.currentRoute.query.searchBy,
          sortOrder: router.currentRoute.query.sortOrder,
          limit: router.currentRoute.query.limit
        }})
      .then(res => {
        return res.data })
  },

  findMoviesByGenreForCardMenu(searchField, sortField) {
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
