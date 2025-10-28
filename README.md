# 🎮 PokéArena - Frontend

> Interface web para gerenciamento e batalhas de Pokémons

[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.x-purple.svg)](https://vitejs.dev/)
[![Chakra UI](https://img.shields.io/badge/Chakra%20UI-2.x-teal.svg)](https://chakra-ui.com/)

[![Deploy](https://img.shields.io/badge/Deploy-Online-success.svg)](https://poke-arena-app.onrender.com)
[![Backend](https://img.shields.io/badge/Backend-Live-success.svg)](https://poke-arena-back.onrender.com)
[![API Docs](https://img.shields.io/badge/API%20Docs-Swagger-brightgreen.svg)](https://poke-arena-back.onrender.com/api-docs)

## 📋 Índice

- [Aplicação Online](#-aplicação-online)
- [Sobre](#-sobre)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#️-tecnologias)
- [Instalação](#-instalação)
- [Configuração](#️-configuração)
- [Executar](#-executar)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Rotas](#-rotas)
- [Integração com Backend](#-integração-com-backend)
- [Fluxo de Dados](#-fluxo-de-dados)
- [Deploy](#-deploy)
- [Recursos Técnicos](#-recursos-técnicos)

## 🚀 Aplicação Online

A aplicação está disponível online e pode ser acessada diretamente:

- **🎨 Frontend (Aplicação):** [https://poke-arena-app.onrender.com/](https://poke-arena-app.onrender.com/)
- **📚 Backend (API):** [https://poke-arena-back.onrender.com](https://poke-arena-back.onrender.com)
- **📖 Documentação:** [https://poke-arena-back.onrender.com/api-docs](https://poke-arena-back.onrender.com/api-docs)

> ⚠️ **Nota:** A aplicação está hospedada no plano gratuito do Render. O primeiro acesso pode levar ~30 segundos (cold start).

## 📋 Sobre

Frontend desenvolvido em React + Vite + TypeScript para consumir a API do [PokéArena Backend](https://github.com/YMdv/poke-arena-back).

**Interface moderna e responsiva** com sistema completo de CRUD de pokémons e arena de batalhas com algoritmo probabilístico.

## ✨ Funcionalidades

- 📊 **Dashboard**: Visão geral com estatísticas
  - Total de pokémons cadastrados
  - Status da API em tempo real (health check)
  - Acesso rápido às funcionalidades
- 📋 **Gerenciar Pokémons**: CRUD completo
  - Criar novos pokémons (Charizard, Mewtwo, Pikachu)
  - Visualizar lista completa com níveis e treinadores
  - Editar treinador do pokémon
  - Deletar pokémons
  - Validações em tempo real
  - Toasts informativos para feedback de ações
- ⚔️ **Batalhas**: Sistema de batalhas probabilístico
  - Seleção visual de pokémons
  - Cálculo automático de probabilidade de vitória
  - Resultado visual animado
  - Atualização automática de níveis
  - Vencedor ganha +1 nível
  - Perdedor perde -1 nível
  - Pokémon nível 0 é deletado automaticamente
- 🌙 **Dark Mode**: Suporte completo a tema claro/escuro
- 💚 **Health Check**: Monitoramento visual do status da API
- 🔄 **Auto-refresh**: React Query com cache e revalidação automática
- ⚡ **Performance**: Otimizado com Vite e code splitting
- 📱 **Responsivo**: Design adaptável para mobile, tablet e desktop

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
# Clone o repositório
git clone https://github.com/YMdv/poke-arena-front.git
cd poke-arena-front

# Instalar dependências
npm install
# ou
yarn install
```

## ⚙️ Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

**Desenvolvimento Local:**
```env
VITE_API_URL=http://localhost:3000
```

**Produção (Render):**
```env
VITE_API_URL=https://poke-arena-back.onrender.com
```

> 💡 O arquivo `.env` já vem configurado para desenvolvimento local.

## 🚀 Executar

```bash
# Desenvolvimento (hot reload)
npm run dev
# ou
yarn dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview

# Linting
npm run lint
```

**A aplicação estará disponível em:** `http://localhost:5173`

### Comandos Úteis

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# Criar build otimizado
npm run build

# Servir build local
npm run preview

# Analisar código (lint)
npm run lint
```

## 📁 Estrutura do Projeto

```
poke-arena-front/
├── src/
│   ├── api/                    # Configuração HTTP
│   │   ├── client.ts           # Axios instance configurado
│   │   └── endpoints.ts        # URLs dos endpoints centralizadas
│   │
│   ├── hooks/                  # Custom Hooks React Query
│   │   ├── usePokemons.ts      # Hook para listar pokémons
│   │   ├── usePokemonMutations.ts  # Hooks de criação, edição e deleção
│   │   ├── useBattle.ts        # Hook para executar batalhas
│   │   └── useHealth.ts        # Hook para health check da API
│   │
│   ├── pages/                  # Páginas/Rotas
│   │   ├── Home.tsx            # Dashboard principal
│   │   ├── PokemonListPage.tsx # Lista e gerenciamento de pokémons
│   │   └── BattlePage.tsx      # Arena de batalhas
│   │
│   ├── types/                  # TypeScript Interfaces
│   │   ├── pokemon.ts          # Tipos do domínio Pokémon
│   │   └── battle.ts           # Tipos de batalha
│   │
│   ├── utils/                  # Funções Auxiliares
│   │   └── pokemonHelpers.ts   # Helpers para pokémons
│   │
│   ├── App.tsx                 # Rotas e Providers
│   ├── main.tsx                # Entry point
│   └── theme.ts                # Tema customizado Chakra UI
│
├── public/
│   └── pokemon-images/         # Assets das imagens
│
├── .env                        # Variáveis de ambiente
├── vite.config.ts              # Configuração Vite
├── tsconfig.json               # Configuração TypeScript
└── package.json                # Dependências e scripts
```

## 🎯 Rotas

| Rota | Componente | Descrição |
|------|-----------|-----------|
| `/` | Home | Dashboard com estatísticas e status da API |
| `/pokemons` | PokemonListPage | Lista completa com CRUD de pokémons |
| `/battle` | BattlePage | Arena de batalhas entre pokémons |

## 🔌 Integração com Backend

A aplicação consome a API do PokéArena Backend através dos seguintes endpoints:

| Método | Endpoint | Descrição | Hook |
|--------|----------|-----------|------|
| GET | `/pokemons` | Listar todos os pokémons | `usePokemons()` |
| POST | `/pokemons` | Criar novo pokémon | `useCreatePokemon()` |
| PUT | `/pokemons/:id` | Atualizar treinador | `useUpdatePokemon()` |
| DELETE | `/pokemons/:id` | Deletar pokémon | `useDeletePokemon()` |
| POST | `/batalhar/:idA/:idB` | Executar batalha | `useBattle()` |
| GET | `/health` | Health check da API | `useHealth()` |

**Documentação completa da API:** [Swagger Docs](https://poke-arena-back.onrender.com/api-docs)

## 🔄 Fluxo de Dados

```
┌─────────────────────────────────────────┐
│         React Components (UI)           │
│   (Home, PokemonList, Battle)          │
└──────────────────┬──────────────────────┘
                   │ Props & Events
┌──────────────────▼──────────────────────┐
│       Custom Hooks (React Query)        │
│   (usePokemons, useBattle, etc.)       │
└──────────────────┬──────────────────────┘
                   │ HTTP Requests
┌──────────────────▼──────────────────────┐
│           API Client (Axios)            │
│         (baseURL + endpoints)           │
└──────────────────┬──────────────────────┘
                   │ REST API
┌──────────────────▼──────────────────────┐
│        PokéArena Backend (NestJS)       │
│      https://poke-arena-back.onrender.com      │
└──────────────────────────────────────────┘
```

## 🚀 Deploy

### 🌐 Aplicação em Produção

A aplicação já está deployada e disponível online:

- **Frontend:** [https://poke-arena-app.onrender.com/](https://poke-arena-app.onrender.com/)
- **Backend API:** [https://poke-arena-back.onrender.com](https://poke-arena-back.onrender.com)

**Plataforma:** Render (plano gratuito)
**Deploy:** Automático via GitHub (branch main)

### Novo Deploy (Render)

1. **Push para GitHub**
   ```bash
   git push origin main
   ```

2. **Conectar no Render**
   - Acesse [render.com](https://render.com)
   - Novo Web Service
   - Conecte o repositório GitHub

3. **Configurar Build**
   - Build Command: `npm install && npm run build`
   - Start Command: `npx serve -s dist -l 3000`
   - Publish Directory: `dist`

4. **Variáveis de Ambiente**
   ```
   VITE_API_URL=https://poke-arena-back.onrender.com
   ```

5. **Deploy Automático**
   - Cada push para `main` dispara novo deploy
   - Build e deploy levam ~2-3 minutos

### Alternativas de Deploy

#### Vercel
```bash
npm i -g vercel
vercel --prod
```

#### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

## 🧪 Recursos Técnicos

### React Query
- **Caching**: Reduz chamadas desnecessárias à API
- **Refetch**: Revalidação automática em background
- **Mutations**: Gerenciamento de estado otimista
- **Error Handling**: Tratamento centralizado de erros

### Chakra UI
- **Theme**: Suporte a dark mode nativo
- **Responsive**: Mobile-first design
- **Accessibility**: ARIA labels e navegação por teclado
- **Components**: Toast notifications, modals, forms

### TypeScript
- **Type Safety**: Interfaces para Pokemon, Battle, etc.
- **Autocomplete**: IntelliSense completo
- **Refactoring**: Mudanças seguras
- **Documentation**: Tipos como documentação viva

---

## 📄 Licença

Este projeto está sob a licença MIT.

## 👥 Autor

- **Yuri Mancini** - Desenvolvimento

## 🔗 Links Relacionados

- **Backend Repository:** [poke-arena-back](https://github.com/YMdv/poke-arena-back)
- **API Documentation:** [Swagger](https://poke-arena-back.onrender.com/api-docs)
- **Live Demo:** [poke-arena-app.onrender.com](https://poke-arena-app.onrender.com)

---

<div align="center">

**Status:** ✅ Funcional | 🚀 Online | 💯 Pronto para produção

Desenvolvido com ❤️ usando React, TypeScript e Chakra UI

</div>
