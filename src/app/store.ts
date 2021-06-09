import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import messagesReducer from "../features/messages/messagesSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    messages: messagesReducer,
  },
});
export { store };
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
