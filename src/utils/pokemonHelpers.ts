/**
 * Pokemon Helpers
 *
 * Funções auxiliares para trabalhar com Pokémons
 */

import type { PokemonTipo } from '../types/pokemon';
import { POKEMON_METADATA } from '../types/pokemon';

/**
 * Retorna o caminho da imagem do pokémon
 */
export function getPokemonImage(tipo: PokemonTipo): string {
  return POKEMON_METADATA[tipo].image;
}

/**
 * Retorna a cor do tipo de pokémon (Chakra UI color)
 */
export function getTypeColor(tipo: PokemonTipo): string {
  return POKEMON_METADATA[tipo].color;
}

/**
 * Retorna o color scheme do tipo (para botões, badges)
 */
export function getTypeColorScheme(tipo: PokemonTipo): string {
  return POKEMON_METADATA[tipo].colorScheme;
}

/**
 * Retorna o nome formatado do pokémon
 */
export function getPokemonName(tipo: PokemonTipo): string {
  return POKEMON_METADATA[tipo].name;
}

/**
 * Calcula a probabilidade de vitória baseado nos níveis
 * Fórmula: P(A) = nivelA / (nivelA + nivelB)
 */
export function calculateWinProbability(nivelA: number, nivelB: number): {
  probabilidadeA: number;
  probabilidadeB: number;
} {
  const total = nivelA + nivelB;
  const probabilidadeA = (nivelA / total) * 100;
  const probabilidadeB = (nivelB / total) * 100;

  return {
    probabilidadeA: Math.round(probabilidadeA * 100) / 100, // 2 decimais
    probabilidadeB: Math.round(probabilidadeB * 100) / 100,
  };
}

/**
 * Formata o nível do pokémon para exibição
 */
export function formatLevel(nivel: number): string {
  return `Nível ${nivel}`;
}
