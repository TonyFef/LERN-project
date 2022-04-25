import { useSelector } from "react-redux";

export const Main = () => {
    const header = useSelector((state) => state.main.header);
    const subheader = useSelector((state) => state.main.subheader);
    const banner = useSelector((state) => state.main.banner);

    return (
        <div className="head-section">
            <div className="container">
                <div className="row p-5" id="main-contents">
                    <div className="col align-self-center">
                        <h1 className="font-weight-bold main-title">{header}</h1>
                        <h2 className="text-secondary font-weight-lighter main-text">{subheader}</h2>
                    </div>
                    <div className="col align-self-center">
                        <img src={banner} className="img-fluid" alt="main-img" />
                    </div>
                </div>
            </div>
        </div>
    );
};
