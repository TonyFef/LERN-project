import arrow from "../../../../helpers/arrow-down.svg";

export const LatestCard = ({ title, text, postDate, img }) => {
    return (
        <div className="container mt-4 bg-latest">
            <div className="row">
                <div className="col align-self-center p-5">
                    <h3 className="card-title font-weight-bold">{title}</h3>
                    <p className="card-text">{text}</p>
                    <div className="card-bottom">
                        <span className="card-text">
                            <small className="text-dark">{postDate}</small>
                        </span>
                        <a href="#!" className="btn btn-link float-right text-dark font-weight-bold">
                            Read more
                        </a>
                    </div>
                </div>
                <div className="col p-0">
                    <img src={img} className="img-fluid" alt="..." />
                </div>
            </div>
            <a className="btn btn-more float-right mt-3 seemore-btn" href="#!">
                See more
                <img src={arrow} alt="arr" className="arr-down" />
            </a>
        </div>
    );
};
