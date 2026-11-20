import type { TextStyle } from 'react-native';

/**
 * Escala tipográfica base. Usa a fonte do sistema (Roboto no Android) para
 * não adicionar dependências nesta etapa; a escolha de fonte própria é
 * decisão da Etapa 1.
 */
export const typography = {
  display: { fontSize: 32, lineHeight: 38, fontWeight: '800', letterSpacing: -0.5 },
  title: { fontSize: 24, lineHeight: 30, fontWeight: '700', letterSpacing: -0.3 },
  body: { fontSize: 16, lineHeight: 24, fontWeight: '400' },
  label: { fontSize: 13, lineHeight: 18, fontWeight: '600', letterSpacing: 0.4 },
} as const satisfies Record<string, TextStyle>;
