import { FooterProps } from './Footer.conf';
import { P } from '../../../../index';
import { LanguageSelect } from '../LanguageSelect/LanguageSelect';

import './Footer.scss';

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
  return (
    <footer className='layoutWrapper__footer' {...props}>
      <div className='container'>
        <div className='footer'>
          <ul className='footer__wrap'>
            <li>
              <P size='l'>
                <LanguageSelect ru='Главная' en='Home' />
              </P>
            </li>
            <li>
              <P size='l'>
                <LanguageSelect ru='Помошь' en='Help' />
              </P>
            </li>
            <li>
              <P size='l'>
                <LanguageSelect ru='О на' en='About Us' />с
              </P>
            </li>
            <li>
              <P size='l'>
                <LanguageSelect ru='Вакансии' en='Jobs' />
              </P>
            </li>
            <li>
              <P size='l'>
                <LanguageSelect ru='Поддержка' en='Support' />
              </P>
            </li>
          </ul>
          <div className='footer__copyright'>
            <div>
              <P size='l'>© DiscDoodad, 2022</P>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
