import React from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';

import { Error404Page } from '../error/Error404Page';
import { Products } from '../itemList/Products';
import { ShoppingCart } from '../shoppingCart/ShoppingCart';

export const PATH = {
  ITEM_LIST: '/item_list',
  SHOPPING_CART: '/shopping_cart',
};

export const RoutesApp = () => (
  <div className="Routes">
    <Routes>
      <Route path="/" element={<Navigate to={PATH.ITEM_LIST} />} />
      <Route path={PATH.ITEM_LIST} element={<Products />} />
      <Route path={PATH.SHOPPING_CART} element={<ShoppingCart />} />
      <Route path="*" element={<Error404Page />} />
    </Routes>
  </div>
);
