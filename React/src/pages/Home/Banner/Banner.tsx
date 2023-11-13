import { useNavigate } from 'react-router-dom';
import { $, LanguageSelect, P } from '../../../components';
import imgen from '../../../media/Home/Banner/skladen.jpg';
import imgru from '../../../media/Home/Banner/skladru.jpg';
import { useAppSelector } from '../../../store';
import { useMemo } from 'react';
import { links } from '../../../router';

import './Banner.scss';

export default function Banner(): JSX.Element {
  return (
    <section className='banner'>
      <div className='container'>
        <div className='banner__row'>
          <div className='banner__wrap'>
            <BannerImg />
            <BannerArticle />
          </div>
        </div>
      </div>
    </section>
  );
}

const BannerImg: React.FC = (): JSX.Element => {
  const { select } = useAppSelector((s) => s.lang);
  const router = useNavigate();

  const img = useMemo(() => {
    $('.bannerimg').add('load');
    $('.bannerimg').style('backgroundImage', ``);
    return select.includes('Ru') ? imgru : imgen;
  }, [select]);

  return (
    <div onClick={() => router(links.DISC)} className='bannerimg load'>
      <img
        hidden
        src={img}
        onLoad={(e) => handleImageLoaded(e, img, '.bannerimg')}
      />
    </div>
  );
};

const BannerArticle = (): JSX.Element => {
  return (
    <div className='bannerarticle'>
      <div className='bannerarticle__wrap'>
        <div className='bannerarticle__body'>
          <div className='bannerarticle__text'>
            <P size='l'>
              <LanguageSelect
                ru='Разнообразный и богатый опыт реализация намеченных плановых заданий требует определения и уточнения соответствующих условий активизации.'
                en='Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
					 ab vero perspiciatis animi blanditiis nihil magnam, beatae numquam
					 veritatis accusamus!'
              />
            </P>
          </div>
        </div>
      </div>
    </div>
  );
};

const handleImageLoaded = (
  e: React.SyntheticEvent<HTMLDivElement>,
  item,
  elem: string
) => {
  const target = e.target as HTMLElement;

  $(target.closest(elem) as HTMLElement).style(
    'backgroundImage',
    `url(${item})`
  );

  $(target.closest(elem) as HTMLElement).remove('load');
};
