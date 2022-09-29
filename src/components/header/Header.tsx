import React from 'react';

import { NavLink } from 'react-router-dom';

import { PATH } from '../routes/RoutesApp';

import s from './Header.module.scss';

import paperStyle from 'common/styles/classes.module.scss';

export const Header = () => {
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
        </NavLink>
      </div>
    </div>
  );
};
