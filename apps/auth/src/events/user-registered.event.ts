export default class UserRegisteredEvent {
  static readonly type = 'user_registered';

  constructor(
    public readonly id: string,
    public readonly email: string,
  ) {}
}
