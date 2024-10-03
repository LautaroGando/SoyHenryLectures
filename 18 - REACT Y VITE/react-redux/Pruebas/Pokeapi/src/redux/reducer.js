import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    userPokemons: [],
};

const userSlice = createSlice({
    name: "pokemons",
    initialState,
    reducers: {

    },
});

export default userSlice;