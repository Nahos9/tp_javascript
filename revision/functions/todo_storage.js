import {readFile, writeFile} from 'node:fs/promises'

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
 */
export async function deleteTodo(){

}