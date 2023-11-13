import { useMemo } from 'react';
import { useAppSelector } from '../../../../../store';

export type LanguangeConf = { en: string; ru: string };

export const LanguageSelect: React.FC<LanguangeConf> = ({
  en,
  ru,
}): JSX.Element => {
  const { select } = useAppSelector((state) => state.lang);
  return <span>{select.includes('Ru') ? ru : en}</span>;
};

export function useSelectLangText({ ru, en }: LanguangeConf): string {
  const { select } = useAppSelector((state) => state.lang);
  return useMemo(() => {
    return select.includes('Ru') ? ru : en;
  }, [select]);
}
