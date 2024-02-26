import {readFile, writeFile} from 'node:fs/promises'
import { NotFoundError } from '../errors/error.js'

/**
 * @typedef {Object} Todo
 * 
 * @return {Promise<Todo[]>}
 */


const url = 'storage/data.json'
export async function getAllTodos(){

    const todo =  await readFile(url,'utf-8')

    return JSON.parse(todo)
}

/**
 * 
 * @param {Object} Todo
 * 
 * @return {Promise<Todo} 
 */
export async function saveToDo({title,completed = false}){

    const todo = {
        id : Date.now(),
        title,
        completed
    }
    let todos = [todo,... await getAllTodos()]
    
    await writeFile(url,JSON.stringify(todos))
    return todo
}

/**
 * @param {number} id
 * 
 * @return {Promise}
 */
export async function deleteTodo(id){

    const todos = await getAllTodos()
    const todo = todos.findIndex(todo => todo.id === id)

    if(todo === -1){
        throw new NotFoundError()
    }
    
    await writeFile(url,JSON.stringify(todos.filter(todo=>todo.id != id)))

}
/**
 * 
 * @param {number} id 
 * @param {{completed:boolean,title:string}} partial
 * 
 * @return {Promise<Todo>} 
 */
export async function updateTodo(id,partial){
    const todos = await getAllTodos()

    let todo = todos.find(todo => todo.id === id)
    if(todo === undefined){
        throw new NotFoundError()
    }
    Object.assign(todo,partial)
    await writeFile(url,JSON.stringify(todos))

    return todo
}