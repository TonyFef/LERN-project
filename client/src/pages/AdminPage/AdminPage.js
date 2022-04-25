import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";

import { AuthContext } from "../../context/AuthContext";

import MainTable from "./Components/Main/MainTable";
import MainInputs from "./Components/Main/MainInputs";
import { ArticlesTable } from "./Components/ArticlesTable";

import { Button } from "./Components/Main/Button";
import { SMTable } from "./Components/SMTable";

function AdminPage() {
    const auth = useContext(AuthContext);
    const history = useHistory();

    const onHandleClick = (e) => {
        e.preventDefault();
        auth.logout();
        history.push("/");
    };

    return (
        <>
            <div className="tables m-5">
                <div className="table-wrapper" style={{ width: "35%" }}>
                    <MainTable />
                    <MainInputs />
                </div>

                <div className="table-wrapper" style={{ width: "30%" }}>
                    <ArticlesTable />
                </div>
                <div className="table-wrapper" style={{ width: "20%" }}>
                    <SMTable />
                    <div className="buttons">
                        <Button type="submit" nameClass="btn btn-primary" text="Save" />
                        <Button type="reset" nameClass="btn btn-secondary" text="Reset" />
                    </div>
                </div>
            </div>

            <div className="m-5">
                <Link to="/" className="text-muted text-decoration-none lh-1" onClick={onHandleClick}>
                    Back to main
                </Link>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        myMain: state.main.main,
    };
};

export default connect(mapStateToProps, null)(AdminPage);
