export default class UserSignUpEvent {
  static readonly type = 'user_registered';

  constructor(public readonly email: string) {}
}
