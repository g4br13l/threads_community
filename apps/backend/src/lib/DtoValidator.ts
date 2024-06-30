import {ZodError, ZodSchema} from "zod";
import {Request, Response} from "express";
import {ValidationErrors} from "../handler/errors/validationErrors.ts";
import {AppErros} from "../handler/errors/appErros.ts";




export const action = (

  zodSchema: ZodSchema,
  controller: (req: Request, resp: Response) => Promise<Response|void>
) => {

  return async (req: Request, resp: Response) => {
    console.log('(DtoValidator.action)')
    try {
      validate(zodSchema, req)
      await controller(req, resp)
    }
    catch (error: unknown) {
      return resp.status(400).json({ error: true, message: (error as Error).message })
    }
  }
}



function validate(zodSchema: ZodSchema, req: Request) {

  try {
    let data = zodSchema.parse( req.body )
  }
  catch (error: unknown) {
    if(error instanceof  ZodError) throw new ValidationErrors(error)
    throw new AppErros('Internal Server Error', 500)
  }
}




