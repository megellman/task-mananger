
# Task Manager

I created a task manager web app that allows users to add tasks, assign priority levels, track deadlines, edit tasks, and delete tasks using HTML, JavaScript, Bootstrap, Google Fonts, and jQuery.

## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## Features

### Modal for Instructions: 
Modal that can be opened via a button. It provides instructions on how to use the app.
### Capture Form Data and Save to LocalStorage: 
Uses jQuery to capture form inputs on submit. Form data is used to create a new row in the table that displays the tasks. Task data is saved to localStorage. Form inputs cleared after task entry. 
### Display Tasks from LocalStorage:
Function reads tasks from localStorage and creates table rows.
### Delete Tasks:
Delete buttons on table rows to delete specific tasks. Event listener attached to Delete button using jQuery. When clicked, it removes the tasks from both the table and localStorage. 
### Edit Tasks:
Edit button on table rows to modify specific tasks. Event listener attached to Edit button. When clicked, the form is populated with the task data, allowng the user to update the task name, priority, due date, and description. After editing and savign the changes, the task data is updated in localStorage as well as the task list. 


## Demo

[Visit Page](https://megellman.github.io/task-mananger/)


## Megan Ellman
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://megellman.github.io/portfolio/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/megan-ellman/)
[![github](https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white)](https://github.com/megellman)

## License

[MIT](https://choosealicense.com/licenses/mit/)


## Roadmap

- Task Sorting: Implement functionality to sort tasks by priority, due date, or name.

- Task Filtering: Allow users to filter tasks by priority level.

- Task Completion: Add a checkbox for each task to mark it as completed, with a line-through or a different background color to indicate completion.



## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## Documentation

[Documentation](https://megellman.github.io/task-manager/)

# 11 Express.js: Task Tracker

## Your Task

Your assignment is to modify starter code to create an application called **Task Tracker** that can be used to write, categorize, and manage personal tasks. This application will use an Express.js back end and will save and retrieve task data from a JSON file.

The application’s front end has already been created. It's your job to build the back end, connect the two, and then deploy the entire application to Heroku.


## User Story

AS A busy professional
I WANT to be able to write, categorize, and manage my tasks
SO THAT I can stay organized and focused throughout my day

GIVEN a task management application
WHEN I open the Task Tracker
THEN I am presented with a landing page with a link to the tasks page
WHEN I click on the link to the tasks page
THEN I am presented with a page with existing tasks listed in the left-hand column, plus empty fields to enter a new task in the right-hand column
WHEN I enter a new task title, description, and select a category
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new task is saved and appears in the left-hand column with the other existing tasks
WHEN I click on an existing task in the list in the left-hand column
THEN that task appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new task
WHEN I mark a task as completed
THEN the task is updated with a completed status



## Mock-Up

The following images show the web application's appearance and functionality:

![Existing tasks are listed in the left-hand column with empty fields on the right-hand side for the new task’s title, description, and category.](./Assets/task-tracker-demo-01.png)

![Task titled “Submit project” reads, “Finalize and submit project by Friday,” with other categorized tasks listed on the left.](./Assets/task-tracker-demo-02.png)


## Getting Started

On the back end, the application should include a `db.json` file that will be used to store and retrieve tasks using the `fs` module.

The following HTML routes should be created:

* `GET /tasks` should return the `tasks.html` file.

* `GET *` should return the `index.html` file.

The following API routes should be created:

* `GET /api/tasks` should read the `db.json` file and return all saved tasks as JSON.

* `POST /api/tasks` should receive a new task to save on the request body, add it to the `db.json` file, and then return the new task to the client. You'll need to find a way to give each task a unique id when it's saved (look into npm packages that could do this for you).


## Bonus

You haven’t learned how to handle DELETE or PUT requests, but this application offers that functionality on the front end. As a bonus, try to add the following:

* `DELETE /api/tasks/:id` should receive a query parameter that contains the id of a task to delete. To delete a task, you'll need to read all tasks from the `db.json` file, remove the task with the given `id` property, and then rewrite the tasks to the `db.json` file.

* `PUT /api/tasks/:id` should allow the user to update an existing task's completed status or edit its details.
