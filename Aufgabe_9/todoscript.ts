window.addEventListener("load", function (): void {

    var todos: string[] = ["todo Nummer 1", "todo Nummer 2", "todo Nummer 3", "todo Nummer 4"];

    var i: number = 0;

    while (todos.length > i) {
        document.querySelector("#todos").innerHTML += "<p>" + todos[i] + "</p>";
        console.log(todos[i]);
        i++;
    }
});



/* function check(): void {
    if (document.querySelector("#check1").classList.contains("fa-check-circle")) {
        document.querySelector("#check1").classList.remove("fa-check-circle");
        console.log("Dieser Punkt wurde abgewählt.")
    } else {
        document.querySelector("#check1").classList.add("fa-check-circle");
        console.log("Dieser Punkt wurde abgehakt.");
    }
} */