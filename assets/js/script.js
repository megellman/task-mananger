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

    // remove all table rows before adding new ones 
    resetTable();

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
        if (formData[x] === '1') {
            $('<td>').text('High').appendTo(newRow);
            newRow.addClass('table-danger');
        } else if (formData[x] === '2') {
            $('<td>').text('Medium').appendTo(newRow);
            newRow.addClass('table-warning');
        } else if (formData[x] === '3') {
            $('<td>').text('Low').appendTo(newRow);
            newRow.addClass('table-success');
        } else {
            $('<td>').text(formData[x]).appendTo(newRow);
        }
    }
    newRow.append($('<td><button type="button" class="btn-delete mx-1 row-btn-close btn-sm bg-danger bg-opacity-75 rounded" data-toggle="button" aria-label="Close">Delete</button><button type="button" class="btn-edit row-btn-close btn-sm bg-warning bg-opacity-75 rounded" data-toggle="button">Edit</button></td>'));
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
    resetTable();
    if (!(localStorage.storageData)) {
        console.log('storage empty, no tasks to load');
    } else {
        console.log('generating tasks');

        // get storageData and save as an array
        storageData = JSON.parse(localStorage.getItem('storageData'));

        // create table rows
        for (let i = 0; i < storageData.length; i++) {
            let newRow = $('<tr>');
            for (let x in storageData[i]) {
                if (storageData[i][x] === '1') {
                    $('<td>').text('High').appendTo(newRow);
                    newRow.addClass('table-danger');
                } else if (storageData[i][x] === '2') {
                    $('<td>').text('Medium').appendTo(newRow);
                    newRow.addClass('table-warning');
                } else if (storageData[i][x] === '3') {
                    $('<td>').text('Low').appendTo(newRow);
                    newRow.addClass('table-success');
                } else {
                    $('<td>').text(storageData[i][x]).appendTo(newRow);
                }
            }

            newRow.append($('<td><button type="button" class="btn-delete mx-1 row-btn-close btn-sm bg-danger bg-opacity-75 rounded" data-toggle="button" aria-label="Close">Delete</button><button type="button" class="btn-edit row-btn-close btn-sm bg-warning bg-opacity-75 rounded" data-toggle="button">Edit</button></td>'));
            newRow.appendTo(tableBody);
        }
    }
})

// remove all table rows before adding new ones 
function resetTable() {
    $(tableBody > 'tr').remove();
}

// if element with btn-delete class is clicked, call delete task function
$(document).on('click', function (e) {
    if ($(e.target).hasClass('btn-delete')) deleteTask(e)
})

// delete task from table
function deleteTask(e) {
    // pulling storageData from local storage and putting its value into variable storageData
    storageData = JSON.parse(localStorage.getItem('storageData'));

    let target = $(e.target).parent().children().eq(0).text();
    console.log($(e.target))
    // deletes element from html
    $(e.target).parent().remove()

    console.log(Object.values(storageData))
    // find taskName: 'target' and remove object from array
    let index = storageData.findIndex(x => x.taskName === target);
    // removing the element at the index given, only removing 1 element in array
    storageData.splice(index, 1);

    // save modified array to local storage
    localStorage.setItem('storageData', JSON.stringify(storageData));
}

// edit tasks
$(document).on('click', function (e) {
    if ($(e.target).hasClass('btn-edit') && $(e.target).text() === 'Edit') {
        $('input#task-name').val($(e.target).parent().siblings().eq(0).text());

        if ($(e.target).parent().siblings().eq(1).text() === "High") {
            $('select#task-priority').val(1);
        } else if ($(e.target).parent().siblings().eq(1).text() === "Medium") {
            $('select#task-priority').val(2);
        } else if ($(e.target).parent().siblings().eq(1).text() === "Low") {
            $('select#task-priority').val(3);
        }

        $('input#date-picker').val($(e.target).parent().siblings().eq(2).text());

        $('textarea#task-description').val($(e.target).parent().siblings().eq(3).text());

        $(e.target).text('Save Changes');
    } else if ($(e.target).hasClass('btn-edit') && $(e.target).text() === 'Save Changes') {
        console.log('Changes!')
        const taskData = Object.fromEntries((taskForm).serializeArray().map(pair => [pair.name, pair.value]))

        storageData = JSON.parse(localStorage.getItem('storageData'));

        let target = $(e.target).parent().siblings().eq(0).text();

        // find taskName: 'target' and remove object from array
        let index = storageData.findIndex(x => x.taskName === target);
        // replace array object with updated data
        storageData.splice(index, 1, taskData);
        console.log(storageData);
        // save modified array to local storage
        localStorage.setItem('storageData', JSON.stringify(storageData));
        // resets form
        taskForm.get(0).reset();
        // reload page to generate table with updated data
        location.reload()
    }
})

