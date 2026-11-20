import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { colors } from '@/theme';

/**
 * Layout raiz. Uma pilha (Stack) contém o grupo de abas e as telas que abrem
 * por cima delas, como o detalhe de uma análise.
 */
export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          contentStyle: { backgroundColor: colors.background },
          headerTintColor: colors.brand,
          headerStyle: { backgroundColor: colors.background },
          headerShadowVisible: false,
        }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="analysis/[id]" options={{ title: 'Análise' }} />
      </Stack>
    </>
  );
}
