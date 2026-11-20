import { renderRouter, screen } from 'expo-router/testing-library';

import AnalysisDetailScreen from '@/app/analysis/[id]';
import AssistantScreen from '@/app/(tabs)/assistant';
import HistoryScreen from '@/app/(tabs)/history';
import HomeScreen from '@/app/(tabs)/index';
import SettingsScreen from '@/app/(tabs)/settings';
import ToolsScreen from '@/app/(tabs)/tools';

/**
 * Teste-sentinela da Etapa 0: confirma que a infraestrutura de testes funciona
 * e que cada rota do dossiê (seção 6.4) existe e renderiza no lugar certo.
 * As abas usam a navegação de pilha nos testes porque a barra nativa
 * não existe no ambiente Node.
 */
describe('Rotas da Etapa 0', () => {
  it('abre o Início com a marca', async () => {
    await renderRouter({ index: HomeScreen }, { initialUrl: '/' });
    expect(await screen.findByText('Antes de pagar, pensa.')).toBeOnTheScreen();
    expect(screen).toHavePathname('/');
  });

  it.each([
    ['assistant', AssistantScreen, 'Conte o que você quer comprar'],
    ['tools', ToolsScreen, 'Calcule antes de decidir'],
    ['history', HistoryScreen, 'Suas análises salvas'],
    ['settings', SettingsScreen, 'Seus dados, seu controle'],
  ])('abre a rota /%s', async (route, Screen, title) => {
    await renderRouter({ [route]: Screen }, { initialUrl: `/${route}` });
    expect(await screen.findByText(title)).toBeOnTheScreen();
    expect(screen).toHavePathname(`/${route}`);
  });

  it('abre o detalhe de uma análise pelo id', async () => {
    await renderRouter({ 'analysis/[id]': AnalysisDetailScreen }, { initialUrl: '/analysis/42' });
    expect(await screen.findByText('ANÁLISE 42')).toBeOnTheScreen();
    expect(screen).toHavePathname('/analysis/42');
  });
});
