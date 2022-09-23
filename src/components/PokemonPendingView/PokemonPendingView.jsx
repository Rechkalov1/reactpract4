import React from 'react';
import { ImSpinner } from 'react-icons/im';
import { PokemonDataView } from 'components/PokemonDataView/PokemonDataView';
import pendingImage from '../pending.jpg';
export const PokemonPendingView = ({ pokemonName }) => {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImage,
        },
      },
    },
    stats: [],
  };

  return (
    <div role="alert">
      <div>
        <ImSpinner />
        Загружаем ...
      </div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  );
};
