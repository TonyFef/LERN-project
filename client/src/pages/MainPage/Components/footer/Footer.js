import { Link } from "react-router-dom";

import inst from "../../../../helpers/instagram.svg";
import twitter from "../../../../helpers/twitter.svg";
import linkedIn from "../../../../helpers/linkedin.svg";

export const Footer = () => {
    return (
        <div className="container footer-container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <span className="text-muted">&copy; hotcoffee 2020 copyright all rights reserved</span>
                </div>
                <div className="">
                    <Link to="/verify" className="text-muted text-decoration-none lh-1">
                        Admin panel
                    </Link>
                </div>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3 nav-item">
                        <a className="text-muted" href="https://instagram.com/" target="_blank" rel="noreferrer">
                            <img className="bi" width="24" height="24" src={inst} alt=".." />
                        </a>
                    </li>
                    <li className="ms-3 nav-item">
                        <a className="text-muted" href="https://twitter.com/" target="_blank" rel="noreferrer">
                            <img className="bi" width="24" height="24" src={twitter} alt=".." />
                        </a>
                    </li>

                    <li className="ms-3 nav-item">
                        <a className="text-muted" href="https://facebook.com/" target="_blank" rel="noreferrer">
                            <img className="bi" width="24" height="24" src={linkedIn} alt=".." />
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    );
};
