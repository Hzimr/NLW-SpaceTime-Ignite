import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(cors, {
  origin: true, // ['url de desenvolvimento e url de produção, é o mais recomendado'] atualmente qualquer aplicação front-end pode acessar nosso back-end
})
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP server runnin on http://localhost:3333')
  })
