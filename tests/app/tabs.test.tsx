import { renderRouter, screen } from 'expo-router/testing-library';

/**
 * Carrega o diretório real de rotas (src/app), incluindo o layout das abas,
 * e confirma que o app abre no Início sem erros.
 */
describe('App completo', () => {
  it('abre no Início usando o layout real de abas', async () => {
    await renderRouter('./src/app', { initialUrl: '/' });
    expect(await screen.findByText('Antes de pagar, pensa.')).toBeOnTheScreen();
    expect(screen).toHavePathname('/');
  });
});
