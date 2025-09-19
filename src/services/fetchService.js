// Serviço HTTP usando Fetch API
import { ENDPOINTS } from '../config/api';

class FetchService {
  // GET - Buscar todos os usuários
  async getUsers() {
    try {
      const response = await fetch(ENDPOINTS.USERS);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }


  // POST - Criar novo usuário
  async createUser(userData) {
    try {
      console.log('Fetch Service - Enviando dados:', JSON.stringify(userData));
      const response = await fetch(ENDPOINTS.USERS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // PUT - Atualizar usuário completamente
  async updateUser(id, userData) {
    try {
      const response = await fetch(`${ENDPOINTS.USERS}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

}

const fetchServiceInstance = new FetchService();
export default fetchServiceInstance;
