import type { ClientSession, Connection, Model } from 'mongoose';

export default abstract class AbstractRepository<Entity> {
  constructor(
    protected readonly model: Model<Entity>,
    protected readonly connection: Connection,
  ) {}

  create(data: any, session?: ClientSession) {
    return this.model.create([data], { session });
  }

  // async startTransaction() {
  //   const session = await this.connection.startSession();
  //   session.startTransaction();

  //   return session;
  // }
}
