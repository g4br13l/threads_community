import {NextFunction, Request, Response} from "express"
import {ValidationErrors} from "../handler/errors/validationErrors";
import {AppErros} from "../handler/errors/appErros.ts";



export default function ErrorResponse (
    error: Error | ValidationErrors | AppErros,
    req: Request,
    res: Response,
    next: NextFunction
  ): Response
{

  console.log('ErrorResponse')

  if(error instanceof ValidationErrors) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message,
      issues: error.issues
    })
  }

  console.error('Internal Server Error', error)
  return res.status(500).json({ status: 'error', message: 'Internal Server Error' })

}


