import {
  Container,
  Heading,
  Button,
  SimpleGrid,
  Card,
  CardBody,
  Image,
  Text,
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
  useUpdatePokemon,
} from '../hooks/usePokemonMutations';
import type { Pokemon, PokemonTipo } from '../types/pokemon';
import { getPokemonImage, getPokemonName } from '../utils/pokemonHelpers';

export const PokemonListPage = () => {
  const navigate = useNavigate();
  const { data: pokemons, isLoading, error } = usePokemons();
  const createPokemon = useCreatePokemon();
  const deletePokemon = useDeletePokemon();
  const updatePokemon = useUpdatePokemon();

  const { isOpen: isCreateOpen, onOpen: onCreateOpen, onClose: onCreateClose } = useDisclosure();
  const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure();

  const [newPokemon, setNewPokemon] = useState({
    tipo: 'pikachu' as PokemonTipo,
    treinador: '',
  });

  const [editingPokemon, setEditingPokemon] = useState<Pokemon | null>(null);
  const [editTrainer, setEditTrainer] = useState('');

  const handleCreate = () => {
    createPokemon.mutate(newPokemon, {
      onSuccess: () => {
        onCreateClose();
        setNewPokemon({ tipo: 'pikachu', treinador: '' });
      },
    });
  };

  const handleEditClick = (pokemon: Pokemon) => {
    setEditingPokemon(pokemon);
    setEditTrainer(pokemon.treinador);
    onEditOpen();
  };

  const handleUpdate = () => {
    if (!editingPokemon) return;

    updatePokemon.mutate(
      {
        id: editingPokemon.id,
        data: { treinador: editTrainer },
      },
      {
        onSuccess: () => {
          onEditClose();
          setEditingPokemon(null);
          setEditTrainer('');
        },
      }
    );
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
          <Button onClick={onCreateOpen} colorScheme="green">
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
                <HStack spacing={2} width="100%">
                  <Button
                    size="sm"
                    colorScheme="blue"
                    onClick={() => handleEditClick(pokemon)}
                    flex={1}
                  >
                    Editar
                  </Button>
                  <Button
                    size="sm"
                    colorScheme="red"
                    onClick={() => deletePokemon.mutate(pokemon.id)}
                    isLoading={deletePokemon.isPending}
                    flex={1}
                  >
                    Deletar
                  </Button>
                </HStack>
              </VStack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>

      {/* Modal de Criação */}
      <Modal isOpen={isCreateOpen} onClose={onCreateClose}>
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
            <Button variant="ghost" mr={3} onClick={onCreateClose}>
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

      {/* Modal de Edição */}
      <Modal isOpen={isEditOpen} onClose={onEditClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar Pokémon</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <FormControl isReadOnly>
                <FormLabel>Pokémon</FormLabel>
                <Input
                  value={editingPokemon ? getPokemonName(editingPokemon.tipo) : ''}
                  isReadOnly
                  bg="gray.100"
                  _dark={{ bg: 'gray.700' }}
                />
              </FormControl>

              <FormControl isReadOnly>
                <FormLabel>Nível</FormLabel>
                <Input
                  value={editingPokemon?.nivel || ''}
                  isReadOnly
                  bg="gray.100"
                  _dark={{ bg: 'gray.700' }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Treinador</FormLabel>
                <Input
                  value={editTrainer}
                  onChange={(e) => setEditTrainer(e.target.value)}
                  placeholder="Nome do treinador"
                  autoFocus
                />
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onEditClose}>
              Cancelar
            </Button>
            <Button
              colorScheme="blue"
              onClick={handleUpdate}
              isLoading={updatePokemon.isPending}
              isDisabled={!editTrainer || editTrainer === editingPokemon?.treinador}
            >
              Salvar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};
