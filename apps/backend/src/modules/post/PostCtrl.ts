import {Request, Response} from "express";
import {db} from "../../database";
import {AppErros} from "../../handler/errors/appErros.ts";
import {Prisma} from "@prisma/client"




export default {


  async CreatePost(req: Request, resp: Response) {

    try {
      const data = req.body
      console.log('CreatePost.data:', data)
      const post = await db.post.create({ data })
      return resp.json({ error: false, message: 'Post created successfully.', post })
    }
    catch (error: any) {
      if(error instanceof Prisma.PrismaClientKnownRequestError) {
        if(error.code === 'P2002')  throw new AppErros('There is a unique constraint violation.')
        else if(error.code === 'P2003') throw new AppErros('at lest one related data does not exist.')
      }
      else return resp.json({ error: true, message: error.message })
    }
  },



  async GetPost(req: Request, resp: Response) {
    try {
      const id = Number(req.params.id)
      const post = await db.post.findUnique({ where: { id } })
      if(!post) return resp.json({ error: true, message: 'Post not found.' })
      return resp.json({ error: false, message: 'Post founded.', post })
    }
    catch (error: any) {
      return resp.json({ error: true, message: error.message })
    }
  },



  async ListPost(req: Request, resp: Response) {
    try {
      const posts = await db.post.findMany()
      if(!posts) return resp.json({ error: true, message: 'Post not found.' })
      return resp.json({ error: false, message: posts })
    }
    catch (error: any) {
      return resp.json({ error: true, message: error.message })
    }
  },



  async UpdatePost(req: Request, resp: Response) {

    try {
      const { id, title, content } = req.body
      const postId = Number(id)
      const postExists = await db.post.findUnique({ where: { id: postId } })
      if(!postExists) return resp.json({ error: true, message: 'Post not found.' })

      const post = await db.post.update({ where: { id: Number(id) }, data: { title, content } })
      return resp.json({ error: false, message: 'Post Updated.', post })
    }
    catch (error: any) {
      return resp.json({ error: true, message: error.message })
    }
  },



  async deletePost(req: Request, resp: Response) {

    try {
      const id: number = Number(req.params.id)
      const postExists = await db.post.findUnique({ where: { id } })
      if(!postExists) return resp.json({ error: true, message: 'Post not found.' })

      const post = await db.post.delete({ where: { id } })
      return resp.json({ error: false, message: 'Post deleted.', id })
    }
    catch (error: any) {
      return resp.json({ error: true, message: error.message })
    }
  },


}


