import { createServer } from 'node:http'

const server = createServer()

server.listen(4000, () => {
  console.info('Server is running on port 4000')
})
