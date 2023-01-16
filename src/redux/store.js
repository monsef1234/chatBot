import { configureStore } from "@reduxjs/toolkit";
import tamraSlice from "./tamraSlice";

export default configureStore({
  reducer: { tamra: tamraSlice },
});
