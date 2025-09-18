import React, { useState } from 'react';
import fetchService from '../services/fetchService';
import axiosService from '../services/axiosService';
import BeeceptorSetup from './BeeceptorSetup';

const HttpMethodDemo = () => {
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });
  const [userId, setUserId] = useState('1');

  // Função para executar operações e mostrar resultados
  const executeOperation = async (operation, method, library) => {
    const key = `${method}-${library}`;
    setLoading(prev => ({ ...prev, [key]: true }));
    
    try {
      const result = await operation();
      setResults(prev => ({
        ...prev,
        [key]: {
          success: result.success,
          data: result.data || result.message,
          error: result.error,
          timestamp: new Date().toLocaleTimeString()
        }
      }));
    } catch (error) {
      setResults(prev => ({
        ...prev,
        [key]: {
          success: false,
          error: error.message,
          timestamp: new Date().toLocaleTimeString()
        }
      }));
    } finally {
      setLoading(prev => ({ ...prev, [key]: false }));
    }
  };

  // Handlers para cada método HTTP
  const handleGet = (library) => {
    const service = library === 'fetch' ? fetchService : axiosService;
    executeOperation(() => service.getUsers(), 'GET', library);
  };

  const handleGetById = (library) => {
    const service = library === 'fetch' ? fetchService : axiosService;
    executeOperation(() => service.getUserById(userId), 'GET_BY_ID', library);
  };

  const handlePost = (library) => {
    const service = library === 'fetch' ? fetchService : axiosService;
    executeOperation(() => service.createUser(formData), 'POST', library);
  };

  const handlePut = (library) => {
    const service = library === 'fetch' ? fetchService : axiosService;
    executeOperation(() => service.updateUser(userId, formData), 'PUT', library);
  };

  const handlePatch = (library) => {
    const service = library === 'fetch' ? fetchService : axiosService;
    const patchData = { name: formData.name };
    executeOperation(() => service.patchUser(userId, patchData), 'PATCH', library);
  };

  const handleDelete = (library) => {
    const service = library === 'fetch' ? fetchService : axiosService;
    executeOperation(() => service.deleteUser(userId), 'DELETE', library);
  };

  const renderResult = (method, library) => {
    const key = `${method}-${library}`;
    const result = results[key];
    const isLoading = loading[key];

    if (isLoading) {
      return <div className="loading">Carregando...</div>;
    }

    if (!result) return null;

    return (
      <div className={`result ${result.success ? 'success' : 'error'}`}>
        <div className="result-header">
          <strong>{result.success ? '✅ Sucesso' : '❌ Erro'}</strong>
          <span className="timestamp">{result.timestamp}</span>
        </div>
        <pre className="result-data">
          {result.error ? 
            `Erro: ${result.error}` : 
            JSON.stringify(result.data, null, 2)
          }
        </pre>
      </div>
    );
  };

  const renderMethodSection = (method, title, handler, needsForm = false, needsId = false) => (
    <div className="method-section">
      <h3>{title}</h3>
      {needsForm && (
        <div className="form-section">
          <input
            type="text"
            placeholder="Nome"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          />
          <input
            type="number"
            placeholder="Idade"
            value={formData.age}
            onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
          />
        </div>
      )}
      {needsId && (
        <div className="id-section">
          <input
            type="text"
            placeholder="ID do usuário"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
      )}
      <div className="buttons">
        <button onClick={() => handler('fetch')} className="fetch-btn">
          Executar com Fetch
        </button>
        <button onClick={() => handler('axios')} className="axios-btn">
          Executar com Axios
        </button>
      </div>
      <div className="results-container">
        <div className="result-column">
          <h4>Fetch Result:</h4>
          {renderResult(method, 'fetch')}
        </div>
        <div className="result-column">
          <h4>Axios Result:</h4>
          {renderResult(method, 'axios')}
        </div>
      </div>
    </div>
  );

  return (
    <div className="http-demo">
      <h1>Demonstração de Métodos HTTP</h1>
      <p>Esta aplicação demonstra os métodos HTTP (GET, POST, PUT, PATCH, DELETE) com Fetch e Axios, utilizando o Beeceptor.</p>
      
      <BeeceptorSetup />
      
      <div className="api-info">
        <strong>Endpoint da API:</strong> <code>https://dev-web-test.free.beeceptor.com</code>
      </div>

      {renderMethodSection('GET', 'GET - Buscar Todos os Usuários', handleGet)}
      {renderMethodSection('GET_BY_ID', 'GET - Buscar Usuário por ID', handleGetById, false, true)}
      {renderMethodSection('POST', 'POST - Criar Novo Usuário', handlePost, true)}
      {renderMethodSection('PUT', 'PUT - Atualizar Usuário Completamente', handlePut, true, true)}
      {renderMethodSection('PATCH', 'PATCH - Atualizar Usuário Parcialmente', handlePatch, true, true)}
      {renderMethodSection('DELETE', 'DELETE - Deletar Usuário', handleDelete, false, true)}
    </div>
  );
};

export default HttpMethodDemo;
