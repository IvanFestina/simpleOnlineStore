import React from 'react';

import { NavLink } from 'react-router-dom';

import { useAppSelector } from '../../utils/hooks';
import { PATH } from '../routes/RoutesApp';

import s from './Header.module.scss';

import paperStyle from 'common/styles/classes.module.scss';

export const Header = () => {
  const itemsInCart = useAppSelector(state => state.products.products).filter(
    p => p.inCart,
  ).length;

  return (
    <div className={`${s.headerWrapper} ${paperStyle.shadowPaper}`} data-z="paper-1">
      <div className={s.tab}>
        <NavLink to={PATH.ITEM_LIST} className={nav => (nav.isActive ? s.active : '')}>
          Products
        </NavLink>
      </div>
      <div className={s.tab}>
        <NavLink
          to={PATH.SHOPPING_CART}
          className={nav => (nav.isActive ? s.active : '')}
        >
          Purchase Cart
          {itemsInCart > 0 ? <span className={s.count}>{itemsInCart}</span> : ''}
        </NavLink>
      </div>
    </div>
  );
};
