import { DataSource } from 'typeorm';
import { User } from './user.entity';

export const UserRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(User).extend({
    findByUsername(username: string): Promise<User | undefined> {
      return this.findOne({ where: { username } });
    },
  });
};
