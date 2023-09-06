import { createSlice } from "@reduxjs/toolkit";
import { AboutProjectAPI } from "../interface";

const initialState: AboutProjectAPI = {
    id: 0,
    title: '',
    color: '',
    description: '',
    image: '',
    createdAt: '',
    updatedAt: '',
    address: '',
    latitude: 0,
    longitude: 0
}

const slice = createSlice({
    name: 'project',
    initialState: initialState,
    reducers: {

        setProject(state, action) {
            state.id = action.payload.id;
            state.title = action.payload.title;
            state.color = action.payload.color;
            state.description = action.payload.description;
            state.image = action.payload.image;
            state.createdAt = action.payload.createdAt;
            state.updatedAt = action.payload.updatedAt;
            state.address = action.payload.address;
            state.latitude = action.payload.latitude;
            state.longitude = action.payload.longitude;

        }

    }
})

export const { setProject } = slice.actions

export default slice.reducer