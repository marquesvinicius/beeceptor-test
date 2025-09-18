// Serviço HTTP usando Axios
import axios from 'axios';
import { ENDPOINTS } from '../config/api';

class AxiosService {
  constructor() {
    // Configurar a instância do Axios
    this.axiosInstance = axios.create({
      timeout: 10000,
    });

    // Definir o Content-Type como padrão para métodos que enviam dados.
    // Esta é a correção definitiva para garantir que o Beeceptor entenda o JSON.
    this.axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
    this.axiosInstance.defaults.headers.put['Content-Type'] = 'application/json';
    this.axiosInstance.defaults.headers.patch['Content-Type'] = 'application/json';

    // Configurar interceptors para tratamento de erros
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error('Axios Error:', error);
        return Promise.reject(error);
      }
    );
  }

  // GET - Buscar todos os usuários
  async getUsers() {
    try {
      const response = await this.axiosInstance.get(ENDPOINTS.USERS);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // GET - Buscar usuário por ID
  async getUserById(id) {
    try {
      const response = await this.axiosInstance.get(`${ENDPOINTS.USERS}/${id}`);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // POST - Criar novo usuário
  async createUser(userData) {
    try {
      console.log('Axios Service - Enviando dados:', userData);
      console.log('Axios POST Headers Configurados:', this.axiosInstance.defaults.headers.post);
      const response = await this.axiosInstance.post(ENDPOINTS.USERS, userData);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // PUT - Atualizar usuário completamente
  async updateUser(id, userData) {
    try {
      const response = await this.axiosInstance.put(`${ENDPOINTS.USERS}/${id}`, userData);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // PATCH - Atualizar usuário parcialmente
  async patchUser(id, partialData) {
    try {
      const response = await this.axiosInstance.patch(`${ENDPOINTS.USERS}/${id}`, partialData);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // DELETE - Deletar usuário
  async deleteUser(id) {
    try {
      await this.axiosInstance.delete(`${ENDPOINTS.USERS}/${id}`);
      return { success: true, message: 'Usuário deletado com sucesso' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}

const axiosServiceInstance = new AxiosService();
export default axiosServiceInstance;
