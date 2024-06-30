import {z, ZodError, ZodType} from "zod";
import {ValidationErrors} from "../handler/errors/validationErrors";
import {AppErros} from "../handler/errors/appErros";




export abstract class AbstractDTO<Schema extends ZodType> {

  protected data: z.infer<Schema> = Object

  public constructor(data: Record<string, unknown>, ) {
    console.log('(AbstractDTO).constructor')
    this.validate(data)
  }

  protected abstract rules(): Schema

  private validate(data: Record<string, unknown>) {
    try {
      this.data = this.rules().parse(data)
    }
    catch (error: unknown) {
      if(error instanceof ZodError) throw new ValidationErrors(error as ZodError)
      throw new AppErros('Internal Server Error', 500)
    }
  }

  public getAll(): z.infer<Schema> {
    return this.data
  }

  public get<key extends keyof z.infer<Schema>>(key: key) {
    return this.data[key]
  }

}


