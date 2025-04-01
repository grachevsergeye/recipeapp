import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({

        debug: true,
        fallbackLng: "en",
        resources: {
            en: { 
                translation: {
                    cook: "What do you want to cook today?",
                    h: "Home",
                    fav: "Favorite",
                    rr: "Recommended receipts",
                    pp: "Popular choice",
                    my: "My Favorites",
                    por: "Portions",
                    kit: "Kitchen"
                },
            },
            es: { 
                translation: {
                    cook: "¿Qué quieres cocinar hoy?",
                    h: "Hogar",
                    fav: "Favorito",
                    rr: "Recetas recomendadas",
                    pp: "Elección popular",
                    my: "Mis favoritos",
                    por: "Porciones",
                    kit: "Cocina"
                },
            },
            ru: { 
                translation: {
                    cook: "Что ты хочешь сегодня приготовить?",
                    h: "Домой",
                    fav: "Избранное",
                    rr: "Рекомендуемые рецепты",
                    pp: "Популярный выбор",
                    my: "Мое Избранное",
                    por: "Порции",
                    kit: "Кухня"
                },
            },
        },
    });

export default i18n;