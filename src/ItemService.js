import Vue from "vue";
import _ from "lodash";

export default new Vue({
    data: {
        filteredFilms: [],
        films: [
            { id: '1', genre: "Drama", img: "bohemian.jpg", title: "Title", year:2005, rating:0.5, subtitle:"Subtitle", duration:155, description:"Descr" },
            { id: '2', genre: "Drama", img: "pulp.jpg", title: "Another title", year:1223, rating:4.3, subtitle:"Subtitle", duration:155, description:"Descr" },
            { id: '3', genre: "Drama", img: "bohemian.jpg", title: "Some title", year:2032, rating:4.3, subtitle:"Subtitle", duration:155, description:"Descr" },
            { id: '4', genre: "Drama", img: "pulp.jpg", title: "Some film title", year:3223, rating:4.3, subtitle:"Subtitle", duration:155, description:"Descr" },
            { id: '5', genre: "Fantasy", img: "bohemian.jpg", title: "Interesting title", year:2305, rating:4.3, subtitle:"Subtitle", duration:155, description:"Descr" },
            { id: '6', genre: "Comedy", img: "pulp.jpg", title: "Test title", year:1993, rating:4.3, subtitle:"Subtitle", duration:155, description:"Descr" },
            { id: '7', genre: "Comedy", img: "pulp.jpg", title: "Test title", year:1993, rating:4.3, subtitle:"Subtitle", duration:155, description:"Descr" }
        ]
    },
    methods: {
        openItemCard(id) {
            let cardToShow = _.find(this.films, {id: id})
            this.$emit('openItemCard', cardToShow);
        },
        searchFilm(text, searchPattern) {
            if(searchPattern === 'genre') {
                this.filteredFilms = this.films.filter(film => {
                    return film.genre.toLowerCase().includes(this.text.toLowerCase())
                })
            }
            if(searchPattern === 'title') {
                this.filteredFilms = this.films.filter(film => {
                    return film.title.toLowerCase().includes(this.text.toLowerCase())
                })
            } else {
                this.filteredFilms = this.films;
            }
        }
    }
});