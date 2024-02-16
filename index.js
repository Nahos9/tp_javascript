function createArticle(post){
    const article = document.createElement('article')
    article.append(createElement('h2',post.title))
    article.append(createElement('p',post.body))
    return article
}
function createElement(tag,content){
    const element = document.createElement(tag)
    element.innerHTML = content
    return element
}

async function main(){

    const wrapper = document.querySelector('#post')
    const loader = document.createElement('p')
    loader.innerHTML = 'Chargent.....'
    wrapper.append(loader)

   try {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=25',{
        headers:{
            Accet:'application/json'
        }
    })

    if(!res.ok){
        throw new Error('Erreur serveur!!')
    }

    loader.remove()
    const posts = await res.json()

    for(let post of posts){
        wrapper.append(createArticle(post))
    }
   } catch (error) {

    loader.innerHTML  = 'Impossible de contacter le serveur!!'
    loader.style.color = 'red'
    loader.style.fontWeight = 'bold'
   }
  
}


main()