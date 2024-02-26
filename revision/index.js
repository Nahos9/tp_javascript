import {createServer} from 'node:http'
import { getAllTodos } from './functions/todo_storage.js'


const server = createServer( async (req,res)=>{
    res.setHeader('Content-Type','application/json')
    const todos = await getAllTodos()
    res.write(JSON.stringify(todos))

    
    res.end()
}).listen(3000)