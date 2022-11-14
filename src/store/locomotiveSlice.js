/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

const locomotiveSlice = createSlice({
  name: 'locomotives',
  initialState: {
    locomotives: [
      {
        id: 1, title: 'Loco 1', series: 523, sections: 27, coordinates: '51.471980 71.206835',
      },
      {
        id: 2, title: 'Loco 2', series: 523, sections: 27, coordinates: '51.471980 71.206835',
      },
      {
        id: 3, title: 'Loco 3', series: 523, sections: 27, coordinates: '51.471980 71.206835',
      },
    ],
  },
  reducers: {
    // addLocomotive(state, action) {},
    removeLocomotive(state, action) {
      state.locomotives = state.locomotives.filter((locomotive) => locomotive.id !== action.payload);
    },
    // editLocomotive(state, action) {},
  },
});

export const { addLocomotive, removeLocomotive, editLocomotive } = locomotiveSlice.actions;

export default locomotiveSlice.reducer;
