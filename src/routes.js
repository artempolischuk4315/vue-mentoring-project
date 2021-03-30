import MainMenu from "./views/MainMenu";
import CardMenu from "./views/CardMenu"

export const routes = [
    {
        path: '/',
        component: MainMenu
    },
    {
        path: "/card/:id",
        component: CardMenu
    }
    ]

