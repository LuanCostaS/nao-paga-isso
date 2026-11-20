import type { ReactNode } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView, type Edge } from 'react-native-safe-area-context';

import { colors, spacing } from '@/theme';

type ScreenContainerProps = {
  children: ReactNode;
  /** Bordas que respeitam a área segura (notch, barra de status). */
  edges?: Edge[];
};

/**
 * Contêiner padrão de tela: fundo do tema, área segura e rolagem.
 * A rolagem garante que nada fique cortado com fonte ampliada.
 */
export function ScreenContainer({ children, edges = ['top'] }: ScreenContainerProps) {
  return (
    <SafeAreaView style={styles.safeArea} edges={edges}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    paddingBottom: spacing.xxl,
  },
});
