
function createHandler() {
    var inputValue = document.getElementById("myInput").value
    // console.log(inputValue)

    // Create <li>
    var listItem = document.createElement("li")
    listItem.className = "todo"

    // li > button
    var deleteButton = document.createElement("button")
    deleteButton.innerHTML = "delete"
    deleteButton.className = "btn-del"
    deleteButton.onclick = deleteHandler

    // li > label
    var itemLabel = document.createElement("label")
    itemLabel.innerHTML = `<input class="todo_input" type="checkbox">${inputValue}`
    itemLabel

    listItem.appendChild(itemLabel)
    listItem.appendChild(deleteButton)
    list.appendChild(listItem)

    var inputValue = document.getElementById("myInput").value = ""
}

function deleteHandler() {
    // console.log(this.parentNode)
    this.parentNode.remove()
}