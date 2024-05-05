import { createSlice } from '@reduxjs/toolkit';
import { getCampers } from 'Services/api';

const Campers = {
  campers: [],
  favorites: [],
  error: null,
  pagination: { page: 1, limit: 4 },
  isLoading: false,
  vehicleType: '',
  equipmentFilters: [],
  location: '',
};

const camperSlice = createSlice({
  name: 'campers',
  initialState: Campers,
  reducers: {
    setPagination(state, action) {
      state.pagination = action.payload;
    },
    setVehicleType(state, action) {
      state.vehicleType = action.payload;
    },
    setLocation(state, action) {
      state.location = action.payload;
    },
    addFilter(state, action) {
      state.equipmentFilters.push(action.payload);
    },
    removeFilter(state, action) {
      state.equipmentFilters = state.equipmentFilters.filter(
        filter => filter !== action.payload
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCampers.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.campers = action.payload;
      });
  },
});

export const {
  setPagination,
  setFilter,
  setVehicleType,
  setLocation,
  removeFilter,
  addFilter,
} = camperSlice.actions;

export const campersReducer = camperSlice.reducer;
