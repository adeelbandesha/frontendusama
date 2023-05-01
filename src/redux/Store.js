
import { configureStore } from "@reduxjs/toolkit";
import ServiceSlice from "./ServiceSlice";

const store = configureStore({
    reducer: {
        services: ServiceSlice
    }
});

export { store };