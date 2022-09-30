import React, { useState } from 'react';

import { ButtonSecondary } from '../../common/ButtonSecondary/ButtonSecondary';
import { useAppSelector } from '../../utils/hooks';

import { Item } from './item/Item';
import s from './ItemList.module.scss';

import paperStyle from 'common/styles/classes.module.scss';

//

export const ItemList = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const products = useAppSelector(state => state.products.products);

  console.log(products);

  return (
    <div className={s.itemListWrapper}>
      <div className={`${s.itemListContainer} ${paperStyle.shadowPaper}`} data-z="paper">
        <div className={s.button}>
          <ButtonSecondary
            className={s.primaryButton}
            onClick={() => setModalActive(true)}
          >
            <h4>Add Item</h4>
          </ButtonSecondary>
        </div>
        <div className={s.itemListBlock}>
          {products.map(item => (
            <Item
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
              photo={item.photo}
              inCart={item.inCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
