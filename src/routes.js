import MainMenu from "./views/MainMenu";
import CardMenu from "./views/CardMenu";

export const routes = [
  {
    name: "main",
    path: "/",
    component: MainMenu
  },
  {
    name: "card",
    path: "/card/:id",
    component: CardMenu
  },
  {
    name: "error",
    path: "*",
    component: MainMenu
  }
];
