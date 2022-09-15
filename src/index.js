import React from "react";
import ReactDOM from "react-dom/client";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

import { rootReducer } from "./redux/rootReducer";
import "./index.css";
import App from "./App";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(app);
