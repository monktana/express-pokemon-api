import express from 'express'
import * as pokemonRoutes from './pokemon/routes'
import * as typeRoutes from './types/routes'

const port = 3000
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/pokemon', pokemonRoutes.list)
app.get('/types', typeRoutes.list)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
