import { setupServer } from 'msw/node';
import { apiHandlers } from './handlers';

export const worker: any = new setupServer(...apiHandlers);
