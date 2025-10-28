import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../api/client';
import { ENDPOINTS } from '../api/endpoints';

/**
 * Health Check Response Type
 */
export interface HealthCheckResponse {
  status: 'ok' | 'error' | 'shutting_down';
  info?: Record<string, any>;
  error?: Record<string, any>;
  details?: Record<string, any>;
}

/**
 * Hook para verificar status de saúde da API
 * Consulta o endpoint /health a cada 30 segundos
 */
export const useHealth = () => {
  return useQuery<HealthCheckResponse>({
    queryKey: ['health'],
    queryFn: async () => {
      const { data } = await apiClient.get(ENDPOINTS.HEALTH);
      return data;
    },
    refetchInterval: 30000, // Refaz a consulta a cada 30 segundos
    retry: 2, // Tenta 2 vezes em caso de erro
    staleTime: 20000, // Considera os dados válidos por 20 segundos
  });
};
