import { NativeTabs } from 'expo-router/native-tabs';

import { colors } from '@/theme';

/**
 * Navegação principal (MVP-01): barra inferior nativa do Android
 * (Material 3) com as cinco seções do dossiê.
 *
 * `md` = ícone Material Symbols (Android); `sf` = SF Symbols (iOS, futuro).
 * `backBehavior="initialRoute"`: o botão voltar do Android, em qualquer aba,
 * leva primeiro ao Início antes de sair do app.
 */
export default function TabsLayout() {
  return (
    <NativeTabs
      backBehavior="initialRoute"
      backgroundColor={colors.surface}
      indicatorColor={colors.savingsSoft}
      iconColor={{ default: colors.textSecondary, selected: colors.brand }}
      labelStyle={{
        default: { color: colors.textSecondary },
        selected: { color: colors.brand },
      }}>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Início</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon md="home" sf="house" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="assistant">
        <NativeTabs.Trigger.Label>Assistente</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon md="forum" sf="bubble.left.and.bubble.right" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="tools">
        <NativeTabs.Trigger.Label>Ferramentas</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon md="calculate" sf="function" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="history">
        <NativeTabs.Trigger.Label>Histórico</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon md="history" sf="clock.arrow.circlepath" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="settings">
        <NativeTabs.Trigger.Label>Configurações</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon md="settings" sf="gearshape" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
