# Demonstração de Métodos HTTP - React + Beeceptor

Esta aplicação demonstra os métodos HTTP (GET, POST, PUT) usando tanto **Fetch API** quanto **Axios** com o Beeceptor como API mockada.

**⚠️ Nota:** O projeto foi limitado aos métodos GET, POST e PUT pois o Beeceptor gratuito não permite a criação de mais tipos de requisições.

## 🚀 Funcionalidades

- ✅ **GET** - Buscar todos os usuários
- ✅ **POST** - Criar novo usuário
- ✅ **PUT** - Atualizar usuário completamente

## 🛠️ Tecnologias Utilizadas

- **React.js** - Framework frontend
- **Fetch API** - Requisições HTTP nativas
- **Axios** - Biblioteca para requisições HTTP
- **Beeceptor** - API mockada para testes

## 📦 Instalação e Execução

```bash
# Instalar dependências
npm install

# Executar a aplicação
npm start
```

A aplicação estará disponível em `http://localhost:3000`

## 🔗 APIs Disponíveis

A aplicação suporta duas opções de API:

### 1. JSONPlaceholder (Padrão)
- **URL:** `https://jsonplaceholder.typicode.com`
- **Tipo:** Simulação - não persiste dados reais
- **Uso:** Ideal para demonstrar funcionamento dos métodos HTTP

### 2. Beeceptor (Recomendado para testes reais)
- **Como criar:** Acesse [beeceptor.com](https://beeceptor.com)
- **Tipo:** Persistência real durante a sessão
- **Uso:** POST realmente adiciona, DELETE realmente remove

### 📋 Como configurar Beeceptor:
1. Acesse https://beeceptor.com
2. Digite um nome único (ex: "dev-web-seuNome")
3. Clique em "Create HTTP endpoint"
4. Use a URL gerada na aplicação

## 📝 Como Usar

1. **GET**: Clique nos botões para buscar usuários
2. **POST**: Preencha o formulário e crie um novo usuário
3. **PUT**: Informe um ID e os dados para atualizar usuário

Cada operação mostra o resultado tanto para Fetch quanto para Axios, permitindo comparar as duas abordagens.

## 🎯 Objetivo Acadêmico

Esta aplicação foi desenvolvida para a disciplina de **Desenvolvimento de Software para Web**, demonstrando:

- Implementação prática dos métodos HTTP (GET, POST, PUT)
- Comparação entre Fetch API e Axios
- Uso de API mockada para testes
- Interface React funcional e responsiva
- Tratamento de erros e estados de loading
- Limitações do Beeceptor gratuito

## 🚀 Deploy na Vercel

Este projeto está preparado para ser hospedado na Vercel:

### Como fazer o deploy:

1. **Fork este repositório** ou faça upload do código para o GitHub
2. **Acesse [vercel.com](https://vercel.com)** e faça login
3. **Clique em "New Project"**
4. **Importe o repositório** do GitHub
5. **Configure o projeto:**
   - Framework Preset: `Create React App`
   - Build Command: `npm run build`
   - Output Directory: `build`
6. **Clique em "Deploy"**

### Configurações automáticas:
- ✅ Build automático a cada push
- ✅ Deploy automático para produção
- ✅ HTTPS habilitado
- ✅ CDN global

O projeto será disponibilizado em uma URL única da Vercel (ex: `https://seu-projeto.vercel.app`)

---

**Desenvolvido para fins acadêmicos - UNIRV**
