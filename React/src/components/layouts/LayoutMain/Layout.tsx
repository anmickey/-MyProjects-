import { Outlet } from 'react-router-dom';
import { createContext, useState } from 'react';
import Modal from '../../UI/Modal/Modal';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { $ } from '../../customeJQ/customeJQ';

import './Layout.scss';

export const ContextPortal = createContext<ModelType>(null!);

type ModelType = {
  openModal: (arg: React.ReactNode) => void;
  closeModal: () => void;
};

type ModelArrayConfig = {
  id: number | string;
  modalItem: JSX.Element;
};

export const Layout = (): JSX.Element => {
  const [model, setModel] = useState<ModelArrayConfig | object>({});

  function openModal(children: React.ReactNode) {
    $('body').add('lock');
    setModel({ modalItem: <Modal>{children}</Modal> });
  }

  function closeModal() {
    $('body').remove('lock');
    setModel({});
  }

  return (
    <ContextPortal.Provider value={{ openModal, closeModal }}>
      {'modalItem' in model && model.modalItem}
      <div className='layoutWrapper'>
        <Navbar />
        <div className='layoutWrapper__body'>
          <Outlet />
        </div>
        <div className='footer__saveblock'></div>
        <Footer />
      </div>
    </ContextPortal.Provider>
  );
};
