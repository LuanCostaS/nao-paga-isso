import { useLocalSearchParams } from 'expo-router';

import { StagePlaceholder } from '@/components/StagePlaceholder';

/** Detalhe de uma análise salva. A rota já existe; o conteúdo chega na Etapa 4. */
export default function AnalysisDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <StagePlaceholder
      eyebrow={`Análise ${id ?? ''}`.trim()}
      title="Detalhe da análise"
      description="Aqui você verá os dados usados, a conta e o veredito de uma análise salva."
      plannedStage="Etapa 4"
      edges={[]}
    />
  );
}
