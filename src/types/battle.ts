/**
 * Battle Types
 *
 * Interfaces e tipos relacionados às batalhas
 */

import type { Pokemon } from './pokemon';

// Interface do resultado da batalha
export interface BattleResult {
  vencedor: Pokemon;
  perdedor: Pokemon;
}

// Request para iniciar batalha
export interface BattleRequest {
  pokemonAId: string;
  pokemonBId: string;
}

// Estatísticas calculadas da batalha (frontend)
export interface BattleStats {
  probabilidadeA: number;
  probabilidadeB: number;
  nivelInicialA: number;
  nivelInicialB: number;
  nivelFinalA: number;
  nivelFinalB: number;
}
