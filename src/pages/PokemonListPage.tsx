import {
  Container,
  Heading,
  Button,
  SimpleGrid,
  Card,
  CardBody,
  Image,
  Text,
  Badge,
  VStack,
  HStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Select,
  Spinner,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { usePokemons } from '../hooks/usePokemons';
import {
  useCreatePokemon,
  useDeletePokemon,
} from '../hooks/usePokemonMutations';
import type { PokemonTipo } from '../types/pokemon';
import { getPokemonImage, getPokemonName } from '../utils/pokemonHelpers';

export const PokemonListPage = () => {
  const navigate = useNavigate();
  const { data: pokemons, isLoading, error } = usePokemons();
  const createPokemon = useCreatePokemon();
  const deletePokemon = useDeletePokemon();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [newPokemon, setNewPokemon] = useState({
    tipo: 'pikachu' as PokemonTipo,
    treinador: '',
  });

  const handleCreate = () => {
    createPokemon.mutate(newPokemon, {
      onSuccess: () => {
        onClose();
        setNewPokemon({ tipo: 'pikachu', treinador: '' });
      },
    });
  };

  if (isLoading) {
    return (
      <Container maxW="container.xl" py={10} textAlign="center">
        <Spinner size="xl" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxW="container.xl" py={10}>
        <Alert status="error">
          <AlertIcon />
          Erro ao carregar pokémons
        </Alert>
      </Container>
    );
  }

  return (
    <Container maxW="container.xl" py={10}>
      <HStack justify="space-between" mb={8}>
        <Heading>Meus Pokémons</Heading>
        <HStack>
          <Button onClick={onOpen} colorScheme="green">
            Novo Pokémon
          </Button>
          <Button onClick={() => navigate('/')}>Voltar</Button>
        </HStack>
      </HStack>

      <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} spacing={6}>
        {pokemons?.map((pokemon) => (
          <Card key={pokemon.id}>
            <CardBody>
              <VStack>
                <Image
                  src={getPokemonImage(pokemon.tipo)}
                  alt={pokemon.tipo}
                  boxSize="150px"
                  objectFit="contain"
                  mx="auto"
                />
                <Heading size="md">{getPokemonName(pokemon.tipo)}</Heading>
                <Text>Treinador: {pokemon.treinador}</Text>
                <Text>Nível: {pokemon.nivel}</Text>
                <Badge colorScheme={pokemon.active ? 'green' : 'red'}>
                  {pokemon.active ? 'Ativo' : 'Inativo'}
                </Badge>
                <Button
                  size="sm"
                  colorScheme="red"
                  onClick={() => deletePokemon.mutate(pokemon.id)}
                  isLoading={deletePokemon.isPending}
                >
                  Deletar
                </Button>
              </VStack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Criar Novo Pokémon</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <FormControl>
                <FormLabel>Tipo</FormLabel>
                <Select
                  value={newPokemon.tipo}
                  onChange={(e) =>
                    setNewPokemon({
                      ...newPokemon,
                      tipo: e.target.value as PokemonTipo,
                    })
                  }
                >
                  <option value="pikachu">Pikachu</option>
                  <option value="charizard">Charizard</option>
                  <option value="mewtwo">Mewtwo</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>Treinador</FormLabel>
                <Input
                  value={newPokemon.treinador}
                  onChange={(e) =>
                    setNewPokemon({ ...newPokemon, treinador: e.target.value })
                  }
                  placeholder="Nome do treinador"
                />
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button
              colorScheme="green"
              onClick={handleCreate}
              isLoading={createPokemon.isPending}
              isDisabled={!newPokemon.treinador}
            >
              Criar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};
