import { createSlice } from "@reduxjs/toolkit";

const storedTheme = localStorage.getItem("theme");

const initialState = {
  mode: storedTheme || "darkTheme",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle: (state) => {
      const themeLocal = localStorage.getItem("theme");
      const newTheme = themeLocal === "lightTheme" ? "darkTheme" : "lightTheme";
      localStorage.setItem("theme", newTheme);
      state.mode = newTheme;
    },
  },
});

export const { toggle } = themeSlice.actions;

export const selectTheme = (state) => state.theme.mode;

export default themeSlice.reducer;
