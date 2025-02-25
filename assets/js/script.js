let currentDate = $('#current-date');
let taskForm = $('#task-form');
let tableBody = $('#tbody');
let storageData = [];
// currentDate variable updates every second
setInterval(function () {
    currentDate.text(dayjs().format('MMM D, YYYY [at] hh:mm:ss a'))
}, 1000);

// jqueryui datepicker function for task input form
$(function () {
    $("#datepicker").datepicker();
});

// create task table row on task form submission
taskForm.on("submit", function(e){
    e.preventDefault();
    console.log("Form submitted!");
    let formData = taskForm.serializeArray();
    
    // create new row
    let newRow = $('<tr>');
    for(let i = 0; i < formData.length; i++){
        $('<td>').text(formData[i].value).appendTo(newRow);
    }
    newRow.append($('<button type="button" class="row-btn-close" aria-label="Close">Delete</button>'))
    
    newRow.appendTo(tableBody);

    // if no storage data yet, then save form data as storage data
    if(!(localStorage.storageData)){
        console.log('nothing in local storage yet');
        localStorage.setItem('storageData', JSON.stringify(formData));
    } else {
        // get storageData and save as an array
        // push formData into array with old storage data array
        storageData = [JSON.parse(localStorage.getItem('storageData'))];
        storageData.push(formData);
         
        // storageData is an array of arrays of objects with key value pairs of each task item
        localStorage.setItem('storageData', JSON.stringify(storageData));
    }

    // resets form
    taskForm.get(0).reset();
})
