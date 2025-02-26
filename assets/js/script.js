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

    // change color of task based on priority
    // chagned task priority to a word, not a number
    for (let x in formData) {
        if(formData[x] === '1'){
            $('<td>').text('High').appendTo(newRow);
            newRow.addClass('bg-danger');
        } else if(formData[x] === '2'){
            $('<td>').text('Medium').appendTo(newRow);
            newRow.addClass('bg-warning');
        } else if(formData[x] === '3'){
            $('<td>').text('Low').appendTo(newRow);
            newRow.addClass('bg-primary');
        } else {
            $('<td>').text(formData[x]).appendTo(newRow);
        }
    }
    newRow.append($('<button type="button" class="row-btn-close btn-sm bg-secondary rounded" data-toggle="button" aria-label="Close">Delete</button>'));
    newRow.appendTo(tableBody);

    // if no storage data yet, then save form data as storage data
    if (!(localStorage.storageData)) {
        console.log('storage empty');
        // initializing an empty array
        storageData = [];
        // pushing formData obj into empty array
        storageData.push(formData);
        localStorage.setItem('storageData', JSON.stringify(storageData));
    } else {
        // pulling storageData from local storage and putting its value into variable storageData
        storageData = JSON.parse(localStorage.getItem('storageData'));
        // add new form data to storage data
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
                if(storageData[i][x] === '1'){
                    $('<td>').text('High').appendTo(newRow);
                    newRow.addClass('bg-danger');
                } else if(storageData[i][x] === '2'){
                    $('<td>').text('Medium').appendTo(newRow);
                    newRow.addClass('bg-warning');
                } else if(storageData[i][x] === '3'){
                    $('<td>').text('Low').appendTo(newRow);
                    newRow.addClass('bg-primary');
                } else {
                    $('<td>').text(storageData[i][x]).appendTo(newRow);
                }
            }
            
            newRow.append($('<button type="button" class="row-btn-close btn-sm bg-secondary rounded" data-toggle="button" aria-label="Close">Delete</button>'));
            newRow.appendTo(tableBody);
        }
    }
})