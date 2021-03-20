import { storiesOf } from "@storybook/vue";
import './../../main.css';

import SearchButton from "../components/mainPageHeader/SubmitButton.vue";
import SearchFilter from "../components/mainPageHeader/SearchFilter.vue";
import SearchBar from "../components/mainPageHeader/SearchBar.vue";
import ResultsSorter from "../components/resultBody/ResultsSorter";

storiesOf("Components", module)
    .add("Search button", () => ({
          components: { SearchButton },
          template: "<search-button>SEARCH</search-button>"}))
    .add("Search filter", () => ({
          components:{ SearchFilter },
          template: "<search-filter></search-filter>"}))
    .add("Search bar", () => ({
      components:{ SearchBar },
      template: "<search-bar></search-bar>"}))
    .add("Results sorter", () => ({
        components:{ ResultsSorter },
        template: "<results-sorter></results-sorter>"}));

