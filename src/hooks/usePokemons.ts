import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../api/client';
import { ENDPOINTS } from '../api/endpoints';
import type { Pokemon } from '../types/pokemon';

/**
 * Hook para buscar lista de todos os pokémons
 */
export const usePokemons = () => {
  return useQuery({
    queryKey: ['pokemons'],
    queryFn: async (): Promise<Pokemon[]> => {
      const { data } = await apiClient.get(ENDPOINTS.POKEMONS);
      return data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutos
    refetchOnWindowFocus: true,
  });
};
