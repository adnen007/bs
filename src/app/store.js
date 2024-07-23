import { configureStore } from "@reduxjs/toolkit";
import buildingsReducer from "../features/buildings/buildingsSlice";
import userReducer from "../features/user/userSlice";
import apartmentsRedcuer from "../features/aparments/aparmentsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    buildings: buildingsReducer,
    apartments: apartmentsRedcuer,
  },
});

export default store;
