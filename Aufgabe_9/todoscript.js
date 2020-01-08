/* window.addEventListener("load", function (): void {

    var todos: string[] = ["todo Nummer 1", "todo Nummer 2", "todo Nummer 3", "todo Nummer 4"];

    var i: number = 0;

    while (todos.length > i) {
        document.querySelector("#todos").innerHTML += "<p>" + todos[i] + "</p>";
        console.log(todos[i]);
        i++;
    }
}); */
var taskcounter = 0;
window.addEventListener("load", function () {
    document.querySelector(".addButton").addEventListener("click", AddTaskText);
    document.querySelector(".taskcounter").addEventListener("click", AddTaskText);
});
function AddTaskText() {
    var newtask = document.querySelector(".newtask").value;
    console.log(newtask);
    addTaskToList(newtask);
    var element = document.querySelector(".taskspace");
    var numberofChildren = element.children.length;
    taskcounter = numberofChildren;
    console.log("number of todos:" + numberofChildren);
    document.querySelector(".taskcounter").innerHTML = numberofChildren + " in total";
}
function addTaskToList(newTaskValue) {
    var addElement = document.createElement("div");
    addElement.setAttribute("class", "template");
    addElement.setAttribute("id", "TaskId" + taskcounter);
    var myHtmlTemplate = "";
    myHtmlTemplate += "<button onclick=\"CheckedButton(this)\" class=\"fas fa-circle checkbox\" id=\"circle" + taskcounter + "\"></button>";
    myHtmlTemplate += "<input class=\"firsttask\" id=\"firsttask" + taskcounter + "\" value=\"" + newTaskValue + "\" ></input>";
    myHtmlTemplate += "<button onclick=\"DeleteTaskText(this)\" class=\"fas fa-trash-alt trash\" id=\"delete" + taskcounter + "\"></button>";
    addElement.innerHTML = myHtmlTemplate;
    document.querySelector(".taskspace").appendChild(addElement);
    console.log("addTasktoList:" + newTaskValue);
}
function DeleteTaskText(ClickedTrash) {
    console.log("task was deleted.");
    ClickedTrash.parentElement.remove();
    taskcounter--;
    var element = document.querySelector(".taskspace");
    var numberofChildren = element.children.length;
    document.querySelector(".taskcounter").innerHTML = numberofChildren + " tasks in total";
}
function CheckedButton(ClickedButton) {
    if (ClickedButton.classList.contains("fa-circle")) {
        ClickedButton.classList.remove("fa-circle");
        ClickedButton.classList.add("fa-check-circle");
    }
    else {
        ClickedButton.classList.remove("fa-check-circle");
        ClickedButton.classList.add("fa-circle");
    }
}
/* var list: string[] = ["a1", "a2", "a3"];
function createItem(){

    for {
        document.querySelector("content").innerHTML += "bla";

        document.querySelector(".elemt:last-child .fa-check").addEventListener("click". )
    }
} */
/* var element: HTMLElement;
element = document.querySelector("content");
var new = document.createElement("div");
    new.id= "bla";
element.appendChild(new); */ 
//# sourceMappingURL=todoscript.js.map