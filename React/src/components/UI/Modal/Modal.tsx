import { createPortal } from 'react-dom';
import './Modal.scss';

type PortalT = {
  children: React.ReactNode;
};

const Modal: React.FC<PortalT> = ({ children }): JSX.Element => {
  return (
    <>
      {createPortal(
        <div className='modal'>
          <div className='modal__container'>
            <div className='modal__body'>{children}</div>
          </div>
        </div>,
        document.body
      )}
      ;
    </>
  );
};
export default Modal;
