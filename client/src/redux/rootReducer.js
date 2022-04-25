import { combineReducers } from "redux";
import { articlesReducer } from "./articlesReducer";
import { mainReducer } from "./mainReducer";
import { SMsReducer } from "./SMsReducer";

export const rootReducer = combineReducers({
    main: mainReducer,
    articles: articlesReducer,
    links: SMsReducer,
});
