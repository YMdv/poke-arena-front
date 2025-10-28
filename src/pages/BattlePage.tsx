import {
  Container,
  Heading,
  Button,
  VStack,
  HStack,
  Select,
  Box,
  Image,
  Text,
  Card,
  CardBody,
  Alert,
  AlertIcon,
  Spinner,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { usePokemons } from '../hooks/usePokemons';
import { useBattle } from '../hooks/useBattle';
import { getPokemonImage, calculateWinProbability } from '../utils/pokemonHelpers';
import type { BattleResult } from '../types/battle';

export const BattlePage = () => {
  const navigate = useNavigate();
  const { data: pokemons, isLoading } = usePokemons();
  const battle = useBattle();

  const [pokemonAId, setPokemonAId] = useState<number | ''>('');
  const [pokemonBId, setPokemonBId] = useState<number | ''>('');
  const [result, setResult] = useState<BattleResult | null>(null);

  const pokemonA = pokemons?.find((p) => p.id === pokemonAId);
  const pokemonB = pokemons?.find((p) => p.id === pokemonBId);

  const handleBattle = () => {
    if (!pokemonAId || !pokemonBId) return;

    battle.mutate(
      { pokemonAId, pokemonBId },
      {
        onSuccess: (data) => {
          setResult(data);
        },
      }
    );
  };

  const resetBattle = () => {
    setResult(null);
    setPokemonAId('');
    setPokemonBId('');
  };

  if (isLoading) {
    return (
      <Container maxW="container.xl" py={10} textAlign="center">
        <Spinner size="xl" />
      </Container>
    );
  }

  if (!pokemons || pokemons.length < 2) {
    return (
      <Container maxW="container.xl" py={10}>
        <Alert status="warning">
          <AlertIcon />
          Você precisa de pelo menos 2 pokémons para batalhar!
        </Alert>
        <Button mt={4} onClick={() => navigate('/pokemons')}>
          Criar Pokémons
        </Button>
      </Container>
    );
  }

  if (result) {
    return (
      <Container maxW="container.xl" py={10}>
        <VStack spacing={8}>
          <Heading>⚔️ Resultado da Batalha</Heading>

          <HStack spacing={8}>
            <Card>
              <CardBody>
                <VStack>
                  <Text fontSize="2xl" fontWeight="bold" color="green.500">
                    🏆 VENCEDOR
                  </Text>
                  <Image
                    src={getPokemonImage(result.vencedor.tipo)}
                    boxSize="200px"
                    objectFit="contain"
                    mx="auto"
                  />
                  <Text fontSize="xl">{result.vencedor.tipo.toUpperCase()}</Text>
                  <Text>Treinador: {result.vencedor.treinador}</Text>
                  <Text fontWeight="bold">Nível: {result.vencedor.nivel}</Text>
                </VStack>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <VStack>
                  <Text fontSize="2xl" fontWeight="bold" color="red.500">
                    😢 PERDEDOR
                  </Text>
                  <Image
                    src={getPokemonImage(result.perdedor.tipo)}
                    boxSize="200px"
                    objectFit="contain"
                    mx="auto"
                    opacity={0.5}
                  />
                  <Text fontSize="xl">{result.perdedor.tipo.toUpperCase()}</Text>
                  <Text>Treinador: {result.perdedor.treinador}</Text>
                  <Text fontWeight="bold">Nível: {result.perdedor.nivel}</Text>
                  {result.perdedor.nivel === 0 && (
                    <Text color="red.500" fontWeight="bold">
                      ☠️ ELIMINADO
                    </Text>
                  )}
                </VStack>
              </CardBody>
            </Card>
          </HStack>

          <HStack>
            <Button colorScheme="blue" onClick={resetBattle}>
              Nova Batalha
            </Button>
            <Button onClick={() => navigate('/')}>Voltar ao Início</Button>
          </HStack>
        </VStack>
      </Container>
    );
  }

  const probabilities =
    pokemonA && pokemonB
      ? calculateWinProbability(pokemonA.nivel, pokemonB.nivel)
      : null;

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <HStack justify="space-between" w="100%">
          <Heading>⚔️ Arena de Batalha</Heading>
          <Button onClick={() => navigate('/')}>Voltar</Button>
        </HStack>

        <HStack spacing={8} w="100%">
          <Box flex={1}>
            <VStack>
              <Text fontWeight="bold">Pokémon A</Text>
              <Select
                placeholder="Selecione o Pokémon A"
                value={pokemonAId}
                onChange={(e) => setPokemonAId(Number(e.target.value))}
              >
                {pokemons.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.tipo.toUpperCase()} - {p.treinador} (Nível {p.nivel})
                  </option>
                ))}
              </Select>
              {pokemonA && (
                <Card>
                  <CardBody>
                    <VStack>
                      <Image
                        src={getPokemonImage(pokemonA.tipo)}
                        boxSize="150px"
                        objectFit="contain"
                        mx="auto"
                      />
                      <Text>{pokemonA.tipo.toUpperCase()}</Text>
                      <Text>Nível: {pokemonA.nivel}</Text>
                      {probabilities && (
                        <Text fontWeight="bold">
                          Chance de vitória: {probabilities.probabilidadeA}%
                        </Text>
                      )}
                    </VStack>
                  </CardBody>
                </Card>
              )}
            </VStack>
          </Box>

          <Text fontSize="4xl">VS</Text>

          <Box flex={1}>
            <VStack>
              <Text fontWeight="bold">Pokémon B</Text>
              <Select
                placeholder="Selecione o Pokémon B"
                value={pokemonBId}
                onChange={(e) => setPokemonBId(Number(e.target.value))}
              >
                {pokemons.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.tipo.toUpperCase()} - {p.treinador} (Nível {p.nivel})
                  </option>
                ))}
              </Select>
              {pokemonB && (
                <Card>
                  <CardBody>
                    <VStack>
                      <Image
                        src={getPokemonImage(pokemonB.tipo)}
                        boxSize="150px"
                        objectFit="contain"
                        mx="auto"
                      />
                      <Text>{pokemonB.tipo.toUpperCase()}</Text>
                      <Text>Nível: {pokemonB.nivel}</Text>
                      {probabilities && (
                        <Text fontWeight="bold">
                          Chance de vitória: {probabilities.probabilidadeB}%
                        </Text>
                      )}
                    </VStack>
                  </CardBody>
                </Card>
              )}
            </VStack>
          </Box>
        </HStack>

        <Button
          size="lg"
          colorScheme="red"
          onClick={handleBattle}
          isLoading={battle.isPending}
          isDisabled={!pokemonAId || !pokemonBId || pokemonAId === pokemonBId}
        >
          🔥 INICIAR BATALHA
        </Button>

        {pokemonAId === pokemonBId && pokemonAId && (
          <Alert status="error">
            <AlertIcon />
            Um pokémon não pode batalhar consigo mesmo!
          </Alert>
        )}
      </VStack>
    </Container>
  );
};
