import React, { ChangeEvent, useRef, useState } from 'react';

import Check from '../../../assets/Check';
import DownloadIcon from '../../../assets/DownloadIcon';
import { Button } from '../../../common/Button/Button';
import { ButtonSecondary } from '../../../common/ButtonSecondary/ButtonSecondary';
import { InputText } from '../../../common/InputText/InputText';
import Modal from '../../../common/Modal/Modal';
import { Textarea } from '../../../common/Textarea/Textarea';
import { createItem } from '../../../store/productsSlice';
import { useAppDispatch } from '../../../utils/hooks';

import s from './ModalForProducts.module.scss';

type ModalForPacksPropsType = {
  modalActive: boolean;
  setModalActive: (setModalActive: boolean) => void;
};

export const ModalForProducts: React.FC<ModalForPacksPropsType> = ({
  modalActive,
  setModalActive,
}) => {
  const dispatch = useAppDispatch();
  const inRef = useRef<HTMLInputElement>(null);
  const [itemTitle, setItemTitle] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const [file64, setFile64] = useState('');

  const isPreviewShow = file64 !== '';

  const onChangePackImage = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const itemImage = e.target.files && e.target.files[0];

    if (itemImage) {
      reader.onloadend = () => {
        setFile64(reader.result as string);
      };
      reader.readAsDataURL(itemImage);
    }
  };

  const createPackHandler = () => {
    dispatch(createItem({ title: itemTitle, price, description, image: file64 }));
    setItemTitle('');
    setPrice('');
    setDescription('');
    setModalActive(false);
    setFile64('');
  };

  return (
    <div className={s.modalBlock}>
      <Modal active={modalActive} setActive={setModalActive}>
        <h4>Add item for selling</h4>
        <InputText
          value={itemTitle}
          onChangeText={setItemTitle}
          className={s.packTitleInputBlock}
          placeholder="Enter item's name"
        />
        <InputText
          type="number"
          value={price}
          onChangeText={setPrice}
          className={s.packTitleInputBlock}
          placeholder="Enter item's price in USD"
        />
        <Textarea
          placeholder="Describe your item"
          value={description}
          onChangeText={setDescription}
        />
        <div className={s.optionsBlock}>
          <input ref={inRef} type="file" onChange={onChangePackImage} />
          <ButtonSecondary
            className={s.downloadButton}
            onClick={() => inRef.current && inRef.current.click()}
          >
            <span>upload image</span>
            <DownloadIcon />
          </ButtonSecondary>
        </div>
        {isPreviewShow && (
          <div className={s.imagePreview}>
            <p>
              <span>Preview</span>
              <Check onClick={() => setFile64('')} className={s.closeIcon} />
            </p>
            <div className={s.imagePreviewImg}>
              <img src={file64} alt="New item preview" />
            </div>
          </div>
        )}
        <Button disabled={itemTitle === '' || price === ''} onClick={createPackHandler}>
          Create item
        </Button>
      </Modal>
    </div>
  );
};
