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
    // changed task priority to a word, not a number
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
    newRow.append($('<td><button type="button" class="btn-delete mx-1 row-btn-close btn-sm btn-outline-dark rounded" data-toggle="button" aria-label="Close">Delete</button><button type="button" class="btn-edit row-btn-close btn-sm btn-outline-dark rounded" data-toggle="button">Edit</button></td>'));
    newRow.appendTo(tableBody);

    const postTask = (task) =>
        fetch('/tasks/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(task),
        })
            .then((response) => response.json())
            .then((data) => data)
            .catch((error) => {
                console.error('Error: ', error);
            });

    postTask(formData)

    // resets form
    taskForm.get(0).reset();
})

// on page load, get storageData and create tasks
$(document).ready(function () {
    resetTable();

    async function getTasks() {
        const response = await fetch('/tasks/', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        })
        let data = await response.json();
        if (!data) {
            console.log('no tasks to load');
        } else {
            console.log('generating tasks');

            // create table rows
            for (let i = 0; i < data.length; i++) {
                let newRow = $('<tr>');
                for (let x in data[i]) {
                    if (data[i][x] === '1') {
                        $('<td>').text('High').appendTo(newRow);
                        newRow.addClass('table-danger');
                    } else if (data[i][x] === '2') {
                        $('<td>').text('Medium').appendTo(newRow);
                        newRow.addClass('table-warning');
                    } else if (data[i][x] === '3') {
                        $('<td>').text('Low').appendTo(newRow);
                        newRow.addClass('table-primary');
                    } else if (x === 'id') {
                        newRow.attr('id', data[i][x]);
                    } else {
                        $('<td>').text(data[i][x]).appendTo(newRow);
                    }
                }

                newRow.append($('<td><button type="button" class="btn-delete mx-1 row-btn-close btn-sm btn-outline-dark rounded" data-toggle="button" aria-label="Close">Delete</button><button type="button" class="btn-edit row-btn-close btn-sm btn-outline-dark rounded" data-toggle="button">Edit</button></td>'));
                newRow.appendTo(tableBody);
            }
        }
    }

    getTasks();
})

// remove all table rows before adding new ones 
function resetTable() {
    $(tableBody > 'tr').remove();
}

// if element with btn-delete class is clicked, delete task
$(document).on('click', function (e) {
    if($(e.target).hasClass('btn-delete')){
        let taskTarget = $(e.target).parent().parent();
        const id = taskTarget.attr('id');
    
        fetch(`/tasks/${id}`, {
            method: 'DELETE',
        })
        .then((response) => {
            response.ok ? location.reload() : console.error(response)
        })
    }
})

// edit tasks
$(document).on('click', function (e) {
    if ($(e.target).hasClass('btn-edit') && $(e.target).text() === 'Edit') {
        // values of task added to form inputs
        $('input#task-name').val($(e.target).parent().siblings().eq(0).text());

        // changes numerical value back to words for priority
        if ($(e.target).parent().siblings().eq(1).text() === "High") {
            $('select#task-priority').val(1);
        } else if ($(e.target).parent().siblings().eq(1).text() === "Medium") {
            $('select#task-priority').val(2);
        } else if ($(e.target).parent().siblings().eq(1).text() === "Low") {
            $('select#task-priority').val(3);
        }

        $('input#date-picker').val($(e.target).parent().siblings().eq(2).text());

        $('textarea#task-description').val($(e.target).parent().siblings().eq(3).text());

        $(e.target).text('Save');
 
        $('#task-form .btn').attr('disabled', 'disabled');
    } else if ($(e.target).hasClass('btn-edit') && $(e.target).text() === 'Save') {
        let id = $(e.target).parent().parent().attr('id');
        const edits = { 
            'taskName': $('input#task-name').val(), 
            'priority': $('select#task-priority').val(), 
            'dueDate': $('input#date-picker').val(), 
            'description': $('textarea#task-description').val(), 
            'id' : id
        }


            fetch(`/tasks/${id}`, {
                method: 'PUT',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(edits),
            })
            .then((response) => response.json);

        // resets form
        taskForm.get(0).reset();
        // reload page to generate table with updated data
        location.reload()
    }
})

