import ApiService from "./../../api/api.js"

export default {
    actions: {
        performSimpleQueryToApi({ commit }) {
            return ApiService.performQuery()
              .then((movies) => commit('updateSelectedFilms', movies.data))
        },
        findFilmsByGenreForCardMenu({ commit, getters }, value ) {
            return ApiService.findMoviesByGenreForCardMenu(value, getters.getCurrentSortFilmsOption)
              .then((movies) => commit('updateCardMenuFilms', movies.data))
        },
        findMovieById({ commit }, id) {
            return ApiService.findMovieById(id)
              .then((movies) => commit('updateFilmCard', movies))
        },
    },
    mutations: {
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
        selectedFilms: [],
        cardMenuFilms: [],
        selectedFilmById: Object,
        resultsSorterCurrentOption: "vote_average",
        searchFilterCurrentOption: "title",
        searchFieldInput: "",
        currentFilmCardGenre: ""
    },
    getters: {
        filmsCount(state) {
            return state.selectedFilms.length
        },
        getSearchFieldInput(state) {
          return state.searchFieldInput
        },
        allSelectedFilms(state) {
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