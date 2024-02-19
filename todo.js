import { TodoList } from "./componnents/TodoList.js";
import { fetchJSON } from "./functions/api.js";
import { createElemen } from "./functions/dom.js";

try{

    const todos = await fetchJSON('https://jsonplaceholder.typicode.com/todos?_limit=5')
    console.log(todos)
    const list = new TodoList(todos)
    list.appendTo(document.querySelector('#todolist'))
    const div = document.querySelector('#todolist')


}catch(e){

 const alertElement = createElemen('div',{
        class : 'alert alert-danger m-3',
        role : 'alert'
    })
    alertElement.innerHTML = 'Impossible de charger les données!!'

    document.body.prepend(alertElement)
}