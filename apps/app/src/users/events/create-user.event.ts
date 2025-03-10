export default class CreateUserEvent {
  static readonly type = 'user_created';

  constructor(public readonly email: string) {}
}
