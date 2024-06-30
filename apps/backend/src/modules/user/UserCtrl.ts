import {Request, Response} from "express";
import {db} from "../../database";


export default {

  async createUser(req: Request, resp: Response) {

    try {
      const { name, email } = req.body
      const userExists = await db.user.findUnique({ where: { email } })

      if(userExists) { return resp.json({ error: true, message: 'Error: User already exists.' })}
      const user = await db.user.create({ data: { name, email } })
      return resp.json({ error: false, message: 'User created successfully', user })
    }
    catch (error: any) {
      return resp.json({ message: error.message })
    }
  }



}







