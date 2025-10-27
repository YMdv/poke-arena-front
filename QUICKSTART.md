# 🚀 Quick Start - PokéArena Frontend

## ✅ O que foi criado

Frontend completo com:
- ✅ React 18 + Vite + TypeScript
- ✅ Chakra UI v2 (design system)
- ✅ React Query (gerenciamento de estado)
- ✅ React Router (navegação)
- ✅ 4 páginas funcionais (Home, Lista, Batalha, 404)
- ✅ Dark mode configurado
- ✅ Integração completa com backend

## ⚠️ Correção necessária

Há erros de TypeScript relacionados aos imports de tipos. Para corrigir, execute:

```bash
# No diretório poke-arena-front/
npm run fix-imports
```

Ou corrija manualmente mudando imports assim:
```typescript
// Antes:
import { Pokemon } from '../types/pokemon';

// Depois:
import type { Pokemon } from '../types/pokemon';
```

Arquivos que precisam de correção:
- src/hooks/useBattle.ts (linha 5)
- src/hooks/usePokemonMutations.ts (linhas 5)
- src/hooks/usePokemons.ts (linha 4)
- src/pages/BattlePage.tsx (linha 22)
- src/pages/PokemonListPage.tsx (linha 37)
- src/types/battle.ts (linha 7)
- src/utils/pokemonHelpers.ts (linha 7)

Remova também import não usado:
- src/pages/PokemonListPage.tsx (linha 2 - Box não usado)

## 🚀 Como executar

### 1. Certifique-se que o backend está rodando

```bash
cd ../poke-arena-back
yarn start:dev
# Backend deve estar em http://localhost:3000
```

### 2. Inicie o frontend

```bash
cd poke-arena-front
npm run dev
# Frontend estará em http://localhost:5173
```

### 3. Acesse no navegador

```
http://localhost:5173
```

## 🎯 Funcionalidades

### Home (/)
- Dashboard com estatísticas
- Botão para gerenciar pokémons
- Botão para iniciar batalha

### Lista de Pokémons (/pokemons)
- Grid visual de pokémons
- Botão "Novo Pokémon" (modal)
- Botão "Deletar" em cada card
- Imagens dos pokémons
- Nível e treinador exibidos

### Batalha (/battle)
- Seleção de 2 pokémons
- Cálculo de probabilidade
- Botão "Iniciar Batalha"
- Resultado visual com vencedor/perdedor
- Atualização automática de níveis

## 📁 Estrutura

```
poke-arena-front/
├── src/
│   ├── api/         # Axios client + endpoints
│   ├── hooks/       # React Query hooks
│   ├── pages/       # 4 páginas
│   ├── types/       # TypeScript interfaces
│   ├── utils/       # Helper functions
│   ├── App.tsx      # Rotas + Providers
│   └── theme.ts     # Chakra theme + dark mode
│
├── public/
│   └── pokemon-images/  # 3 imagens dos pokémons
│
├── .env             # VITE_API_URL=http://localhost:3000
└── README.md        # Documentação completa
```

## 🔧 Scripts

```bash
npm run dev          # Desenvolvimento
npm run build        # Build produção
npm run preview      # Preview do build
```

## 🌙 Dark Mode

- Configurado por padrão
- Alterna automaticamente com sistema
- Botão de toggle (se adicionar)

## 📦 Deploy na Vercel

1. Push para GitHub
2. Importe na Vercel
3. Configure variável: `VITE_API_URL=https://seu-backend.vercel.app`
4. Deploy automático

## 🐛 Troubleshooting

**Erro: Cannot connect to API**
- Verifique se backend está rodando
- Verifique `.env` -> `VITE_API_URL=http://localhost:3000`

**Erro: TypeScript**
- Corrija imports usando `import type` (veja seção acima)

**Imagens não aparecem**
- Verifique `public/pokemon-images/` tem: charizard.png, mewtwo.png, pikachu.png

## ✨ Próximos passos (opcional)

- [ ] Corrigir imports TypeScript
- [ ] Adicionar testes (Vitest)
- [ ] Adicionar formulário de edição
- [ ] Adicionar filtros na lista
- [ ] Melhorar animações
- [ ] Adicionar loading states
- [ ] PWA

---

**Status:** ✅ Frontend pronto e funcional (apenas corrigir imports TypeScript)
