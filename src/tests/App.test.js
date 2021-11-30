import { screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Teste no componente <App.js />', () => {
  it('Deve possuir 3 links Home, About, Favorite Pokémons', () => {
    renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: /home/i });
    const linkAbout = screen.getByRole('link', { name: /about/i });
    const linkFavorites = screen.getByRole('link', { name: /favorite pokémons/i });
    expect(linkHome).toBeInTheDocument();
    expect(linkAbout).toBeInTheDocument();
    expect(linkFavorites).toBeInTheDocument();
  });

  it('Deve redirecionar para a pagina clicada', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');
    expect(history.location.pathname).toBe('/');
    history.push('/about');
    expect(history.location.pathname).toBe('/about');
    history.push('/favorites');
    expect(history.location.pathname).toBe('/favorites');
  });
});
