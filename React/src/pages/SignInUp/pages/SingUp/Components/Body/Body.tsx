import {
  InputElem,
  InputPassword,
  useSelectLangText,
} from '../../../../../../components';
import { BodyUpProps } from '../../../../types/interface';

export default function Body({ register, errors, getValues }: BodyUpProps) {
  const textName = useSelectLangText({
    ru: 'Логин',
    en: 'Login',
  });
  const textEmail = useSelectLangText({
    ru: 'Почта',
    en: 'Email',
  });
  const textNumber = useSelectLangText({
    ru: 'Номер телефона',
    en: 'Phone number',
  });
  const textPass = useSelectLangText({
    ru: 'Пароль',
    en: 'Password',
  });
  const textPassRepeat = useSelectLangText({
    ru: 'Повторите пароль',
    en: 'Repeat password',
  });

  return (
    <div className='singUp__body'>
      <InputElem
        req={true}
        register={register}
        type='text'
        name='login'
        textFiled={textName}
        errors={errors}
      />
      <InputElem
        req={true}
        register={register}
        type='email'
        name='email'
        textFiled={textEmail}
        errors={errors}
      />
      <InputElem
        req={true}
        register={register}
        type='tel'
        name='number'
        textFiled={textNumber}
        errors={errors}
      />
      <InputPassword
        req={true}
        register={register}
        getValues={getValues}
        type='password'
        name='password'
        textFiled={textPass}
        errors={errors}
      />
      <InputPassword
        req={true}
        getValues={getValues}
        register={register}
        type='password'
        name='passTwo'
        textFiled={textPassRepeat}
        errors={errors}
        twopass={true}
      />
    </div>
  );
}
