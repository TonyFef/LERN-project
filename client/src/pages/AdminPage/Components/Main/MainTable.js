import { connect } from "react-redux";
import { useSelector } from "react-redux";

const MainTable = () => {
    const header = useSelector((state) => state.main.header);
    const subheader = useSelector((state) => state.main.subheader);
    const banner = useSelector((state) => state.main.banner);

    return (
        <table className="table ">
            <thead>
                <tr>
                    <th>Main Header</th>
                    <th>Main Subheader</th>
                    <th>Main Banner</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="mw-100px">{header}</td>
                    <td className="mw-100px">{subheader}</td>
                    <td className="mw-100px">
                        <a href={banner} target="_blank" rel="noopener noreferrer">
                            Banner
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

const mapStateToProps = (state) => {
    return {
        myMain: state.main,
    };
};

export default connect(mapStateToProps, null)(MainTable);
