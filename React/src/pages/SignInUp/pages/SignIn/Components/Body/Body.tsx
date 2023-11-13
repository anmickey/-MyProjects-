import {
  InputElem,
  InputPassword,
  useSelectLangText,
} from '../../../../../../components';
import { BodyInProps } from '../../../../types/interface';
import Remember from '../Remember/Remember';

export default function Body({
  register,
  errors,
  setRemember,
  remember,
}: BodyInProps) {
  const textName = useSelectLangText({
    ru: 'Почта / Номер телефона',
    en: 'Email / Phone number',
  });
  const textPass = useSelectLangText({
    ru: 'Пароль',
    en: 'Password',
  });
  return (
    <>
      <div className='singIn__blockOne'>
        <InputElem
          req={true}
          register={register}
          type='text'
          name='email'
          textFiled={textName}
          errors={errors}
        />

        <InputPassword
          req={true}
          name='password'
          register={register}
          type='password'
          textFiled={textPass}
          errors={errors}
        />
      </div>
      <Remember checked={remember} onClick={() => setRemember(!remember)} />
    </>
  );
}
