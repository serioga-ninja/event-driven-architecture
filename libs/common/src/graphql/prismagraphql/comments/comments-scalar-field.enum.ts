import { registerEnumType } from '@nestjs/graphql';

export enum CommentsScalarFieldEnum {
    id = "id",
    content = "content",
    entityStatus = "entityStatus",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    usersId = "usersId",
    postsId = "postsId"
}


registerEnumType(CommentsScalarFieldEnum, { name: 'CommentsScalarFieldEnum', description: undefined })
