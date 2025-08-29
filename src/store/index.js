import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./slices/themeSlice";
import authReducer from "./slices/authSlice";
import countryReducer from "./slices/countrySlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    country: countryReducer,
  },
});

export default store;