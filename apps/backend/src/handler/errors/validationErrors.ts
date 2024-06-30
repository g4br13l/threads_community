import {ZodError, ZodIssue} from "zod";


export class ValidationErrors {

  public readonly issues: ZodIssue[]
  public readonly message: string
  public readonly statusCode: number


  public constructor(error: ZodError, statusCode = 400) {

    const [ firstError ] = error.issues
    const { message } = firstError

    this.issues = error.issues
    this.message = message
    this.statusCode = statusCode

    console.log(
      '(ValidationErrors): issues:', this.issues,
      ' message:', this.message,
      'status:', this.statusCode
    )

  }


}

