import express, { Express } from 'express'
import cors from 'cors'
import { rootHandler, selectAllUsers, selectOneUser } from './handlers'

const port = process.env.PORT || '8000'

const app: Express = express()
  .on('error', (err: any) => {
    console.error(err)
  })

app.get('/', rootHandler)
app.get('/Users/', cors(), selectAllUsers)
app.get('/Users/:id', cors(), selectOneUser)

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`)
})
