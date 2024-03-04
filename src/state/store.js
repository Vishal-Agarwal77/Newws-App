import { thunk } from "redux-thunk"
import reducers from "./reducers"
// import { applyMiddleware, createStore } from "redux"
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore(
    {
        reducer:reducers
    }
);