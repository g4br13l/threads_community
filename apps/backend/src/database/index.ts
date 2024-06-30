import { PrismaClient } from '@prisma/client'



export const db = new PrismaClient()

/*db.$on('query', (event) => {
  console.log('Query: ' + event.query)
  console.log('Params: ' + event.params)
  console.log('Duration: ' + event.duration + 'ms')
})*/


