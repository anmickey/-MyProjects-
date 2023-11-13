import { useEffect } from 'react';
import { P } from '../P/P';
import { $ } from '../../customeJQ/customeJQ';
import { ReactComponent as Check } from '../../../media/icons/check.svg';
import { LanguageSelect } from '../../layouts/LayoutMain/components/LanguageSelect/LanguageSelect';
import { ArrayType, CollapsibleConf } from './Collapsible.config';

import './Collapsible.scss';

export const Collapsible: React.FC<CollapsibleConf> = ({
  arr,
  title,
  first = '',
  className = '',
}): JSX.Element => {
  function checkItem(item: ArrayType, e: React.MouseEvent) {
    e.stopPropagation();
    item.handler && item.handler(item);

    setTimeout(() => {
      $(
        (e.target as HTMLElement).closest('.collapsible') as HTMLElement
      ).remove('show');
    }, 200);
  }

  useEffect(() => {
    window.addEventListener('click', handlerDelegation);
    return function cleanup() {
      window.removeEventListener('click', handlerDelegation);
    };
  }, []);

  function handlerClick(e) {
    $('.collapsible').remove('show');
    $((e.target as HTMLElement).closest('.collapsible') as HTMLElement).toggle(
      'show'
    );
  }

  function regCheck(item: ArrayType) {
    const reg = new RegExp(`${item.ru}|${item.en}`);
    return reg.test(first);
  }

  return (
    <div className={'collapsible ' + className} onClick={handlerClick}>
      <div className='collapsible__title'>{title}</div>
      <div className='collapsible__body'>
        {
          <ul>
            {arr?.map((item) => {
              return (
                <li
                  className={regCheck(item) ? ' check ' : ''}
                  onClick={(e) => checkItem(item, e)}
                  key={item.id}
                >
                  {regCheck(item) && (
                    <P size='m' className='collapsible__icon'>
                      <Check />
                    </P>
                  )}
                  <P size='m'>
                    <LanguageSelect ru={item.ru} en={item.en} />
                  </P>
                </li>
              );
            })}
          </ul>
        }
      </div>
    </div>
  );
};

const handlerDelegation = (e: Event) => {
  const { target } = e;
  if (!(target as HTMLElement).closest('.collapsible')) {
    $('.collapsible').remove('show');
  }
};
