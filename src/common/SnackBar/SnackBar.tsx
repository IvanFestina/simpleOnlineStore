import { useEffect, useRef, useState } from 'react';

import { CSSTransition } from 'react-transition-group';

import { setAppMessage } from '../../store/productsSlice';
import { NullableType } from '../../store/store';
import { useAppDispatch } from '../../utils/hooks';

import style from './SnackBar.module.scss';

export enum SNACK_BAR_TYPES {
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum MESSAGES_FOR_SUCCESS_BAR {
  NOTHING = '',
  NEW_ITEM_SUCCESSFULLY_ADDED = 'New item successfully added',
  ITEM_SUCCESSFULLY_REMOVED = 'Item successfully removed',
  PAYMENT_SUCCESSFUL = 'Order successfully complete. Thank you, for you purchase',
}

type BarPropsType = {
  message: string;
  type: SNACK_BAR_TYPES;
};

const TINY_DELAY = 300;
const MEDIUM_DELAY = 4000;
const LARGE_DELAY = 4400;

export const SnackBar = ({ message, type }: BarPropsType) => {
  // property on which the display of the SnackBar depends
  const [shownSnackBar, setShownSnackBar] = useState(false);
  const dispatch = useAppDispatch();
  const nodeRef = useRef(null);

  useEffect(() => {
    if (message) {
      setShownSnackBar(true);
    }
  }, [message]);

  // closing SnackBar by click and than clear SnackBar after some time
  const closeTimerId = useRef<NullableType<ReturnType<typeof setTimeout>>>(null);
  const onCloseErrorBarHandler = () => {
    setShownSnackBar(false);
    closeTimerId.current = setTimeout(() => {
      type === SNACK_BAR_TYPES.SUCCESS &&
        dispatch(setAppMessage({ appMessage: MESSAGES_FOR_SUCCESS_BAR.NOTHING }));
    }, TINY_DELAY);
  };

  // closing SnackBar after some time
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setShownSnackBar(false);
    }, MEDIUM_DELAY);

    return () => {
      clearTimeout(timeoutID);
      clearTimeout(closeTimerId.current as ReturnType<typeof setTimeout>);
    };
  }, []);

  // clear appError after some time
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      dispatch(setAppMessage({ appMessage: MESSAGES_FOR_SUCCESS_BAR.NOTHING }));
    }, LARGE_DELAY);

    return () => {
      clearTimeout(timeoutID);
    };
  }, []);

  const finalClassName =
    type === SNACK_BAR_TYPES.SUCCESS
      ? `${style.snackBarWrapper} ${style.successBarWrapper}`
      : style.snackBarWrapper;

  return (
    <CSSTransition
      in={shownSnackBar}
      timeout={300}
      classNames={style}
      unmountOnExit
      mountOnEnter
      nodeRef={nodeRef}
    >
      <div className={finalClassName} ref={nodeRef}>
        <p>{message}</p>
      </div>
    </CSSTransition>
  );
};
