import React, { useState } from 'react';

import { ButtonSecondary } from '../../common/ButtonSecondary/ButtonSecondary';
import { useAppSelector } from '../../utils/hooks';

import s from './ItemList.module.scss';

import paperStyle from 'common/styles/classes.module.scss';

export const ItemList = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const products = useAppSelector(state => state.products.products);

  return (
    <div className={s.itemListWrapper}>
      <div
        className={`${s.itemListContainer} ${paperStyle.shadowPaper}`}
        data-z="paper"
      />
      <div className={s.settingsBlock}>
        <div className={s.button}>
          <ButtonSecondary
            className={s.primaryButton}
            onClick={() => setModalActive(true)}
          >
            Add Item
          </ButtonSecondary>
        </div>
      </div>
      <div className={s.itemListBlock}>
        {products.map(item => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    </div>
  );
};
