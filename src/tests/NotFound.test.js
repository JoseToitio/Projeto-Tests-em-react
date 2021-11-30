import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <NotFount.js />', () => {
  it('Teste se página contém um heading h2 com o texto ', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pageoff');
    const heading = screen.getByRole('heading',
      { name: /page requested not found/i, level: 2 });
    expect(heading).toBeInTheDocument();
  });

  it('Teste se página mostra a imagem ', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pageoff');
    const image = screen
      .getByAltText(/Pikachu crying because the page requested was not found/i);
    expect(image.src).toContain('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
