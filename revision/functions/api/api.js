import { getAllTodos, saveToDo } from "../todo_storage.js"
import {json} from 'node:stream/consumers'
export async function index(req,res){
    const todos = await getAllTodos()
    return todos
}

export async function create(req,res){

    const data = await json(req)

    const todo = await saveToDo(data)

    return todo
}