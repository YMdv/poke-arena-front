# 🎮 PokéArena - Frontend

> Interface web para gerenciamento e batalhas de Pokémons

## 📋 Sobre

Frontend desenvolvido em React + Vite + TypeScript para consumir a API do [PokéArena Backend](../poke-arena-back).

## ✨ Funcionalidades

- 📊 **Dashboard**: Visão geral com estatísticas
- 📋 **Gerenciar Pokémons**: CRUD completo
  - Criar novos pokémons
  - Visualizar lista de pokémons
  - Deletar pokémons
- ⚔️ **Batalhas**: Sistema de batalhas com:
  - Seleção visual de pokémons
  - Cálculo de probabilidade de vitória
  - Resultado visual
  - Atualização automática de níveis
- 🌙 **Dark Mode**: Suporte a tema claro/escuro

## 🛠️ Tecnologias

- **React 18** - Biblioteca UI
- **Vite** - Build tool e dev server
- **TypeScript** - Tipagem estática
- **Chakra UI** - Sistema de componentes
- **React Query (TanStack Query)** - Gerenciamento de estado servidor
- **React Router DOM v6** - Roteamento
- **Axios** - Cliente HTTP

## 📦 Instalação

```bash
# Instalar dependências
npm install
```

## ⚙️ Configuração

### Variáveis de Ambiente

O arquivo `.env` já está configurado para desenvolvimento local:

```env
VITE_API_URL=http://localhost:3000
```

Para produção (Vercel), configure:
```env
VITE_API_URL=https://your-backend.vercel.app
```

## 🚀 Executar

```bash
# Desenvolvimento (hot reload)
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

A aplicação estará disponível em `http://localhost:5173`

## 📁 Estrutura do Projeto

```
src/
├── api/           # Configuração HTTP (Axios)
├── hooks/         # Custom Hooks React Query
├── pages/         # Páginas/Rotas
├── types/         # TypeScript Interfaces
├── utils/         # Funções Auxiliares
├── App.tsx        # Rotas e Providers
└── theme.ts       # Tema Chakra UI

public/
└── pokemon-images/  # Imagens dos pokémons
```

## 🎯 Rotas

- `/` - Home (Dashboard)
- `/pokemons` - Lista de Pokémons
- `/battle` - Arena de Batalha

## 🔌 Integração com Backend

```
GET    /pokemons              # Listar todos
POST   /pokemons              # Criar pokémon
DELETE /pokemons/:id          # Deletar pokémon
POST   /batalhar/:idA/:idB    # Executar batalha
```

## 🚀 Deploy na Vercel

1. Push para GitHub
2. Conecte o repositório na Vercel
3. Configure `VITE_API_URL` nas variáveis de ambiente
4. Deploy automático

---

**Status:** ✅ Funcional | 🚀 Pronto para deploy
