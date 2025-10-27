/**
 * Endpoints da API
 *
 * Centrali

za todas as URLs em constantes para facilitar manutenção
 */

export const ENDPOINTS = {
  // Pokemon endpoints
  POKEMONS: '/pokemons',
  POKEMON_BY_ID: (id: string) => `/pokemons/${id}`,

  // Battle endpoint
  BATTLE: (pokemonAId: string, pokemonBId: string) =>
    `/batalhar/${pokemonAId}/${pokemonBId}`,

  // Health check
  HEALTH: '/health',
} as const;
