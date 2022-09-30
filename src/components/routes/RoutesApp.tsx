import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { Error404Page } from '../error/Error404Page';
import { ItemList } from '../itemList/ItemList';
import { ShoppingCart } from '../shoppingCart/ShoppingCart';

export const PATH = {
  ITEM_LIST: '/',
  SHOPPING_CART: '/shopping_cart',
};

export const RoutesApp = () => (
  <div className="Routes">
    <Routes>
      <Route path={PATH.ITEM_LIST} element={<ItemList />} />
      <Route path={PATH.SHOPPING_CART} element={<ShoppingCart />} />
      <Route path="*" element={<Error404Page />} />
    </Routes>
  </div>
);
