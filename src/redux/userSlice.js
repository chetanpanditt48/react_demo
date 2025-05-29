  import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
  import axios from "axios";

  export const fetchUsers = createAsyncThunk("users/fetchUsers", async (_, thunkAPI) => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch users");
    }
  });

  const userSlice = createSlice({
    name: "users",
    initialState: {
      users: [],
      loading: false,
      error: null,
    },
    reducers: {
    
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchUsers.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
          state.loading = false;
          state.users = action.payload;
        })
        .addCase(fetchUsers.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload || "Something went wrong";
        });
    },
  });
  export default userSlice.reducer;