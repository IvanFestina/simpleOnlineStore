import React from 'react';

import { Button } from '../../../common/Button/Button';
import Modal from '../../../common/Modal/Modal';
import { MESSAGES_FOR_SUCCESS_BAR } from '../../../common/SnackBar/SnackBar';
import { buyProducts, setAppMessage } from '../../../store/productsSlice';
import { useAppDispatch } from '../../../utils/hooks';

import s from './ModalForCart.module.scss';

type ModalForPacksPropsType = {
  modalActive: boolean;
  setModalActive: (setModalActive: boolean) => void;
  sumOfPayment?: number;
};

export const ModalForCart: React.FC<ModalForPacksPropsType> = ({
  modalActive,
  setModalActive,
  sumOfPayment,
}) => {
  const dispatch = useAppDispatch();

  const onClickButtonHandler = () => {
    dispatch(buyProducts());
    dispatch(setAppMessage({ appMessage: MESSAGES_FOR_SUCCESS_BAR.PAYMENT_SUCCESSFUL }));
    setModalActive(false);
  };

  return (
    <div className={s.modalBlock}>
      <Modal active={modalActive} setActive={setModalActive}>
        <h4>Would you like to buy our product?</h4>
        <p> To proceed, you need {sumOfPayment} USD</p>
        <div style={{ display: 'flex' }}>
          <Button style={{ margin: 10 }} red onClick={onClickButtonHandler}>
            Yes
          </Button>
          <Button
            style={{ margin: 10 }}
            green
            onClick={() => {
              setModalActive(false);
            }}
          >
            No
          </Button>
        </div>
      </Modal>
    </div>
  );
};
