import faker from 'faker';
import { range, map } from 'ramda';

import { client } from '../client';
import { UserApiGetData } from './types';

export const USERS_URL = '/users.json';

export const list = async () => {
  await client.get<UserApiGetData[]>(USERS_URL);
  return map(
    () => ({
      id: faker.random.uuid(),
      login: faker.internet.userName(),
      name: faker.fake('{{name.firstName}} {{name.lastName}}'),
      email: faker.internet.email(),
    }),
    range(0, 3)
  );
};
