import {z} from "zod";
import {Prisma} from "@prisma/client";




export const PostSchema = z.object({
  id: z.number().min(1).optional(),
  title: z.string().min(3).max(50),
  content: z.string().optional(),
  userId: z.number().min(1)
})

export type CreatePostDTOT = typeof PostSchema
const postWithAuthor = Prisma.validator<Prisma.PostInclude>()({ author: true })
type PostWithAuthorT = Prisma.PostGetPayload<{ include: typeof postWithAuthor }>

//let data: PostWithAuthorT
//data.author.name













