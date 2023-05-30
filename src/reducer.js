import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  value: []
};

let chatBoxReducer = createSlice({
  name: "chatBox",
  initialState,
  reducers: {
    addChatBox: (state, action) => {
      state.value.push(action.payload);
    },
    addChatData: (state, action) => {
      let { message, index } = action.payload;
      state.value[index].push({
        text: message,
        self: true
      });
      state.value.forEach((box, Boxindex) => {
        if (Boxindex != index) {
          box.push({
            text: message,
            self: false
          });
        }
      });
    },
    remove: (state, action) => {
      state.value.splice(action.payload, 1);
    }
  }
});

export default chatBoxReducer.reducer;

export let selector = (state) => state.chatBox.value;

export let { addChatBox } = chatBoxReducer.actions;
export let { addChatData } = chatBoxReducer.actions;
export let { remove } = chatBoxReducer.actions;
