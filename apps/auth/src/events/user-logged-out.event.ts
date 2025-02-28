import type { AuthUser } from '../types';

export default class UserLoggedOutEvent {
  constructor(public readonly user: AuthUser) {}
}
