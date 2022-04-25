import { Header } from "./Components/header/Header";
import { Main } from "./Components/main/Main";
import { CardTemplate } from "./Components/cards/CardTemplate";
import { Footer } from "./Components/footer/Footer";
import { Form } from "./Components/form/Form";

import { useSelector } from "react-redux";

export const MainPage = () => {
    const articlesList = useSelector((state) => state.articles);

    return (
        <div className="App">
            <div className="container">
                <Header />
                <Main />
                <div className="my-cards">
                    {articlesList.map((elem) => {
                        return <CardTemplate key={elem.id} props={elem} />;
                    })}
                </div>
                <Form />
                <Footer />
            </div>
        </div>
    );
};
