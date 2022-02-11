let list = document.getElementById("todos-list")
let addBtn = document.getElementById("todo-add-btn")
let addInput = document.getElementById("todo-input")

function createTodo() {
    let text = addInput.value

    if(text === "") {
        return
    }

    let li =document.createElement("li")

    let checkbox = document.createElement("input")
    checkbox.classList.add("checkbox")
    checkbox.type = "checkbox"

    let paragraph = document.createElement("p")
    paragraph.classList.add("paragraph")
    paragraph.textContent = text 

    let remove = document.createElement("span")
    remove.classList.add("remove")
    remove.innerHTML = "&cross;"

    li.appendChild(checkbox)
    li.appendChild(paragraph)
    li.appendChild(remove)
    list.appendChild(li)

    addInput.value = ""
}

function removeTodo(removeElement) {
    removeElement.parentElement.remove()
}

function toggleComplete(inputElement) {
    if(inputElement.checked === false) {
        inputElement.parentElement.classList.remove("complete")
    } else {
        inputElement.parentElement.classList.add("complete")
    }
}

list.addEventListener("click", function(event) {
    switch( event.target.tagName) {
        case "p": 
            showEditInput()
            break
        case "SPAN": 
            removeTodo(event.target)
            break
    }
})

list.addEventListener("change", function(event) {
    if(event.target.tagName === "INPUT" && event.target.type === "checkbox" ){
        toggleComplete(event.target)
    }
})

addBtn.addEventListener("click", createTodo)

addInput.addEventListener("keypress", function(event) {
    if( event.key === "Enter") {
        createTodo()
    }
})


