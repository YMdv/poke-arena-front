import axios from 'axios';

/**
 * Cliente Axios configurado
 *
 * Usa a variável de ambiente VITE_API_URL para determinar o base URL
 * Local: http://localhost:3000
 * Production: https://your-backend.vercel.app
 */
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para logging (opcional - útil para debug)
apiClient.interceptors.request.use(
  (config) => {
    console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para tratamento de erros
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Erro com resposta do servidor
      console.error('[API Error]', error.response.status, error.response.data);
    } else if (error.request) {
      // Erro sem resposta (timeout, network error, etc)
      console.error('[API Error] No response received', error.message);
    } else {
      // Erro na configuração da requisição
      console.error('[API Error]', error.message);
    }
    return Promise.reject(error);
  }
);
