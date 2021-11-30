import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokedex.js />', () => {
  beforeEach(() => {
    renderWithRouter(<App />);
  });
  it('Teste se a página contém um heading h2 com o texto "Encountered pokémons"', () => {
    const heading = screen.getByText(/encountered pokémons/i);
    expect(heading).toBeInTheDocument();
  });

  it('O botão deve conter o texto Próximo pokémon', () => {
    const button = screen.getByRole('button', { name: /próximo pokémon/i });
    expect(button).toBeInTheDocument();
  });

  it('Teste se a pokédex tem os botões de filtro', () => {
    const button = screen.getAllByTestId('pokemon-type-button');
    const sete = 7;
    const electric = screen.getByRole('button', { name: /electric/i });
    const fire = screen.getByRole('button', { name: /fire/i });
    const bug = screen.getByRole('button', { name: /bug/i });
    const poison = screen.getByRole('button', { name: /poison/i });
    const psychic = screen.getByRole('button', { name: /psychic/i });
    const normal = screen.getByRole('button', { name: /normal/i });
    const dragon = screen.getByRole('button', { name: /dragon/i });
    expect(button).toHaveLength(sete);
    expect(fire).toBeInTheDocument();
    expect(bug).toBeInTheDocument();
    expect(poison).toBeInTheDocument();
    expect(psychic).toBeInTheDocument();
    expect(normal).toBeInTheDocument();
    expect(dragon).toBeInTheDocument();
    expect(electric).toBeInTheDocument();
  });

  it('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    const buttonAll = screen.getByRole('button', { name: /all/i });
    expect(buttonAll).toBeInTheDocument();
    userEvent.click(buttonAll);
    const pikachu = screen.getByText(/pikachu/i);
    expect(pikachu).toBeInTheDocument();
  });
});
