/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

const locomotiveSlice = createSlice({
  name: 'locomotives',
  initialState: {
    locomotives: [
      {
        id: 1, title: 'Локомотив 1', series: 523, sections: 27, coordinates: [51.893374, 67.158941],
      },
      {
        id: 2, title: 'Локомотив 2', series: 457, sections: 55, coordinates: [49.441297, 75.568511],
      },
      {
        id: 3, title: 'Локомотив 3', series: 567, sections: 34, coordinates: [48.525568, 60.982001],
      },
    ],
  },
  reducers: {
    addLocomotive(state, action) {
      console.log(state);
      console.log(action);

      state.locomotives.push({
        id: new Date().toISOString(),
        title: action.payload.title,
        series: action.payload.series,
        sections: action.payload.sections,
        coordinates: action.payload.coordinates,
      });
    },
    removeLocomotive(state, action) {
      state.locomotives = state.locomotives.filter((locomotive) => locomotive.id !== action.payload);
    },
    // editLocomotive(state, action) {},
  },
});

export const { addLocomotive, removeLocomotive, editLocomotive } = locomotiveSlice.actions;

export default locomotiveSlice.reducer;
