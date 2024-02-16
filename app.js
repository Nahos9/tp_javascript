// document.querySelector('form').addEventListener('submit',(e)=>{
//     //e.preventDefault()
//     const form = e.target
//     const data = new FormData(form)
//     const firstname = data.get('firstname')
//     const email = data.get('email')

//     if(!email.includes('@') || email.length < 10){
//         e.preventDefault()
//     }
// })

document.querySelector('input').addEventListener('change',(e)=>{

    console.log(e.currentTarget.value)
})

