import test from 'ava';

import { CORRECT } from './correctResult';
import { getCategories } from './mockedApi';
import { categoryTree, updateToShowOnHomeValue } from './task';

test('categoryTree result is deepEqual to correctResult', async (t) => {
  const result = await categoryTree(getCategories);
  t.deepEqual(result, CORRECT);
});

test(`updateToShowOnHomeValue makes all items showOnHome=true when there's 5 or less items`, (t) => {
  const result = updateToShowOnHomeValue(
    [
      {
        children: [],
        image: 'Proszki',
        showOnHome: false,
        id: 9292,
        name: 'Proszki',
        order: 9292,
      },
      {
        children: [],
        image: 'Płyny i żele',
        showOnHome: false,
        id: 9293,
        name: 'Płyny i żele',
        order: 9293,
      },
      {
        children: [],
        image: 'Kapsułki i tabletki',
        showOnHome: false,
        id: 9294,
        name: 'Kapsułki i tabletki',
        order: 9294,
      },
      {
        children: [],
        image: 'Płyny do płukania',
        showOnHome: false,
        id: 9295,
        name: 'Płyny do płukania',
        order: 9295,
      },
      {
        children: [],
        image: '',
        showOnHome: false,
        id: 9296,
        name: 'Odplamiacze i wybielacze',
        order: 9296,
      },
    ],
    []
  ).map((c) => c.showOnHome);

  t.true(result.every(Boolean));
});

test(`updateToShowOnHomeValue makes all items showOnHome=true when there's more than 5 items and item id is on toShowOnHome argument`, (t) => {
  const result = updateToShowOnHomeValue(
    [
      {
        children: [],
        image: 'Proszki',
        showOnHome: false,
        id: 9292,
        name: 'Proszki',
        order: 9292,
      },
      {
        children: [],
        image: 'Płyny i żele',
        showOnHome: false,
        id: 9293,
        name: 'Płyny i żele',
        order: 9293,
      },
      {
        children: [],
        image: 'Kapsułki i tabletki',
        showOnHome: false,
        id: 9294,
        name: 'Kapsułki i tabletki',
        order: 9294,
      },
      {
        children: [],
        image: 'Płyny do płukania',
        showOnHome: false,
        id: 9295,
        name: 'Płyny do płukania',
        order: 9295,
      },
      {
        children: [],
        image: '',
        showOnHome: false,
        id: 9296,
        name: 'Odplamiacze i wybielacze',
        order: 9296,
      },
      {
        children: [],
        image: '',
        showOnHome: false,
        id: 9297,
        name: 'Odplamiacze i wybielacze',
        order: 9297,
      },
      {
        children: [],
        image: '',
        showOnHome: false,
        id: 9298,
        name: 'Odplamiacze i wybielacze',
        order: 9298,
      },
    ],
    [9295, 9298]
  );

  t.snapshot(result);
});

test(`updateToShowOnHomeValue makes all items showOnHome=true when there's more than 5 items and toShowOnHome has length = 0`, (t) => {
  const result = updateToShowOnHomeValue(
    [
      {
        children: [],
        image: 'Proszki',
        showOnHome: false,
        id: 9292,
        name: 'Proszki',
        order: 9292,
      },
      {
        children: [],
        image: 'Płyny i żele',
        showOnHome: false,
        id: 9293,
        name: 'Płyny i żele',
        order: 9293,
      },
      {
        children: [],
        image: 'Kapsułki i tabletki',
        showOnHome: false,
        id: 9294,
        name: 'Kapsułki i tabletki',
        order: 9294,
      },
      {
        children: [],
        image: 'Płyny do płukania',
        showOnHome: false,
        id: 9295,
        name: 'Płyny do płukania',
        order: 9295,
      },
      {
        children: [],
        image: '',
        showOnHome: false,
        id: 9296,
        name: 'Odplamiacze i wybielacze',
        order: 9296,
      },
      {
        children: [],
        image: '',
        showOnHome: false,
        id: 9297,
        name: 'Odplamiacze i wybielacze',
        order: 9297,
      },
      {
        children: [],
        image: '',
        showOnHome: false,
        id: 9298,
        name: 'Odplamiacze i wybielacze',
        order: 9298,
      },
    ],
    []
  );

  t.snapshot(result);
});
