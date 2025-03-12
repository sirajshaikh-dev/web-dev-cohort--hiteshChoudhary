

// const inputVal= input.addEventListener((e)=>e.target.value)
// console.log(inputVal)

// addBtn.onclick(function addTodo(e) {
//     const li = document.createElement('li')
//     ul.appendChild(li)
// })



// function addTodo(e) {
//     const inputVal= e.target.value
//     console.log(inputVal)

// }

const input= document.getElementById("input")
const addBtn= document.getElementById('addBtn')
const ul= document.getElementById('ul')
const delAllBtn= document.getElementById('delAllBtn')

addBtn.addEventListener('click',function(){
// const inputVal= input.value.trim("")
    if (input.value.trim()==="" ) {
        alert('kuch to likho')
        return
    }
    const li= document.createElement('li')
    
    const toggleComplete= document.createElement('input')
    toggleComplete.type= "checkbox"
    li.appendChild(toggleComplete)
    
    toggleComplete.addEventListener('change',function(e){
        const li= e.target.parentElement

        if(e.target.checked){
            li.style.textDecoration='line-through'
            li.contentEditable=false
        }else{
            li.style.textDecoration= 'none'
            li.contentEditable= true
        }
    })

    const taskText= document.createElement('span')
    taskText.innerText= input.value

    const delBtn= document.createElement('button')
    delBtn.innerText= 'X'

    const editBtn= document.createElement('button')
    editBtn.innerText='Edit'

    li.appendChild(toggleComplete)
    li.appendChild(taskText)
    li.appendChild(editBtn)
    li.appendChild(delBtn)
    ul.appendChild(li)
    input.value=""

    delBtn.addEventListener('click',function () {
            li.remove()
    })

    delAllBtn.addEventListener('click',function(){
/* Method1 */   
        // ul.innerHTML=""  //sweet and simple 
        //also li.remove()
    
/* Method2 */ 
        const listItem= document.querySelectorAll('li')
        // listItem.forEach((li)=>li.remove())

/* Method3 */
        for (let i = 0; i < listItem.length; i++) {
                listItem[i].remove() 
            }
    })

    editBtn.addEventListener('click',function () {
        let inputElement= document.createElement('input')
        inputElement.value=taskText.innerText
        li.innerText=""
        // const updatedInput= inputElement.value

        // console.log(updatedInput)

        const savBtn= document.createElement('button')
        savBtn.innerText="save"

        li.appendChild(inputElement)
        li.appendChild(savBtn)

        savBtn.addEventListener("click",function(){
            li.innerText= inputElement.value
            li.appendChild(editBtn)
        })
    })

})

    