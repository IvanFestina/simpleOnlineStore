import AddToCart from '../../../assets/AddToCart';
import Check from '../../../assets/Check';
import DeleteIcon from '../../../assets/DeleteIcon';
import { deleteProduct, toggleInCartState } from '../../../store/productsSlice';
import { useAppDispatch } from '../../../utils/hooks';

import s from './item.module.scss';

export type ItemPropsType = {
  id: string;
  title: string;
  image?: string;
  description?: string;
  price: string;
  inCart: boolean;
};

export const Item = ({ id, title, image, description, price, inCart }: ItemPropsType) => {
  const dispatch = useAppDispatch();

  const onCheckClickHandler = () => {
    dispatch(toggleInCartState({ id, inCart: !inCart }));
  };
  const onDeleteButtonClickHandler = () => {
    dispatch(deleteProduct({ id }));
  };

  return (
    <div className={s.item}>
      <div className={s.title}>{title}</div>
      {image && <img className={s.photo} alt="item image" src={image} />}
      <div className={s.price}>{price} USD</div>
      <div className={s.description}>{description}</div>
      <div className={s.itemAction}>
        {!inCart && (
          <DeleteIcon
            className={s.deleteIcon}
            onClick={onDeleteButtonClickHandler}
            height={35}
            width={35}
          />
        )}
        {inCart ? (
          <Check
            className={s.checkIcon}
            onClick={onCheckClickHandler}
            height={35}
            width={35}
          />
        ) : (
          <AddToCart
            className={s.checkIcon}
            onClick={onCheckClickHandler}
            height={35}
            width={35}
          />
        )}
      </div>
    </div>
  );
};
