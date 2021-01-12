import React, { useState } from 'react';

import faker from 'faker';
import { range, map } from 'ramda';

import { Container } from './users.styles';
import { Button } from '../button';

faker.seed(100);

const USERS = map(
  () => ({
    id: faker.random.uuid(),
    login: faker.internet.userName(),
    name: faker.fake('{{name.firstName}} {{name.lastName}}'),
    email: faker.internet.email(),
  }),
  range(0, 100)
);

export const UsersComponent = () => {
  const [users, setUsers] = useState<any[]>([]);

  const handleOnClick = () => setUsers(USERS);

  return (
    <Container>
      <Button onClick={handleOnClick}>Fetch users</Button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </Container>
  );
};
