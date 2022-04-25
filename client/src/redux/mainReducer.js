import { CHANGE_MAIN_HEADER, CHANGE_MAIN_SUBHEADER, CHANGE_MAIN_BANNER, RESET_MAIN } from "../pages/AdminPage/Components/Main/types";

import { mainHeader, mainSubheader } from "../helpers/variables";
import img from "../helpers/mainImg.png";

export const initialStateMain = {
    header: mainHeader,
    subheader: mainSubheader,
    banner: img,
};

export const mainReducer = (state = initialStateMain, action) => {
    switch (action.type) {
        case CHANGE_MAIN_HEADER:
            return { ...state, header: action.payload };
        case CHANGE_MAIN_SUBHEADER:
            return { ...state, subheader: action.payload };
        case CHANGE_MAIN_BANNER:
            return { ...state, banner: action.payload };
        case RESET_MAIN:
            return { ...state, header: initialStateMain.header, subheader: initialStateMain.subheader, banner: initialStateMain.banner };

        default:
            return state;
    }
};
