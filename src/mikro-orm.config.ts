import { defineConfig } from '@mikro-orm/sqlite';
import { Book } from '../entities/Book';

export default defineConfig({
  dbName: ':memory:',
  entities: [Book],
});
