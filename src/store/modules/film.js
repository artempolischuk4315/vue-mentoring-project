function areFilmGenresContainSearchQuery(film, text) {
    for (let i = 0; i < film.genres.length; i++) {
        if (film.genres[i].toLowerCase().includes(text.toLowerCase()))
            return true;
    }
}

export default {
    actions: {
        async fetchFilms(ctx) {
            const res = await fetch(
              process.env.BASE_URL + "/movies_db.json"
            );
            const films = await res.json();
            ctx.commit('updateFilms', films)
        }
    },
    mutations: {
        updateFilms(state, films) {
            state.films = films
        },
        updateSelectedFilms(state, selectedFilms) {
            state.selectedFilms = selectedFilms
        },
        chooseSearchOption(state, option) {
            state.searchFilterCurrentOption = option
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
        resultsSorterCurrentOption: "rating",
        searchFilterCurrentOption: "title",
        searchFieldInput: "",
        currentFilmCardGenre: ""
    },
    getters: {
        filmsCount(state) {
            if (state.searchFieldInput.trim() !== '') return state.selectedFilms.length
            return state.films.length
        },
        allFilms(state) {
          return state.films
        },
        getSearchFieldInput(state) {
          return state.searchFieldInput
        },
        allSelectedFilms(state) {
            if (state.searchFieldInput.trim() === '') return state.films
            return state.selectedFilms
        },
        getFilmById: state => id => {
            return state.films.find(film => film.id === parseInt(id))
        },
        filterFilmsByGenre: state => genre => {
            return state.films.filter(film => {
                  return areFilmGenresContainSearchQuery(film, genre);
        })},
        filterFilmsByTitle: state => title => {
            return state.films.filter(film =>
              film.title.toLowerCase().includes(title.toLowerCase()))
        },
        getCurrentSearchFilterOption(state) {
            return state.searchFilterCurrentOption;
        },
        getCurrentFilmCardGenre(state) {
            return state.currentFilmCardGenre;
        }
    }
}