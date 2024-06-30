import {Prisma} from "@prisma/client";




type UserT = Prisma.UserGetPayload<{ include: { Post: true } }>

//let dataUser: UserT
//dataUser.Post

const userWithPosts = Prisma.validator<Prisma.UserInclude>()({ Post: true })
type UserWithPostsT = Prisma.UserGetPayload<{ include: typeof userWithPosts }>

/*let user: UserWithPostsT
user.Post.find(item => item.title === '')*/


