import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Teste do component <About.js />', () => {
  it('Teste se a página contém as informações sobre a Pokédex.', () => {
    renderWithRouter(<App />);
    const linkAbout = screen.getByRole('link', { name: /about/i });
    expect(linkAbout).toBeInTheDocument();
    const text1 = 'This application simulates a Pokédex,'
    + ' a digital encyclopedia containing all Pokémons';
    const text2 = 'One can filter Pokémons by type,'
    + ' and see more details for each one of them';
    userEvent.click(linkAbout);
    const infoPokedex = screen
      .getByText(text1);
    const infoPokedex2 = screen.getByText(text2);
    expect(infoPokedex).toBeInTheDocument();
    expect(infoPokedex2).toBeInTheDocument();
  });

  it('Teste se a página contém um heading h2 com o texto About Pokédex. ', () => {
    renderWithRouter(<App />);
    const linkAbout = screen.getByRole('link', { name: /about/i });
    userEvent.click(linkAbout);
    const heading = screen.getByRole('heading', { name: /about pokédex/i });
    expect(heading).toBeInTheDocument();
  });

  it('Teste se a página contém a seguinte imagem de uma Pokédex ', () => {
    renderWithRouter(<App />);
    const linkAbout = screen.getByRole('link', { name: /about/i });
    userEvent.click(linkAbout);
    const image = screen.getByAltText(/Pokédex/i);
    expect(image.src).toContain('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
