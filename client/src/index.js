import React from "react";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/rootReducer";
import { compose } from "redux";

const container = document.getElementById("root");
const root = createRoot(container);

const store = createStore(rootReducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

root.render(app);
