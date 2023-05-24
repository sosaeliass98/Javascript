const http = require('http')
const {createReadStream} = require('fs')

const server = http.createServer((req,res) => {
    const fileStream = createReadStream('.data/bigfile.txt', {
        encoding: 'utf-8'
    })

    fileStream.on('data', (chunk) => {
        //pipe lo que hace es indicar que le va a pasar el dato a otra funcion
        fileStream.pipe(res)
    })

    fileStream.on('error', error => {
        console.log(error)
    })
})

server.listen(3000)
console.log(`server on port ${3000}`)