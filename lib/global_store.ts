import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  loading: boolean;
  isMobileMenuOpen: boolean;
  mode: string;
  color: string;
  language: string;
  compliment: string;
  error: string;
};

const initialState: initialStateType = {
  loading: true,
  isMobileMenuOpen: false,
  mode: "dark",
  color: "rgba(31,233,4,0.478)",
  language: "ltr",
  compliment: "",
  error: "",
};

// export const loadCompliment = createAsyncThunk(
//   "appSlice/loadCompliment",
//   async () => {
//     return await axios
//       .get("https://portfolio-server-cztg.onrender.com/advice")
//       .then((response): string => {
//         return response.data;
//       });
//   }
// );

const appSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    loading: (state) => {
      state.loading = false;
    },
    toogleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    changeColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
    changeMode: (state, action: PayloadAction<string>) => {
      state.mode = action.payload;
    },
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});
export default appSlice.reducer;
export const appSliceActions = appSlice.actions;
