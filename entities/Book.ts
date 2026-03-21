import { defineEntity, p } from '@mikro-orm/core';

const BookSchema = defineEntity({
  name: 'Book',
  properties: {
    id: p.bigint().primary(),
    title: p.string(),
  },
});

export class Book extends BookSchema.class {}
BookSchema.setClass(Book);
