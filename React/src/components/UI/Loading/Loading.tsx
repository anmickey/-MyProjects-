import './Loading.scss';

export function Loading({ btn = '' }): JSX.Element {
  return (
    <div className={'loading ' + btn}>
      <div className="loading__elem"></div>
    </div>
  );
}
