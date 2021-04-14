import Vue from "vue";
import _ from "lodash";

export default new Vue({
  data: {
    filteredFilms: [],
    films: [
      {
        id: "1",
        genre: "Drama",
        img: "https://image.tmdb.org/t/p/w500/uJ6OnE3CzGWq6buLINAbdBqa0gV.jpg",
        title: "Title",
        year: 2005,
        rating: 0.5,
        subtitle: "Subtitle",
        duration: 155,
        description: "Descr"
      },
      {
        id: "2",
        genre: "Drama",
        img: "https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg",
        title: "Another title",
        year: 1223,
        rating: 4.3,
        subtitle: "Subtitle",
        duration: 155,
        description: "Descr"
      },
      {
        id: "3",
        genre: "Drama",
        img: "https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg",
        title: "Some title",
        year: 2032,
        rating: 4.3,
        subtitle: "Subtitle",
        duration: 155,
        description: "Descr"
      },
      {
        id: "4",
        genre: "Drama",
        img: "https://image.tmdb.org/t/p/w500/sshNRCbtU2ON8SiWLycQzr05doX.jpg",
        title: "Title",
        year: 3223,
        rating: 4.3,
        subtitle: "Subtitle",
        duration: 155,
        description: "Descr"
      },
      {
        id: "5",
        genre: "Fantasy",
        img: "https://image.tmdb.org/t/p/w500/yUOJHa9XmB1H0iYodG9Kb3YCc9T.jpg",
        title: "Interesting title",
        year: 2305,
        rating: 4.3,
        subtitle: "Subtitle",
        duration: 155,
        description: "Descr"
      },
      {
        id: "6",
        genre: "Comedy",
        img: "https://image.tmdb.org/t/p/w500/6qmsupE0opYPIaBGe7T5D2FBzLs.jpg",
        title: "Test title",
        year: 1993,
        rating: 4.3,
        subtitle: "Subtitle",
        duration: 155,
        description: "Descr"
      },
      {
        id: "7",
        genre: "Comedy",
        img: "https://image.tmdb.org/t/p/w500/98tbNloMBztAVnWpAznKKVUdi2O.jpg",
        title: "Test title",
        year: 1993,
        rating: 4.3,
        subtitle: "Subtitle",
        duration: 155,
        description: "Descr"
      }
    ]
  },
  methods: {
    openItemCard(id) {
      let cardToShow = _.find(this.films, { id: id });
      this.$emit("openItemCard", cardToShow);
    },
    searchFilm(text, searchPattern) {
      if (searchPattern === "genre") {
        this.filteredFilms = this.films.filter(film => {
          return film.genre.toLowerCase().includes(this.text.toLowerCase());
        });
      }
      if (searchPattern === "title") {
        this.filteredFilms = this.films.filter(film => {
          return film.title.toLowerCase().includes(this.text.toLowerCase());
        });
      } else {
        this.filteredFilms = this.films;
      }
    }
  }
});
