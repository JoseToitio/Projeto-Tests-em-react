import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o component <Pokemon.js />', () => {
  beforeEach(() => {
    renderWithRouter(<App />);
  });
  it('Teste se é renderizado um card com as informações de determinado pokémon.', () => {
    const nome = screen.getByText(/pikachu/i);
    const type = screen.getAllByText('Electric');
    const peso = screen.getByText(/Average weight: 6.0 kg/i);
    expect(nome).toBeInTheDocument();
    expect(type[0]).toContainHTML('<p data-testid="pokemon-type">Electric</p>');
    expect(peso).toBeInTheDocument();
  });

  it('A imagem do Pokémon deve ser exibida.', () => {
    const image = screen.getByAltText(/pikachu sprite/i);
    expect(image.src).toContain('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  it('Teste se o card do Pokémon indicado na Pokédex contém um link de navegação', () => {
    const link = screen.getByRole('link', { name: /more details/i });
    userEvent.click(link);
    const pokemon = screen.getByRole('heading', { name: /pikachu details/i, level: 2 });
    expect(pokemon).toBeInTheDocument();
  });

  it('Teste também se a URL exibida no navegador muda para /pokemon/<id>,', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pokemon/25');
    const param = history.location.pathname;
    expect(param).toBe('/pokemon/25');
  });

  it('Teste se existe um ícone de estrela nos Pokémons favoritados', () => {
    const detail = screen.getByText('More details');
    userEvent.click(detail);
    const favorite = screen.getByRole('checkbox');
    userEvent.click(favorite);
    const starIcon = screen.getByAltText('Pikachu is marked as favorite');
    expect(starIcon.src).toContain('/star-icon.svg');
  });
});
