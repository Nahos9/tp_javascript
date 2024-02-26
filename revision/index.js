import {createServer} from 'node:http'
import { create, index } from './functions/api/api.js'
const server = createServer( async (req,res)=>{
    res.setHeader('Content-Type','application/json')
    const url = new URL(req.url,`http://${req.headers.host}`)
    const endpoint = `${req.method}:${url.pathname}` 
    
    let todos
    switch (endpoint) {
        case 'GET:/todos':
            todos = await index()
            break;
        case 'POST:/todos':
            todos = await create(req,res)
            break;
        case 'DELETE:/todos':
            
            break;
        default:
            res.write(404)
            break;
    }
    if(todos){
       res.write( JSON.stringify(todos))
    }

    res.end()
}).listen(3000)