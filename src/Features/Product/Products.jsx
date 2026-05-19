import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchData = createAsyncThunk(
    "products/fetchData",
    async () => {
        const data = await fetch('/Data/ProductData.json');
        return data.json();
    });

const ProductsSlice = createSlice({
    name: "Products",
    initialState: {
        item: [],
        loading: false,
        error: null
    },

    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false;
            state.item = action.payload;
        });

        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });

    },
});

export { fetchData };
export default ProductsSlice.reducer