


export class AppErros {

  public readonly message: string = ''
  public readonly statusCode: number = 0


  public constructor(message: string, statusCode = 400 ) {

    this.message = message
    this.statusCode = statusCode
    console.log('(AppErros) - message:', this.message, 'statusCode:', this.statusCode)

  }

}



