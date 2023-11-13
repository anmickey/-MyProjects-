import React, { useState, useEffect } from 'react';

import { ReactComponent as Eye } from '../../../media/icons/eye.svg';
import { ReactComponent as Close } from '../../../media/icons/closeEye.svg';
import { InputErrFoot, InputInform } from './components/InputErrFoot';
import { focus, focusinput, renderInput } from './components/inputFocus';
import { Location, useLocation } from 'react-router-dom';
import { valid } from './components/validate';
import { InputFiledTypes } from '../../../pages/SignInUp/types/interface';

import { useAppSelector } from '../../../store';
import { useSelectLangText } from '../../index';

import './style/inputFiled.scss';

export const InputPassword: React.FC<InputFiledTypes> = ({
  type,
  textFiled,
  register,
  req,
  name,
  getValues,
  errors,
  twopass,
}) => {
  const [passSea, setPassSea] = useState(false);
  const { pathname }: Location = useLocation();
  const err: string = errors[name] && (errors[name]?.message || 'Error');
  const { select } = useAppSelector((state) => state.lang);

  useEffect(() => {
    renderInput();
  }, []);

  const textErrorPass = useSelectLangText({
    ru: 'Пароль не совпадает',
    en: "Password doesn't match",
  });

  const textError = useSelectLangText({
    ru: 'Поле должно быть заполнено',
    en: 'Field must be filled',
  });

  const pass = select.includes('Ru')
    ? 'Минимум восемь символов, минимум одна заглавная буква и одна цифра'
    : 'At least eight characters, at least one capital letter and one number';

  const сoincidence = pathname.includes('up')
    ? {
        pattern: !twopass ? valid(type, select) : undefined,
        validate: twopass
          ? (value: string) =>
              (getValues && value == getValues('password')) || textErrorPass
          : undefined,
      }
    : null;

  return (
    <div className='inputFiled'>
      <div onClick={focusinput} className='inputFiled__background'>
        <div className='inputFiled__block'>
          <div className='inputFiled__text old all'>{textFiled}</div>
          <input
            {...register(name, {
              required: req ? textError : false,
              ...сoincidence,
            })}
            onFocus={focus}
            onBlur={focus}
            type={passSea ? 'text' : type}
          />
          <div
            onClick={() => setPassSea(() => !passSea)}
            className='inputFiled__eye'
          >
            {passSea ? <Close /> : <Eye />}
          </div>
        </div>
      </div>
      {err || twopass || pathname.includes('/in') ? (
        <InputErrFoot err={err} />
      ) : (
        <InputInform info={pass} />
      )}
    </div>
  );
};

export const InputElem: React.FC<InputFiledTypes> = ({
  type,
  textFiled,
  register,
  req,
  name,
  errors,
  checkErr = true,
}) => {
  const err: string = errors[name] && (errors[name]?.message || 'Error');
  const { select } = useAppSelector((state) => state.lang);

  useEffect(() => {
    renderInput();
  }, []);

  const textError = useSelectLangText({
    ru: 'Поле должно быть заполнено',
    en: 'Field must be filled',
  });

  return (
    <div className='inputFiled'>
      <div
        onClick={focusinput}
        className={
          err ? 'inputFiled__background err' : 'inputFiled__background'
        }
      >
        <div className='inputFiled__block'>
          <div className='inputFiled__text old all'>{textFiled}</div>
          <input
            {...register(name, {
              required: req ? textError : false,
              pattern: valid(type, select),
            })}
            onFocus={focus}
            onBlur={focus}
            type={type}
          />
        </div>
      </div>
      {checkErr && <InputErrFoot err={err} />}
    </div>
  );
};
