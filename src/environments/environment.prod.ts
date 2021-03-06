import { TEnvironment } from '../app/shared/types/environment';

export const environment: TEnvironment = {
  name: process.env.environment,
  production: true,
  apiBaseUrl: 'https://localhost:44390/api'
};
