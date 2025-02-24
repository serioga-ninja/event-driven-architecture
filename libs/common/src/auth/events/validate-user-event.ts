export default class ValidateUserEvent {
  public static type = 'validate-user';

  constructor(public readonly authorization: string) {}
}
