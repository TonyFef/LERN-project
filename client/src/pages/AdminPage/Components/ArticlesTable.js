import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialState } from "../../../redux/articlesReducer";

import { CHANGE_ARTICLES_LIST } from "./Main/types";

export const ArticlesTable = () => {
    const dispatch = useDispatch();

    const articlesList = useSelector((state) => state.articles);
    const [newArr, setNewArr] = useState(articlesList);

    const deleteItem = (e) => {
        const itemId = e.target.closest("tr").id.slice(0, 1);
        const itemIndex = articlesList.findIndex((elem) => elem.id == itemId);
        const before = articlesList.slice(0, itemIndex);
        const after = articlesList.slice(itemIndex + 1);
        const newArray = [...before, ...after];
        
        setNewArr(newArray);
        dispatch({
            type: CHANGE_ARTICLES_LIST,
            payload: newArray,
        });
    };

    const articles = newArr.map((item) => {
        const ident = item.id + "b";
        return (
            <tr key={item.id} id={ident}>
                <th scope="row">{item.id}</th>
                <td>{item.header}</td>
                <td>{item.text}</td>
                <td>
                    <button className="btn" onClick={deleteItem}>
                        X
                    </button>
                </td>
            </tr>
        );
    });

    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th>Articles Header</th>
                        <th>Articles Banner</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>{articles}</tbody>
            </table>
            <div className="buttons">
                <button
                    type="reset"
                    className="btn btn-secondary"
                    onClick={() => {
                        setNewArr(initialState);
                        dispatch({
                            type: CHANGE_ARTICLES_LIST,
                            payload: initialState,
                        });
                    }}
                >
                    Reset
                </button>
            </div>
        </>
    );
};
