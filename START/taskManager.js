
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

//