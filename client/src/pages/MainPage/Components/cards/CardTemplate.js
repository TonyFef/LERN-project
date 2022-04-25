import {
    mainCardTitle,
    mainCardText,
    mainPostDate,
    firstCardTitle,
    firstCardText,
    firstPostDate,
    latestTitle,
    latestText,
    latestPostDate,
} from "../../../../helpers/variables";

import mainCardBanner from "../../../../helpers/mainCardBanner.png";
import card2 from "../../../../helpers/card2.png";
import card3 from "../../../../helpers/card3.png";
import card4 from "../../../../helpers/card4.png";
import latestCardImg from "../../../../helpers/latestCardImg.png";
import arrow from "../../../../helpers/arrow-down.svg";

export const CardTemplate = ({ props }) => {
    if (props.id === 1) {
        return (
            <div className="container mt-5 main-card">
                <div className="card mb-4 shadow-sm card-row">
                    <div className="row ">
                        <div className="col-md-8 align-self-center card-textpart">
                            <div className="card-body">
                                <h3 className="card-title font-weight-bold">{mainCardTitle}</h3>
                                <p className="card-text">{mainCardText}</p>
                                <div className="card-bottom">
                                    <span className="card-text">
                                        <small className="text-dark">{mainPostDate}</small>
                                    </span>
                                    <a href="#!" className="btn btn-link float-right text-dark font-weight-bold">
                                        Read more
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src={mainCardBanner} className="card-img" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        );
    } else if (props.id > 1 && props.id < 5) {
        let cardImgLink;
        if (props.id === 2) {
            cardImgLink = card2;
        } else if (props.id === 3) {
            cardImgLink = card3;
        } else if (props.id === 4) {
            cardImgLink = card4;
        }

        return (
            <div className="col-md-4 card-row--mine">
                <div className="card shadow-sm">
                    <img src={cardImgLink} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title font-weight-bold">{firstCardTitle}</h4>
                        <p className="card-text">{firstCardText}</p>
                        <div className="card-bottom">
                            <span className="card-text">
                                <small className="text-dark">{firstPostDate}</small>
                            </span>
                            <a href="#!" className="btn btn-link float-right text-dark font-weight-bold">
                                Read more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else if (props.id > 4) {
        return (
            <div className="container mt-4 bg-latest">
                <div className="row">
                    <div className="col align-self-center p-5">
                        <h3 className="card-title font-weight-bold">{latestTitle}</h3>
                        <p className="card-text">{latestText}</p>
                        <div className="card-bottom">
                            <span className="card-text">
                                <small className="text-dark">{latestPostDate}</small>
                            </span>
                            <a href="#!" className="btn btn-link float-right text-dark font-weight-bold">
                                Read more
                            </a>
                        </div>
                    </div>
                    <div className="col p-0">
                        <img src={latestCardImg} className="img-fluid" alt="..." />
                    </div>
                </div>
                <a className="btn btn-more float-right mt-3 seemore-btn" href="#!">
                    See more
                    <img src={arrow} alt="arr" className="arr-down" />
                </a>
            </div>
        );
    }
};
