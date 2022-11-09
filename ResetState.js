// 10.	How to reset state in Redux?

const intialState = [];

const exampleReducer = createSlice({
  name: "example",
  intialState,
  reducers: {
    reset: () => intialState,
  },
});
export const { reset } = exampleReducer.actions;
export default exampleReducer;
