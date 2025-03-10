import type { AuthUser } from '../types';

export default class UserLoggedInEvent {
  constructor(public readonly user: AuthUser) {}
}
