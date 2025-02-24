# Mini-Project: Task Manager with Priorities
In this project, you will build a task manager web app that allows users to add tasks, assign priority levels, track deadlines, and delete tasks. Use Bootstrap, Google Fonts, and jQuery to make the app interactive and visually appealing.

## Instructions
This mini-project is also broken down into multiple tasks. The first three tasks will help you achieve the Minimum Viable Product (MVP).

## Task 1: HTML Structure
### Header Section

Create a header area that includes the title of the app, such as "Task Manager".

Include the current date and time using Day.js, and update it every second (formatted similarly: Jun 30, 2025 at 08:37:48 am).

### Task Input Form

Use a Bootstrap card to create a form where users can input their task details.

The form should have the following fields:
<ul>
<li>Task name (text input)
<li>Priority level (dropdown select with options: "High", "Medium", "Low")
<li>Due date (use the date input type or jQuery UI datepicker)
<li>Task description (textarea for longer details)
</ul>

### Tasks List

Create an empty Bootstrap table that will display the tasks once they are added.

The table should have the following columns:
| Task Name | Priority | Due Date | Task Description | Actions (For delete/edit) |
| --- | --- | --- | ---- | ---- |
 

### Modal for Instructions

Add a modal that can be opened via a button. 

The modal should provide instructions on how to use the app, such as how to add a task and delete tasks.

## Task 2: Capture Form Data and Save in LocalStorage
### Form Submission

Using jQuery, set up functionality to capture the form inputs on submit.

The form data should be used to create a new row in the table that displays the tasks.

### LocalStorage

Save the task data (task name, priority, due date, description) to localStorage to make it persistent across page refreshes.

After saving the data, clear the form inputs for the next task entry.

### Close Modal on Submit

Ensure the modal closes when the user submits a new task.

Use jQuery to append a new task to the table based on the captured data.

## Task 3: Display Tasks from LocalStorage
### Load Tasks on Page Load

Create a function that reads the tasks from localStorage when the page loads.

### Create Table Rows:
For each task, create a table row (<tr>) with the following columns:
| Task Name | Priority | Due Date | Task Description | Actions (Edit/Delete buttons) |
| --- | -- | --- | --- | --- |

### Color-Coding Based on Priority
Assign colors to tasks based on their priority. For example:

*High Priority: Red background.
Medium Priority: Yellow background.
Low Priority: Green background.*

### Clear and Update Table
Before appending the tasks to the table, clear the <tbody> of the table to avoid duplicate rows when the page is reloaded.

Call this function both on page load and after a task is submitted.

## Task 4: Delete and Edit Tasks
### Edit/Delete Columns

Add a new column to the table for Actions, where each task has a Delete button and an Edit button.

### Delete Functionality

Attach an event listener to the Delete button using jQuery. When clicked, it should remove the task from both the table and localStorage.

Use jQuery’s event delegation for deleting, as the rows are dynamically generated.

### Edit Functionality

Allow users to click an Edit button to modify task details. 

The form should be populated with the task data, allowing users to update the task name, priority, due date, and description.

After editing, the task data should be updated in localStorage and the task list should reflect the changes.

### Updating Table After Modifications

Make sure the task list gets updated correctly after editing or deleting tasks by reloading data from localStorage.

### Bonus Features
<ul>
<li>Task Sorting: Implement functionality to sort tasks by priority, due date, or name.
<li>Task Filtering: Allow users to filter tasks by priority level.
<li>Task Completion: Add a checkbox for each task to mark it as completed, with a line-through or a different background color to indicate completion.
</ul>