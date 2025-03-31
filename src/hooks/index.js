import { useState, useEffect } from 'react';

export const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return {
    isOpenModal,
    onOpenModal: () => setIsOpenModal(true),
    onCloseModal: () => setIsOpenModal(false)
  };
};

export const useDidMount = () => {
  const [didMount, setDidMount] = useState(false);
  useEffect(() => {
    setDidMount(true);
  }, []);
  return didMount;
};
