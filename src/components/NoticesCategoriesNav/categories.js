import { nanoid } from 'nanoid';

export const publicCategories = [
  {
    id: nanoid(),
    to: '/notices/sell',
    text: 'sell',
    name: 'sell'
  },
  {
    id: nanoid(),
    to: '/notices/lost-found',
    text: 'lost or found',
    name: 'lost-or-found'
  },
  {
    id: nanoid(),
    to: '/notices/for-free',
    text: 'in good hands',
    name: 'in-good-hands'
  },
];

export const privateCategories = [
  {
    id: nanoid(),
    to: '/notices/favorite',
    text: 'favorite ads',
    name: 'favorite'
  },
  {
    id: nanoid(),
    to: '/notices/own',
    text: 'my ads',
    name: 'my-ads'
  },
];
