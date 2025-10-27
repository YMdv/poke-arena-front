import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@chakra-ui/react';
import { apiClient } from '../api/client';
import { ENDPOINTS } from '../api/endpoints';
import { CreatePokemonDTO, UpdatePokemonDTO } from '../types/pokemon';

/**
 * Hook para criar pokémon
 */
export const useCreatePokemon = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: async (data: CreatePokemonDTO) => {
      const response = await apiClient.post(ENDPOINTS.POKEMONS, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pokemons'] });
      toast({
        title: 'Pokémon criado!',
        description: 'O pokémon foi criado com sucesso.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    },
    onError: (error: any) => {
      toast({
        title: 'Erro ao criar pokémon',
        description: error.response?.data?.message || 'Ocorreu um erro.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    },
  });
};

/**
 * Hook para atualizar pokémon
 */
export const useUpdatePokemon = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: UpdatePokemonDTO }) => {
      const response = await apiClient.put(ENDPOINTS.POKEMON_BY_ID(id), data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pokemons'] });
      toast({
        title: 'Pokémon atualizado!',
        description: 'O treinador foi atualizado com sucesso.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    },
    onError: (error: any) => {
      toast({
        title: 'Erro ao atualizar pokémon',
        description: error.response?.data?.message || 'Ocorreu um erro.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    },
  });
};

/**
 * Hook para deletar pokémon
 */
export const useDeletePokemon = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: async (id: string) => {
      await apiClient.delete(ENDPOINTS.POKEMON_BY_ID(id));
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pokemons'] });
      toast({
        title: 'Pokémon deletado!',
        description: 'O pokémon foi deletado com sucesso.',
        status: 'info',
        duration: 3000,
        isClosable: true,
      });
    },
    onError: (error: any) => {
      toast({
        title: 'Erro ao deletar pokémon',
        description: error.response?.data?.message || 'Ocorreu um erro.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    },
  });
};
