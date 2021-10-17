let textArea = document.getElementById('floatingTextarea');
let add_button = document.getElementById('add_button');
let todo = document.getElementById('listItem');
let todo_label = document.getElementById("to-do-label");

add_button.onclick = function() {
    todo_listCreate();
}

function todo_listCreate() {
    //create a paragraph element to add as the todo item
    let node = document.createElement("p");
    let textnode = document.createTextNode(textArea.value); //asign the text for textnode variable
    node.appendChild(textnode); //append the child textnode to node object
    document.getElementById("todo_list").appendChild(node);
    textArea.value = "";
}

