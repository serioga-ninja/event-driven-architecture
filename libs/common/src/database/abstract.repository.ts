import type {
  ClientSession,
  Connection,
  Model,
  RootFilterQuery,
} from 'mongoose';

export default abstract class AbstractRepository<Entity> {
  constructor(
    protected readonly model: Model<Entity>,
    protected readonly connection: Connection,
  ) {}

  findOneBy(query: RootFilterQuery<Entity>) {
    return this.model.findOne(query);
  }

  findOneById(id: string) {
    return this.model.findById(id);
  }

  create(data: any, session?: ClientSession) {
    return this.model.create([data], { session });
  }

  // async startTransaction() {
  //   const session = await this.connection.startSession();
  //   session.startTransaction();

  //   return session;
  // }
}
