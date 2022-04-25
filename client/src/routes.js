import { MainPage } from "./pages/MainPage/Main";
import AdminPage from "./pages/AdminPage/AdminPage";
import { Verification } from "./pages/AuthPage/Verification";
import { Route, Switch, Redirect } from "react-router-dom";

export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <Switch>
                {/* <Route path="/verify">
                    <Verification />
                </Route> */}
                <Route path="/admin">
                    <AdminPage />
                </Route>
                <Redirect to="/admin" />
            </Switch>
        );
    }

    return (
        <Switch>
            <Route path="/" exact>
                <MainPage />
            </Route>
            <Route path="/verify" exact>
                <Verification />
            </Route>
            {/* <Redirect to="/" /> */}
        </Switch>
    );
};
