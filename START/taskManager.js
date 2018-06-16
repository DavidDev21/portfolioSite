
var addStepBtn = document.querySelector("#addStepBtn");

addStepBtn.addEventListener("click", function(){
    var stepItem = document.createElement("li");
    var stepList = document.querySelector("#taskDescriptionList");
    var stepDescription = document.querySelector("#describeStepInput");
    
    // create label
    var itemLabel = document.createElement("label");
    itemLabel.textContent = stepDescription.value;
    stepItem.appendChild(itemLabel);
    stepDescription.value = ""; // clear input field

    // create remove step button
    var itemRemoveBtn = document.createElement("button");
    itemRemoveBtn.type = "button";
    itemRemoveBtn.className = "close removeStepBtn";
    itemRemoveBtn.innerHTML = "<span aria-hidden=\"true\">&times;</span>";
    stepItem.appendChild(itemRemoveBtn);

    // add the step to the list
    stepList.appendChild(stepItem);
});

var taskDescriptionList = document.querySelector("#taskDescriptionList");

taskDescriptionList.addEventListener("click",function(event)
{
    if(event.target && event.target.parentNode.className === "close removeStepBtn")
    {
        var removeBtn = event.target.parentNode;
        removeBtn.parentNode.remove();
    } 
});

var addTaskBtn = document.querySelector("#addTaskBtn");

addTaskBtn.addEventListener("click", function()
{

});

// ======== rework
/*
    Task Manager: Should keep track of all task cards between different sections (assigned,in-progress,etc)
    functions:
        1.) addTask(taskElement)
            param:
                @taskElement: object that describes the task
            return: none
        2.) deleteTask(index)
            param:
                @index: indicate position of task within state list 
            return: null if fail
        3.) setTaskState(index,state)
            param:
                @index: indicate position of task within state list 
                @state: indicate the new state for the task
        4.) createTask() // idk
*/
var taskManager = 
{
    taskList: [],
    addTask: function(taskElement)
    {
        taskList.append(taskElement);
        this.displayTaskList();
    },
    deleteTask: function(index)
    {
        if(index < 0 || index >= this.taskList.length)
            return null;
        this.taskList.splice(index,1);
        this.displayTaskList();
    },
    setTaskState: function(index,state)
    {
        if(index < 0 || index >= this.taskList.length)
            return null;
        this.taskList[i].state = state;
    },
    displayTaskList: function()
    {
        for(let i = 0;i < this.taskList.length; i++)
        {
            console.log(this.taskList[i]);
        }
    }
};

