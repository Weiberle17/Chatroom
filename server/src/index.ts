import express, { Express } from 'express'
import { rootHandler, selectAllUsers, selectOneUser } from './handlers'

const port = process.env.PORT || '8000'

const app: Express = express()
  .on('error', (err: any) => {
    console.error(err)
  })

app.get('/', rootHandler)
app.get('/Users/', selectAllUsers)
app.get('/Users/:id', selectOneUser)

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`)
})
