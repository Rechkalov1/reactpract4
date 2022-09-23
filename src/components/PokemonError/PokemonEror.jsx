import errorImg from '../12.jpg';
export const PokemonError = ({ message }) => {
  return (
    <div role="alert">
      <img src={errorImg} width="240" alt="sadcat" />
      <p>{message}</p>
    </div>
  );
};
