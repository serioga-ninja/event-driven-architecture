import { registerEnumType } from '@nestjs/graphql';

export enum PostsScalarFieldEnum {
    id = "id",
    content = "content",
    visibility = "visibility",
    entityStatus = "entityStatus",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    usersId = "usersId"
}


registerEnumType(PostsScalarFieldEnum, { name: 'PostsScalarFieldEnum', description: undefined })
