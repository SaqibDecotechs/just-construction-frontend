import { createSlice } from "@reduxjs/toolkit";

const storedCountry = localStorage.getItem("selectedCountry");
const storedLocale = localStorage.getItem("selectedLocale");
const hasShownModal = localStorage.getItem("countryModalShown");

// Define country-locale mappings
const countryLocaleMap = {
  UK: 'en-GB',
  US: 'en-US'
};

const initialState = {
  selectedCountry: storedCountry || null,
  selectedLocale: storedLocale || null,
  showModal: !hasShownModal,
};

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    selectCountry: (state, action) => {
      const country = action.payload;
      const locale = countryLocaleMap[country];
      
      state.selectedCountry = country;
      state.selectedLocale = locale;
      state.showModal = false;
      
      localStorage.setItem("selectedCountry", country);
      localStorage.setItem("selectedLocale", locale);
      localStorage.setItem("countryModalShown", "true");
    },
    hideModal: (state) => {
      state.showModal = false;
      localStorage.setItem("countryModalShown", "true");
    },
    resetCountrySelection: (state) => {
      state.selectedCountry = null;
      state.selectedLocale = null;
      state.showModal = true;
      localStorage.removeItem("selectedCountry");
      localStorage.removeItem("selectedLocale");
      localStorage.removeItem("countryModalShown");
    },
  },
});

export const { selectCountry, hideModal, resetCountrySelection } = countrySlice.actions;

export const selectSelectedCountry = (state) => state.country.selectedCountry;
export const selectSelectedLocale = (state) => state.country.selectedLocale;
export const selectShowModal = (state) => state.country.showModal;

export default countrySlice.reducer;