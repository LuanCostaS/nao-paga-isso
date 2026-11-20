import { StyleSheet, Text, View } from 'react-native';

import type { Edge } from 'react-native-safe-area-context';

import { colors, radius, spacing, typography } from '@/theme';

import { ScreenContainer } from './ScreenContainer';

type StagePlaceholderProps = {
  /** Rótulo pequeno acima do título (ex.: nome da seção). */
  eyebrow: string;
  title: string;
  description: string;
  /** Etapa do roadmap em que a tela será implementada. */
  plannedStage: string;
  /** Use `[]` em telas com cabeçalho, que já tratam a área segura. */
  edges?: Edge[];
};

/**
 * Tela provisória da Etapa 0. Indica com clareza o que a seção fará e em qual
 * etapa será construída, sem simular funcionalidades que ainda não existem.
 */
export function StagePlaceholder({
  eyebrow,
  title,
  description,
  plannedStage,
  edges,
}: StagePlaceholderProps) {
  return (
    <ScreenContainer edges={edges}>
      <Text style={styles.eyebrow} accessibilityRole="text">
        {eyebrow.toUpperCase()}
      </Text>
      <Text style={styles.title} accessibilityRole="header">
        {title}
      </Text>
      <Text style={styles.description}>{description}</Text>

      <View style={styles.badge} accessible accessibilityLabel={`Em construção: ${plannedStage}`}>
        <View style={styles.badgeDot} />
        <Text style={styles.badgeText}>Em construção · {plannedStage}</Text>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  eyebrow: {
    ...typography.label,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },
  title: {
    ...typography.title,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  description: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },
  badge: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: radius.pill,
    backgroundColor: colors.attentionSoft,
  },
  badgeDot: {
    width: 8,
    height: 8,
    borderRadius: radius.pill,
    backgroundColor: colors.attention,
  },
  badgeText: {
    ...typography.label,
    color: colors.textPrimary,
  },
});
