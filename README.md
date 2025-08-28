
# Task Manager

I created a task manager web app that allows users to add tasks, assign priority levels, track deadlines, edit tasks, and delete tasks using HTML, JavaScript, Bootstrap, Google Fonts, and jQuery.
## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

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

