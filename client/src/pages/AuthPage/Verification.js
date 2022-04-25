import { useContext, useEffect, useState } from "react";
import { useHttp } from "../../hooks/http.hook";
import { Link } from "react-router-dom";
import { useMessage } from "../../hooks/message.hook";
import { AuthContext } from "../../context/AuthContext";

export function Verification() {
    const auth = useContext(AuthContext);

    const message = useMessage();

    const { loading, request, error, clearError } = useHttp();

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    useEffect(() => {
        message(error);
        clearError();
    }, [error, message, clearError]);

    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({ ...userData, [name]: value });
    };

    const loginHandler = async (e) => {
        e.preventDefault();
        try {
            const data = await request("/api/auth/login", "POST", { ...userData });
            auth.login(data.token, data.userId);
        } catch (error) {}
    };

    return (
        <>
            <main className="form-signin container">
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        autoComplete="username"
                        value={userData.email}
                        onChange={changeHandler}
                        name="email"
                    />
                    <label>Email address</label>
                </div>
                <div className="form-floating">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={userData.password}
                        onChange={changeHandler}
                        name="password"
                    />
                    <label>Password</label>
                </div>
                <button className="btn btn-lg btn-primary" type="submit" disabled={loading} onClick={loginHandler}>
                    Sign in
                </button>
                <div className="">
                    <Link to="/" className="text-muted text-decoration-none lh-1">
                        Back
                    </Link>
                </div>
            </main>
        </>
    );
}
