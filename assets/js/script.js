let currentDate = $('#current-date');
let taskForm = $('#task-form');
let tableBody = $('#tbody');
let storageData;

// currentDate variable updates every second
setInterval(function () {
    currentDate.text(dayjs().format('MMM D, YYYY [at] hh:mm:ss a'))
}, 1000);

// jqueryui datepicker function for task input form
$(function () {
    $("#datepicker").datepicker();
});

// create task table row on task form submission
taskForm.on("submit", function (e) {
    e.preventDefault();
    console.log("Form submitted!");

    // creates a new object with form data 
    // mapping key value pairs from form data to new obj
    const formData = Object.fromEntries((taskForm).serializeArray().map(pair => [pair.name, pair.value]))
    console.log('formData: ', formData);

    // create new row
    let newRow = $('<tr>');
    for (let x in formData) {
        $('<td>').text(formData[x]).appendTo(newRow);
    }
    newRow.append($('<button type="button" class="row-btn-close" aria-label="Close">Delete</button>'));
    newRow.appendTo(tableBody);

    // if no storage data yet, then save form data as storage data
    if (!(localStorage.storageData)) {
        console.log('storage empty');
        storageData = [];
        storageData.push(formData);
        localStorage.setItem('storageData', JSON.stringify(storageData));
    } else {
        storageData = JSON.parse(localStorage.getItem('storageData'));
        storageData.push(formData);
        console.log('storageData', storageData)

        localStorage.setItem('storageData', JSON.stringify(storageData));
    }

    // resets form
    taskForm.get(0).reset();
})

// on page load, get storageData from local storage and create tasks
$(document).ready(function () {
    if (!(localStorage.storageData)) {
        console.log('storage empty, no tasks to load');
    } else {
        console.log('generating tasks');

        // get storageData and save as an array
        storageData = JSON.parse(localStorage.getItem('storageData'));
        console.log(storageData)

        // create table rows
        for (let i = 0; i < storageData.length; i++) {
            let newRow = $('<tr>');
            for (let x in storageData[i]) {
                $('<td>').text(storageData[i][x]).appendTo(newRow);
            }
            newRow.append($('<button type="button" class="row-btn-close" aria-label="Close">Delete</button>'));
            newRow.appendTo(tableBody);
        }
    }
})