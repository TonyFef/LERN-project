import { useSelector } from "react-redux";

import inst from "../../../../helpers/instagram.svg";
import twitter from "../../../../helpers/twitter.svg";
import linkedIn from "../../../../helpers/linkedin.svg";
import search from "../../../../helpers/search.svg";

export const Header = () => {
    const links = useSelector((state) => state.links);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <a className="navbar-brand font-weight-bold" href="#!">
                HotCoffee
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="header-search">
                <img src={search} alt="..." />
                <input type="text" className="header-search__input" placeholder="Search..." />
            </div>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item ">
                        <a className="nav-link" href="#!">
                            Home <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#!">
                            Articles
                        </a>
                    </li>

                    <li className="ms-3 nav-item">
                        <a className="text-muted" href={links[0].linkValue} target="_blank" rel="noreferrer">
                            <img className="bi" width="24" height="24" src={inst} alt=".." />
                        </a>
                    </li>
                    <li className="ms-3  nav-item">
                        <a className="text-muted" href={links[1].linkValue} target="_blank" rel="noreferrer">
                            <img className="bi" width="24" height="24" src={twitter} alt=".." />
                        </a>
                    </li>

                    <li className="ms-3  nav-item">
                        <a className="text-muted" href={links[2].linkValue} target="_blank" rel="noreferrer">
                            <img className="bi" width="24" height="24" src={linkedIn} alt=".." />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
