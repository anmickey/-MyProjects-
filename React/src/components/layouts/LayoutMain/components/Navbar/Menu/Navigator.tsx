import { links } from '../../../../../../router';
import { P } from '../../../../../index';
import { LanguageSelect } from '../../LanguageSelect/LanguageSelect';
import { NavLink } from 'react-router-dom';

export default function Navigator() {
  const navLinkClass = ({ isActive }): string => {
    return isActive ? 'add' : '';
  };

  return (
    <div className='navbar'>
      <nav className='navbar__wrap'>
        <ul className='navbar__block'>
          {add.map((item) => {
            return (
              <li key={item.path}>
                <NavLink
                  className={navLinkClass}
                  data-testid={item.en}
                  to={item.path}
                  end
                >
                  <P size='m'>
                    <LanguageSelect ru={item.ru} en={item.en} />
                  </P>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

const add = [{ path: links.HOME_ROUTER, ru: 'Главная', en: 'Home' }];
