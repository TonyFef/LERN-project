import { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_MAIN_HEADER, CHANGE_MAIN_SUBHEADER, CHANGE_MAIN_BANNER, RESET_MAIN } from "./types";
import { initialStateMain } from "../../../../redux/mainReducer";

const MainInputs = () => {
    const [newHeaderValue, setNewHeaderValue] = useState("");
    const [newSubheaderValue, setNewSubheaderValue] = useState("");
    const [newBannerValue, setNewBannerValue] = useState("");

    const dispatch = useDispatch();
    const header = useSelector((state) => state.main.header);
    const subheader = useSelector((state) => state.main.subheader);

    const onInputHandler = (e) => {
        if (e.target.name === "header") {
            setNewHeaderValue(e.target.value);
            dispatch({
                type: CHANGE_MAIN_HEADER,
                payload: newHeaderValue,
            });
        } else if (e.target.name === "subheader") {
            setNewSubheaderValue(e.target.value);
            dispatch({
                type: CHANGE_MAIN_SUBHEADER,
                payload: newSubheaderValue,
            });
        } else if (e.target.name === "text") {
            setNewBannerValue(e.target.value);
            dispatch({
                type: CHANGE_MAIN_BANNER,
                payload: newBannerValue,
            });
        }
    };

    return (
        <>
            <div className="inputs mb-3">
                <input type="text" placeholder="New header" className="inputs-input" onChange={onInputHandler} value={newHeaderValue} name="header" />
                <input
                    type="text"
                    placeholder="New subheader"
                    className="inputs-input"
                    onChange={onInputHandler}
                    value={newSubheaderValue}
                    name="subheader"
                />
                <input
                    type="text"
                    placeholder="New banner link"
                    className="inputs-input"
                    onChange={onInputHandler}
                    value={newBannerValue}
                    name="text"
                />
            </div>
            <div className="buttons">
                <button
                    type="reset"
                    className="btn btn-secondary"
                    onClick={(e) => {
                        console.log(initialStateMain);
                        // setNewArr(initialState);
                        setNewHeaderValue(initialStateMain.header)
                        setNewSubheaderValue(initialStateMain.subheader)
                        setNewBannerValue(initialStateMain.text)
                        dispatch({
                            type: RESET_MAIN,
                            payload: initialStateMain,
                        });
                    }}
                >
                    Reset
                </button>
            </div>
        </>
    );
};

export default MainInputs;
