import { configureStore } from "@reduxjs/toolkit";

import chatBoxReducer from "./reducer.js";

export let store = configureStore({
  reducer: {
    chatBox: chatBoxReducer
  }
});
