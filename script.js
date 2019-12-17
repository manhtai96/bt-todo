$(document).ready(function() {
    var todos = ["Running", "Have breakfast", "Reading book"];
    var todosElement = $(".list-todo");

    function renderTodos() {
        todos.map(function(todo) {
            todosElement.append("<li>" + todo + "</li>")
        })
    }
    renderTodos()
    $(".form-todo").submit(function(even) {
        event.preventDefault();
        var contentInput = $("#myInput");
        var text = contentInput.val();
        if (text !== '') {
            todos.push(text);
            todosElement.empty();
            renderTodos();
        }
        contentInput.val('');
    })
});