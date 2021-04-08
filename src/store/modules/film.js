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
        }
    },
    state: {
        films: []
    },
    getters: {
        filmsCount(state) {
          return state.films.length
        },
        allFilms(state) {
            return state.films
        },
        getFilmById: state => id => {
            return state.films.find(film => film.id === parseInt(id))
        }
    }
}