import { useSelector, useDispatch } from "react-redux";

import { initialStateSMs } from "../../../redux/SMsReducer";
import { CHANGE_FIRST_NAME, CHANGE_FIRST_LINK, CHANGE_SECOND_NAME, CHANGE_SECOND_LINK, CHANGE_THIRD_NAME, CHANGE_THIRD_LINK } from "./Main/types";

export const SMTable = () => {
    const dispatch = useDispatch();
    const links = useSelector((state) => state.links);

    const onNameChange = (e) => {
        const headerForChange = links.find((item) => item.header === e.target.id).header;

        if (headerForChange && headerForChange === "Instagram") {
            dispatch({
                type: CHANGE_FIRST_NAME,
                payload: e.target.value,
                user: { header: headerForChange },
            });
        }
        if (headerForChange && headerForChange === "Twitter") {
            dispatch({
                type: CHANGE_SECOND_NAME,
                payload: e.target.value,
                user: { header: headerForChange },
            });
        }
        if (headerForChange && headerForChange === "Facebook") {
            dispatch({
                type: CHANGE_THIRD_NAME,
                payload: e.target.value,
                user: { header: headerForChange },
            });
        }
    };

    const onLinkChange = (e) => {
        const linkForChange = links.find((item) => item.link === e.target.id).link;

        if (linkForChange && linkForChange === "https://instagram.com/") {
            dispatch({
                type: CHANGE_FIRST_LINK,
                payload: e.target.value,
                user: { link: linkForChange },
            });
        }
        if (linkForChange && linkForChange === "https://twitter.com/") {
            dispatch({
                type: CHANGE_SECOND_LINK,
                payload: e.target.value,
                user: { link: linkForChange },
            });
        }
        if (linkForChange && linkForChange === "https://facebook.com/") {
            dispatch({
                type: CHANGE_THIRD_LINK,
                payload: e.target.value,
                user: { link: linkForChange },
            });
        }
    };

    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>SM name</th>
                        <th>SM link</th>
                    </tr>
                </thead>
                <tbody>
                    {initialStateSMs.map((item) => {
                        return (
                            <tr key={item.header}>
                                <td>
                                    <input type="text" placeholder={item.header} onChange={onNameChange} id={item.header} name="name" />
                                </td>
                                <td>
                                    <input type="text" placeholder={item.link} onChange={onLinkChange} id={item.link} />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};
