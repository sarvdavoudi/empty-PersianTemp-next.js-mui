import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState: {
    mode: "dark", // Light or dark mode
    direction: "rtl", // Default direction (can be "ltr" or "rtl")
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem("themeMode", state.mode); // Save the new theme
      }
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
    },
    toggleDirection: (state) => {
      state.direction = state.direction === "rtl" ? "ltr" : "rtl";
      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem("themeDirection", state.direction); // Save the new direction
      }
    },
    setDirection: (state, action) => {
      state.direction = action.payload;
    },
  },
});

export const { toggleTheme, setTheme, toggleDirection, setDirection } = themeSlice.actions;

export default themeSlice.reducer;
