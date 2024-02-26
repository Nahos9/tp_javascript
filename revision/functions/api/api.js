import { deleteTodo, getAllTodos, saveToDo, updateTodo } from "../todo_storage.js"
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
export async function remove(req,res,url){

    const id = parseInt(url.searchParams.get('id'),10)
    await deleteTodo(id)
    res.setHeader(204)
}

export async function update(req,res,url){
    const id = parseInt(url.searchParams.get('id'),10)
    const todoData = await json(req)
    const todo = await updateTodo(id,todoData)
    return todo
}