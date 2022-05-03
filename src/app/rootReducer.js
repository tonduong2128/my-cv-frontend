import { combineReducers } from "@reduxjs/toolkit";
import apiContactSlice from "../slice/apiContactSlice";
import apiDescriptionSlice from "../slice/apiDescriptionSlice";
import apiInfoSlice from "../slice/apiInfoSlice";

const rootReducer = combineReducers(
    {
        info: apiInfoSlice,
        contact : apiContactSlice,
        description: apiDescriptionSlice
    }
)

export default rootReducer  