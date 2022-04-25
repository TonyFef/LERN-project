import {
    CHANGE_FIRST_NAME,
    CHANGE_FIRST_LINK,
    CHANGE_SECOND_NAME,
    CHANGE_SECOND_LINK,
    CHANGE_THIRD_NAME,
    CHANGE_THIRD_LINK,
} from "../pages/AdminPage/Components/Main/types";

export const initialStateSMs = [
    {
        header: "Instagram",
        link: "https://instagram.com/",
        value: "",
        linkValue: "https://instagram.com/",
    },
    {
        header: "Twitter",
        link: "https://twitter.com/",
        value: "",
        linkValue: "https://twitter.com/",
    },
    {
        header: "Facebook",
        link: "https://facebook.com/",
        value: "",
        linkValue: "https://facebook.com/",
    },
];

export const SMsReducer = (state = initialStateSMs, action, user) => {
    switch (action.type) {
        case CHANGE_FIRST_NAME:
            const stateForChangeFirstName = state.find((item) => item.header === action.user.header);
            stateForChangeFirstName.value = action.payload;
            return state;
        case CHANGE_SECOND_NAME:
            const stateForChangeSecondName = state.find((item) => item.header === action.user.header);
            stateForChangeSecondName.value = action.payload;
            return state;
        case CHANGE_THIRD_NAME:
            const stateForChangeThirdName = state.find((item) => item.header === action.user.header);
            stateForChangeThirdName.value = action.payload;
            return state;
        case CHANGE_FIRST_LINK:
            const stateForChangeFirstLink = state.find((item) => item.link === action.user.link);
            stateForChangeFirstLink.linkValue = action.payload;
            return state;
        case CHANGE_SECOND_LINK:
            const stateForChangeSecondLink = state.find((item) => item.link === action.user.link);
            stateForChangeSecondLink.linkValue = action.payload;
            return state;
        case CHANGE_THIRD_LINK:
            const stateForChangeThirdLink = state.find((item) => item.link === action.user.link);
            stateForChangeThirdLink.linkValue = action.payload;
            return state;

        default:
            return state;
    }
};
