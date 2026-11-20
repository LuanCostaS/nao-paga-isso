import { StyleSheet, Text, View } from 'react-native';

import { ScreenContainer } from '@/components/ScreenContainer';
import { colors, radius, spacing, typography } from '@/theme';

/** Início. Conteúdo completo (campo principal, atalhos, últimas análises) na Etapa 1. */
export default function HomeScreen() {
  return (
    <ScreenContainer>
      <View style={styles.brandBlock} accessible accessibilityRole="header">
        <Text style={styles.wordmark}>
          NÃO PAGA <Text style={styles.wordmarkAccent}>ISSO</Text>
        </Text>
        <Text style={styles.tagline}>Antes de pagar, pensa.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Fundação pronta</Text>
        <Text style={styles.cardBody}>
          Esta é a Etapa 0. A tela inicial, com o campo “O que você está pensando em comprar?”, os
          atalhos e as últimas análises, será construída na Etapa 1.
        </Text>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  brandBlock: {
    marginBottom: spacing.xl,
  },
  wordmark: {
    ...typography.display,
    color: colors.brand,
  },
  wordmarkAccent: {
    color: colors.savings,
  },
  tagline: {
    ...typography.body,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
    padding: spacing.lg,
  },
  cardTitle: {
    ...typography.label,
    color: colors.brand,
    marginBottom: spacing.sm,
  },
  cardBody: {
    ...typography.body,
    color: colors.textSecondary,
  },
});
