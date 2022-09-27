import { createSlice } from '@reduxjs/toolkit';

export type NotesState = {
  // notes: Array<NoteTextType>;
  // createNoteModal: boolean;
};

const initialState: NotesState = {
  notes: [],
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    // setSearchParams(state, action: PayloadAction<{ newValue: string }>) {
    //   if (action.payload.newValue.length >= 2 || action.payload.newValue === '') {
    //     state.searchParams = action.payload.newValue.trim();
    //   }
    // },
  },
});

// export const { } = notesSlice.actions;

export default notesSlice.reducer;
//
// // T Y P E S
// type PostNoteParamsType = {
//   title?: string;
//   note_text?: string;
//   color?: ColorSamplesType;
//   note_mode?: string;
// };
