import {readFile} from 'node:fs/promises'

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