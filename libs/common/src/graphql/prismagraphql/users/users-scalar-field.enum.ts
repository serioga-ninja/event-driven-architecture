import { registerEnumType } from '@nestjs/graphql';

export enum UsersScalarFieldEnum {
  id = 'id',
  email = 'email',
  phone = 'phone',
  firstName = 'firstName',
  lastName = 'lastName',
  isTfaEnabled = 'isTfaEnabled',
  tfaSecret = 'tfaSecret',
  entityStatus = 'entityStatus',
  password = 'password',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(UsersScalarFieldEnum, {
  name: 'UsersScalarFieldEnum',
  description: undefined,
});
