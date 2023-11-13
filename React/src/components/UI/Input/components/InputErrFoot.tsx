import { P } from '../../P/P';

export function InputErrFoot({ err }) {
  return (
    <div className='inputFiled__footer'>
      <div className='inputFiled__error'>
        <P size='l'>{err}</P>
      </div>
    </div>
  );
}

export function InputInform({ info }) {
  return (
    <div className='inputFiled__footer'>
      <div className='inputFiled__info'>
        <P size='l'>{info}</P>
      </div>
    </div>
  );
}
