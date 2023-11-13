import './Loading.scss';

export const LoadingSuspense: React.FC = (): JSX.Element => {
  return (
    <div className='loadblock'>
      <div className='loading'></div>
    </div>
  );
};
