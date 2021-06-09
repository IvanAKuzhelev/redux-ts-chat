import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface MessagesState {
  messages: string[];
  newMessage: string;
}
const initialState: MessagesState = {
  messages: [],
  newMessage: "",
};
const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    sendMessage(state) {
      state.messages.push(state.newMessage);
      state.newMessage = "";
    },
    updateNewMessages(state, action: PayloadAction<string>) {
      state.newMessage = action.payload;
    },
  },
});
export const { sendMessage, updateNewMessages } = messagesSlice.actions;
export default messagesSlice.reducer;
