# Demonstração de Métodos HTTP - React + Beeceptor

Esta aplicação demonstra todos os métodos HTTP (GET, POST, PUT, PATCH, DELETE) usando tanto **Fetch API** quanto **Axios** com o Beeceptor como API mockada.

## 🚀 Funcionalidades

- ✅ **GET** - Buscar todos os usuários
- ✅ **GET by ID** - Buscar usuário específico
- ✅ **POST** - Criar novo usuário
- ✅ **PUT** - Atualizar usuário completamente
- ✅ **PATCH** - Atualizar usuário parcialmente
- ✅ **DELETE** - Deletar usuário

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
3. **PUT/PATCH**: Informe um ID e os dados para atualizar
4. **DELETE**: Informe um ID para deletar

Cada operação mostra o resultado tanto para Fetch quanto para Axios, permitindo comparar as duas abordagens.

## 🎯 Objetivo Acadêmico

Esta aplicação foi desenvolvida para a disciplina de **Desenvolvimento de Software para Web**, demonstrando:

- Implementação prática de todos os métodos HTTP
- Comparação entre Fetch API e Axios
- Uso de API mockada para testes
- Interface React funcional e responsiva
- Tratamento de erros e estados de loading

---

**Desenvolvido para fins acadêmicos - UNIRV**