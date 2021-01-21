import express from 'express'
const server = express()
import { Products } from './db.js'

server.get('/', (req, res) => {
    Products.findAll()
    .then(resp => res.send(resp))
    .catch(err => console.log(err))
})

export default server