/**
 * Pokemon Types
 *
 * Interfaces e tipos relacionados aos Pokémons
 * Sincronizados com o backend NestJS
 */

// Tipos de Pokémon disponíveis
export type PokemonTipo = 'charizard' | 'mewtwo' | 'pikachu';

// Interface principal do Pokémon
export interface Pokemon {
  id: string;
  tipo: PokemonTipo;
  treinador: string;
  nivel: number;
  active: boolean;
  created_at?: string;
  updated_at?: string;
}

// DTO para criar Pokémon
export interface CreatePokemonDTO {
  tipo: PokemonTipo;
  treinador: string;
}

// DTO para atualizar Pokémon (apenas treinador pode ser alterado)
export interface UpdatePokemonDTO {
  treinador: string;
}

// Type guard para verificar se é um tipo válido de pokémon
export function isPokemonTipo(value: string): value is PokemonTipo {
  return ['charizard', 'mewtwo', 'pikachu'].includes(value);
}

// Metadados dos tipos de Pokémon
export const POKEMON_METADATA: Record<
  PokemonTipo,
  {
    name: string;
    color: string;
    colorScheme: string;
    image: string;
  }
> = {
  charizard: {
    name: 'Charizard',
    color: 'pokemon.charizard.500',
    colorScheme: 'red',
    image: '/pokemon-images/charizard.png',
  },
  mewtwo: {
    name: 'Mewtwo',
    color: 'pokemon.mewtwo.500',
    colorScheme: 'purple',
    image: '/pokemon-images/mewtwo.png',
  },
  pikachu: {
    name: 'Pikachu',
    color: 'pokemon.pikachu.500',
    colorScheme: 'yellow',
    image: '/pokemon-images/pikachu.png',
  },
};
