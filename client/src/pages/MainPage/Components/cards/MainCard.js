
import mainCardBanner from "../../../../helpers/mainCardBanner.png";
import { mainCardTitle, mainCardText, mainPostDate } from "../../../../helpers/variables";

export const MainCard = () => {
    return (
        <div className="container mt-5">
            <div className="card mb-3 shadow-sm card-row">
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
};
