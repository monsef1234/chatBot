import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Configuration, OpenAIApi } from "openai";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  msgId: null,
  error: null,
  messageData: [],
};
const configuration = new Configuration({
  apiKey:
    "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" ||
    "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" ||
    "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",
});
const openai = new OpenAIApi(configuration);
export const addQuestion = createAsyncThunk(
  "tamra/getAnswer",
  async (message, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: message,
        temperature: 0,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      return {
        answer: response.data.choices[0].text.split("\n").join(""),
        message,
      };
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
const tamraSlice = createSlice({
  name: "tamra",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addQuestion.pending, (state, action) => {
      state.msgId = uuidv4();
      state.messageData.push({
        id: state.msgId,
        messageUser: action.meta.arg,
        messageLoading: true,
      });

      state.error = null;
    }),
      builder.addCase(addQuestion.fulfilled, (state, action) => {
        state.messageData = state.messageData.map((msg) =>
          msg.id === state.msgId
            ? {
                ...msg,
                messageLoading: false,
                botMessage: action.payload.answer,
              }
            : msg
        );
        state.error = null;
      }),
      builder.addCase(addQuestion.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});
export default tamraSlice.reducer;
