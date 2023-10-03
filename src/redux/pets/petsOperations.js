import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/services/pets';

export const fetchAllPets = createAsyncThunk(
  'pets/fetch-all',
  async (_, thunkAPI) => {
    try {
      const data = await api.getAllPets();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const fetchAddPet = createAsyncThunk(
  'pets/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addPet(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const fetchDeletePet = createAsyncThunk(
  'pets/delete',
  async (id, { rejectWithValue }) => {
    try {
      await api.deletePet(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);
