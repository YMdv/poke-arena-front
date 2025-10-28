import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@chakra-ui/react';
import { apiClient } from '../api/client';
import { ENDPOINTS } from '../api/endpoints';
import type { BattleResult } from '../types/battle';

/**
 * Hook para executar batalha entre dois pokémons
 */
export const useBattle = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: async ({
      pokemonAId,
      pokemonBId,
    }: {
      pokemonAId: number;
      pokemonBId: number;
    }): Promise<BattleResult> => {
      const { data } = await apiClient.post(
        ENDPOINTS.BATTLE(pokemonAId, pokemonBId)
      );
      return data;
    },
    onSuccess: (data) => {
      // Invalida cache para atualizar níveis
      queryClient.invalidateQueries({ queryKey: ['pokemons'] });

      toast({
        title: 'Batalha concluída!',
        description: `${data.vencedor.tipo.toUpperCase()} venceu a batalha!`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    },
    onError: (error: any) => {
      toast({
        title: 'Erro na batalha',
        description:
          error.response?.data?.message ||
          'Não foi possível realizar a batalha.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    },
  });
};
