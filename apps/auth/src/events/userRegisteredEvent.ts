export default class UserRegisteredEvent {
  static readonly type = 'user_registered';

  constructor(public readonly email: string) {}
}
