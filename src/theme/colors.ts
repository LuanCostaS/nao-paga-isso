/**
 * Paleta base do NÃO PAGA ISSO (dossiê, seção 3.2).
 *
 * - Azul-marinho: confiança (marca, textos principais).
 * - Verde: economia calculada.
 * - Âmbar: atenção.
 * - Vermelho: somente erro ou custo maior.
 *
 * Esta é a fundação da Etapa 0. A Etapa 1 (identidade visual) refina tons,
 * contrastes e estados; as telas devem consumir sempre estes tokens, nunca
 * cores escritas diretamente nos componentes.
 */
export const colors = {
  brand: '#0F1F3D',
  brandMuted: '#2A3B5C',

  background: '#F6F7F9',
  surface: '#FFFFFF',
  border: '#E3E6EB',

  textPrimary: '#0F1F3D',
  textSecondary: '#5B6475',
  textOnBrand: '#FFFFFF',

  savings: '#1F8A5B',
  savingsSoft: '#E5F4EC',
  attention: '#B7791F',
  attentionSoft: '#FBF1DF',
  danger: '#C53030',
} as const;

export type ColorToken = keyof typeof colors;
