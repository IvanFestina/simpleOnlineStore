import React, { useState } from 'react';

import { ButtonSecondary } from '../../common/ButtonSecondary/ButtonSecondary';
import paperStyle from '../../common/styles/classes.module.scss';
import { useAppSelector } from '../../utils/hooks';
import { Item } from '../itemList/item/Item';
import s from '../itemList/Products.module.scss';

import { ModalForCart } from './modalForCart/ModalForCart';
import style from './ShoppingCart.module.scss';

export const ShoppingCart = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const productsInCart = useAppSelector(state => state.products.products).filter(
    p => p.inCart,
  );

  const sumOfPayment = productsInCart
    .map(x => Number(x.price))
    .reduce((x, sum) => x + sum, 0);

  return (
    <>
      <div className={s.itemListWrapper}>
        <div
          className={`${s.itemListContainer} ${paperStyle.shadowPaper}`}
          data-z="paper"
        >
          {productsInCart.length > 0 && (
            <div className={s.button}>
              <ButtonSecondary
                className={s.primaryButton}
                onClick={() => setModalActive(true)}
              >
                <h4>Buy</h4>
              </ButtonSecondary>
            </div>
          )}
          <div className={s.itemListBlock}>
            {productsInCart.length ? (
              productsInCart.map(item => (
                <Item
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                  image={item.image}
                  inCart={item.inCart}
                />
              ))
            ) : (
              <div className={style.empty}>
                <h1>Your cart is empty</h1>
              </div>
            )}
          </div>
        </div>
      </div>
      <ModalForCart
        modalActive={modalActive}
        setModalActive={setModalActive}
        sumOfPayment={sumOfPayment}
      />
      ;
    </>
  );
};
