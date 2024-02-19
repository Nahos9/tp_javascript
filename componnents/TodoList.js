import { createElemen } from "../functions/dom.js"

/**
 * @typedef {object} Todo
 * @property {number} id
 * @property {string} title
 * @property {boolean} completed
 */
export class TodoList {

    /**
     * @type {Todo[]}
     */
    #todos = []

    /**
     * @type {HTMLUListElement[]}
     */
    #liste = []

    /**
     * 
     * @param {Todo[]} todos 
     */
    constructor(todos){
        this.#todos = todos 
    }

    /**
     * 
     * @param {HTMLElement} element 
     */
    appendTo(element){
        element.innerHTML = `
        <form class="d-flex pb-4">
        <input required="" class="form-control" type="text" placeholder="Acheter des patates..." name="title" data-com.bitwarden.browser.user-edited="yes">
        <button class="btn btn-primary">Ajouter</button>
        </form>
         <main>
            <div class="btn-group mb-4" role="group">
                    <button type="button" class=" btn btn-outline-primary active" data-filter="all">Toutes</button>
                    <button type="button" class=" btn btn-outline-primary" data-filter="todo">A faire</button>
                    <button type="button" class=" btn btn-outline-primary" data-filter="done">Faites</button>
            </div>

             <ul class="list-group">
           
            </ul>
        </main>
        `
        this.#liste = element.querySelector('.list-group')
            for(let todo of this.#todos){
               const tache = new TodoListItem(todo)
               this.#liste.append(tache.element)
            }

      element.querySelector('form').addEventListener('submit',(e)=> this.onsubmit(e))

    }

    onsubmit(e){
        //il faut toujours placer le preventDefault() en debut
        e.preventDefault()
      
        const form = e.currentTarget

        const title = new FormData(form).get('title').toString().trim()

        if(title == ''){
            return
        }

        const todo = {
            id: new Date(),
            title,
            completed: false
        }
        
       const li =  new TodoListItem(todo)
        this.#liste.prepend(li.element)

        form.reset()
    }
}

class TodoListItem{

    #element

    constructor(todo){
        const li = createElemen('li',{
            class:'todo list-group-item d-flex align-items-center'
        })

        const id = `todo-${todo.id}`
        const checkbox = createElemen('input',{
            type:'checkbox',
            class:'form-check-input',
            id,
            checked: todo.completed ? '': null
        })

        const label = createElemen('label',{
            class:'ms-2 form-check-label',
            for: id
        })

        label.innerHTML = `${todo.title}`
        const button = createElemen('label',{
            class:'ms-auto btn btn-danger btn-sm',
        })
        button.innerHTML = ` <i class="bi-trash">
        </i>`

        li.append(checkbox)
        li.append(label)
        li.append(button)

        button.addEventListener('click',() => this.remove())

        this.#element = li
    }

    get element(){
        return this.#element
    }
    
    // appendTo(element){
    //     element.append(this.#element)
    // }

    remove(){
        this.#element.remove()
    }
}