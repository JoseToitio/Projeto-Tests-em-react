import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Test do componente <FavoritePokemons.js />', () => {
  it('Teste se é exibido na tela a mensagem No favorite pokemon found', () => {
    renderWithRouter(<App />);
    const favorite = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(favorite).toBeInTheDocument();
    userEvent.click(favorite);
    const textNotFound = screen.getByText(/no favorite pokemon found/i);
    expect(textNotFound).toBeInTheDocument();
  });

  it('Teste se é exibido todos os cards de pokémons favoritados. ', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);
    const inputFavorite = screen.getByRole('checkbox');
    expect(inputFavorite).toBeInTheDocument();
    userEvent.click(inputFavorite);
    const favorite = screen.getByRole('link', { name: /Favorite Pokémons/i });
    userEvent.click(favorite);
    const pikachu = screen.getByText(/pikachu/i);
    expect(pikachu).toBeInTheDocument();
  });
});
