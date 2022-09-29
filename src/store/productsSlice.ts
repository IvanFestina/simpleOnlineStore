import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export type ProductState = {
  products: Array<ItemTypes>;
  // createNoteModal: boolean;
};

const initialState: ProductState = {
  products: [
    {
      id: uuidv4(),
      title: 'Cheap car',
      cost: '2000 USD',
      description: "this is the best cheap car we've got",
      photo: 'https://s3-us-west-2.amazonaws.com/usedphotosuk/108342480_614.jpg',
      inCart: false,
    },
    {
      id: uuidv4(),
      title: 'Expensive car',
      cost: '30000 USD',
      description: "this is the best and expensive car we've got",
      photo:
        'https://daxstreet.com/wp-content/uploads/2022/03/0d2m0qkg_car_625x300_12_January_22.jpg',
      inCart: false,
    },
  ],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // setSearchParams(state, action: PayloadAction<{ newValue: string }>) {
    //   if (action.payload.newValue.length >= 2 || action.payload.newValue === '') {
    //     state.searchParams = action.payload.newValue.trim();
    //   }
    // },
  },
});

// export const { } = productsSlice.actions;

export default productsSlice.reducer;
//
// // T Y P E S
type ItemTypes = {
  id: string;
  title?: string;
  photo?: string;
  description?: string;
  cost?: string;
  inCart?: boolean;
};
