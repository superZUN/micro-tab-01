import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface mydataState {
  myData: [];
}

const genInitData = (r: Number, c: number) => {
  let arr = [];
  for (let i = 0; i < r; i++) {
    let row = [];
    for (let j = 0; j < c; j++) {
      row.push(null);
    }
    arr.push(row);
  }
  console.log(arr);
  return arr;
};

const initialState: mydataState = {
  myData: genInitData(100, 100),
};

export const mydataSlice = createSlice({
  name: 'myData',
  initialState,
  reducers: {
    initialize: (state) => {
      console.log('hi');
      state.myData = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
    },
    updateData: (state, action) => {
      console.log('updateData', action);
      const newData = [...state.myData];

      action.payload.forEach(([row, column, oldValue, newValue]) => {
        let rows = newData.length;
        let cols = newData[0].length;
        console.log('row:', row, rows);
        console.log('col:', column, cols);
        if (row >= rows) {
          newData.push([]);
        }
        if (column >= cols) {
          for (let i = 0; i < newData.length; i++) newData[i].push(null);
        }
        newData[row][column] = newValue * 1;
        console.log(newData);
      });

      state.myData = newData;
    },
    //     type: 'updateData',
    //       dataChanges: changes
    //     });

    //     return false;
    //   }

    //   const toggleReadOnly = event => {
    //     dispatch({
    //       type: 'updateReadOnly',
    //       readOnly: event.target.checked
    // case 'updateData':
    //       const newData = [...state.data];

    //       action.dataChanges.forEach(([row, column, oldValue, newValue]) => {
    //         newData[row][column] = newValue;
    //       })

    //       return {
    //         ...state,
    //         data: newData
    //       }
  },
});

// Action creators are generated for each case reducer function
export const { initialize, updateData } = mydataSlice.actions;

export default mydataSlice.reducer;
