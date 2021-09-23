let textArea = document.getElementById('floatingTextarea');
let add_button = document.getElementById('add_button');

add_button.onclick = function() {
    console.log(`The inputs : ${textArea.value}`);
}