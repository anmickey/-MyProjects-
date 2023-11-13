export const ItemName: React.FC<{ name: string }> = ({ name }): JSX.Element => {
  return (
    <>
      {name.length > 20 ? (
        <span>
          {name
            .split('')
            .map((item, index) => {
              if (index < 19) return item;
            })
            .join('')}
          <span title={name}>...</span>
        </span>
      ) : (
        name
      )}
    </>
  );
};
