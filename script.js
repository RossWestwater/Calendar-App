var timeblockInser = document.getElementById("timeblock-place");

workingHours = 10;
selectionValue = 0;

timeBlock =
  {
    hour: ["8:00 AM","9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM", "5:00 PM"],
    tasks: ["test2"],
  }

var createTimeblock = function () {
//   // loop the following
  for (let i = 0; i < workingHours; i++){
//   // create container
  var containerEl = $("<div>")
  .addClass("row justify-content-center border-bottom border-light timeblock-container");
//   // create time listing
  var timeblockTime = $("<div>")
    timeblockTime.addClass("col-2 ml-2 bg-info text-light text-center p-2")
    timeblockTime.text(timeBlock.hour[i]);
//   // create div for future editable text to input obligation
  var timeblockTask = $("<div>")
    .addClass("col-6 bg-dark border-right border-left border-light text-light p-2")
    var taskInput = $("<textarea>");
    taskInput
    .attr("type","text")
    timeblockTask.append(taskInput);
//   // create div to insert save button. test text to visualize div creation.
  var timeblockSave = $("<div>")
    .addClass("col-2 mr-2 bg-success p-2 save-div ");
    var saveIcon = $("<i>")
    saveIcon.addClass("fas fa-save fa-5x")
    timeblockSave.append(saveIcon);
//   // start stuffing divs into DOM
//   // container into parent
//   // other three sections into the container
  containerEl.append(timeblockTime, timeblockTask, timeblockSave);
  $("#timeblock-place").append(containerEl);
  }
};


createTimeblock();

/* <div class="container-fluid" id="timeblock-place">
<div class="row justify-content-center border-bottom border-light">
  <div class="col-2 ml-2 bg-info text-light text-center p-2">Timeblock hour</div>
  <div class="col-6 bg-dark border-right border-left border-light text-light p-2">timeblock details</div>
  <div class="col-2 mr-2 bg-success p-2">timeblock save button</div>
</div> */