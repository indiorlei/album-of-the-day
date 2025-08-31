# 🎵 Album Giveaway

Uma aplicação Next.js que sorteia álbuns da lista dos **100 maiores discos da música brasileira** pela Rolling Stone Brasil, com integração ao Spotify e Discogs para exibir capas e links dos álbuns.

## ✨ Funcionalidades

- 🎲 **Sorteio aleatório** de álbuns da lista da Rolling Stone Brasil
- 🎨 **Design inspirado no Spotify** com tema escuro e visual moderno
- 🖼️ **Capas reais** dos álbums via APIs do Spotify e Discogs
- 🔗 **Link direto** para ouvir no Spotify
- 📱 **Layout responsivo** para desktop e mobile
- ⚡ **Performance otimizada** com Next.js 14

## 🚀 Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Spotify Web API** - Dados e capas dos álbuns
- **Discogs API** - Fallback para capas

## 📋 Pré-requisitos

- Node.js 18+
- Conta no [Spotify for Developers](https://developer.spotify.com/)
- Token do [Discogs](https://www.discogs.com/developers/)

## 🛠️ Instalação

1. **Clone o repositório**

```bash
git clone <repository-url>
cd album-giveaway
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure as variáveis de ambiente**

```bash
cp .env.sample .env
```

Edite o arquivo `.env` com suas credenciais:

```env
NEXT_PUBLIC_SPOTIFY_CLIENT_ID=seu_client_id_spotify
NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET=seu_client_secret_spotify
NEXT_PUBLIC_DISCOGS_TOKEN=seu_token_discogs
```

4. **Execute o projeto**

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 🔑 Configuração das APIs

### Spotify API

1. Acesse [Spotify for Developers](https://developer.spotify.com/dashboard)
2. Crie uma nova aplicação
3. Copie o `Client ID` e `Client Secret`

### Discogs API

1. Acesse [Discogs Developers](https://www.discogs.com/developers/)
2. Gere um Personal Access Token
3. Copie o token

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── AlbumCard.tsx
├── data/
│   └── albums.ts
└── services/
    └── spotify.ts
```

## 🎯 Como Funciona

1. **Sorteio**: Seleciona aleatoriamente um álbum da lista dos 100 maiores
2. **Busca no Spotify**: Procura o álbum na API do Spotify
3. **Validação**: Verifica se o resultado corresponde ao álbum buscado
4. **Fallback**: Se não encontrar no Spotify, busca no Discogs
5. **Exibição**: Mostra a capa, informações e link do Spotify

## 🚀 Deploy

### Vercel (Recomendado)

```bash
npm run build
vercel --prod
```

### Outros provedores

```bash
npm run build
npm start
```

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm start` - Inicia servidor de produção
- `npm run lint` - Executa linting do código

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🎵 Sobre a Lista

A lista dos 100 maiores discos da música brasileira foi elaborada pela **Rolling Stone Brasil** e inclui clássicos como:

- **Acabou Chorare** - Novos Baianos (1972)
- **Tropicália ou Panis et Circencis** - Vários Artistas (1968)
- **Construção** - Chico Buarque (1971)
- **Getz/Gilberto** - Stan Getz & João Gilberto (1964)
- E muitos outros clássicos da MPB

---

Feito com ❤️ e muito 🎵
