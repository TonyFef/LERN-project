import {
    mainCardTitle,
    mainCardText,
    mainPostDate,
    firstCardTitle,
    firstCardText,
    firstPostDate,
    secondCardTitle,
    secondCardText,
    secondPostDate,
    thirdCardTitle,
    thirdCardText,
    thirdPostDate,
    latestTitle,
    latestText,
} from "../helpers/variables";
import { CHANGE_ARTICLES_LIST } from "../pages/AdminPage/Components/Main/types";

export const initialState = [
    {
        header: mainCardTitle,
        text: mainCardText,
        postDate: mainPostDate,
        id: 1,
    },
    {
        header: firstCardTitle,
        text: firstCardText,
        postDate: firstPostDate,
        id: 2,
    },
    {
        header: secondCardTitle,
        text: secondCardText,
        postDate: secondPostDate,
        id: 3,
    },
    {
        header: thirdCardTitle,
        text: thirdCardText,
        postDate: thirdPostDate,
        id: 4,
    },
    {
        header: latestTitle,
        text: latestText,
        id: 5,
    },
];

export const articlesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_ARTICLES_LIST:
            return action.payload;

        default:
            return state;
    }
};
