import { Post, User } from '@prisma/client'

export declare interface PostPageItem extends Post {
  author: User
}
