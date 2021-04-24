import ApiService from "./../../api/api.js"

export default {
    actions: {
         fetchFilms({ commit }) {
                return ApiService.findAllMovies()
               .then((movies) => commit('updateFilms', movies.data))
        },
        findFilmsByTitle({ commit, getters }, value ) {
            return ApiService.findMoviesByTitle(value, getters.getCurrentSortFilmsOption)
              .then((movies) => commit('updateSelectedFilms', movies.data))
        },
        findFilmsByGenre({ commit, getters }, value ) {
            return ApiService.findMoviesByGenre(value, getters.getCurrentSortFilmsOption)
              .then((movies) => commit('updateSelectedFilms', movies.data))
        },
        findFilmsByGenreForCardMenu({ commit, getters }, value ) {
            return ApiService.findMoviesByGenre(value, getters.getCurrentSortFilmsOption)
              .then((movies) => commit('updateCardMenuFilms', movies.data))
        },
        findMovieById({ commit }, id) {
            return ApiService.findMovieById(id)
              .then((movies) => commit('updateFilmCard', movies))
        },
        sortFilmsByOption({ commit, getters }, option ) {
            return ApiService.sortMoviesByOption(getters.getSearchFieldInput,
              getters.getCurrentSearchFilterOption, option)
              .then((movies) => commit('updateSelectedFilms', movies.data))
        }
    },
    mutations: {
        updateFilms(state, films) {
            state.films = films
        },
        updateSelectedFilms(state, selectedFilms) {
            state.selectedFilms = selectedFilms
        },
        updateCardMenuFilms(state, selectedFilms) {
            state.cardMenuFilms = selectedFilms
        },
        updateFilmCard(state, selectedFilm) {
            state.selectedFilmById = selectedFilm
        },
        chooseSearchOption(state, option) {
            state.searchFilterCurrentOption = option
        },
        chooseSortOption(state, option) {
            state.resultsSorterCurrentOption = option
        },
        updateSearchFieldInput(state, text) {
            state.searchFieldInput = text
        },
        updateCurrentFilmCardGenre(state, text) {
            state.currentFilmCardGenre = text
        }
    },
    state: {
        films: [],
        selectedFilms: [],
        cardMenuFilms: [],
        selectedFilmById: Object,
        resultsSorterCurrentOption: "rating",
        searchFilterCurrentOption: "title",
        searchFieldInput: "",
        currentFilmCardGenre: ""
    },
    getters: {
        filmsCount(state) {
            if (state.selectedFilms.length === 0 && state.searchFieldInput.trim() === "")
                return state.films.length
            return state.selectedFilms.length
        },
        allFilms(state) {
          return state.films
        },
        getSearchFieldInput(state) {
          return state.searchFieldInput
        },
        allSelectedFilms(state) {
            if (state.selectedFilms.length === 0 && state.searchFieldInput.trim() === "")
                return state.films
            return state.selectedFilms
        },
        allSelectedFilmsForCardMenu(state) {
            return state.cardMenuFilms
        },
        getFilmCard: state => {
            return state.selectedFilmById
        },
        getCurrentSearchFilterOption(state) {
            return state.searchFilterCurrentOption;
        },
        getCurrentSortFilmsOption(state) {
          return state.resultsSorterCurrentOption;
        },
        getCurrentFilmCardGenre(state) {
            return state.currentFilmCardGenre;
        }
    }
}