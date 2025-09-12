# task-manager

## Table of Contents
- [task-manager](#task-manager)
  - [Table of Contents](#table-of-contents)
  - [Technology Used](#technology-used)
  - [Description](#description)
  - [Usage](#usage)
  - [Learning Points](#learning-points)
  - [Author Info](#author-info)
    - [Megan Ellman](#megan-ellman)
  - [License](#license)

<br />

## Technology Used

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML     | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)      |   
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |   
| JavaScript | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)     |    
| jQuery | [https://jquery.com/](https://jquery.com/) |
| Bootstrap | [https://getbootstrap.com/](https://getbootstrap.com/) |
| Node.js | [https://nodejs.org/en/](https://nodejs.org/en/) |
| Express | [https://expressjs.com/](https://expressjs.com/) |
| UUID | [https://www.npmjs.com/package/uuid](https://www.npmjs.com/package/uuid) |
| Path | [https://nodejs.org/docs/latest/api/path.html](https://nodejs.org/docs/latest/api/path.html) |
| File System (fs) | [https://nodejs.org/api/fs.html](https://nodejs.org/api/fs.html) |
| Google Fonts | [https://fonts.google.com/](https://fonts.google.com/) |
| jQuery UI (Datepicker) | [https://jqueryui.com/datepicker/](https://jqueryui.com/datepicker/) |

<br />

## Description 

[Visit the Deployed Site](https://megellman.github.io/task-manager)

Task Manager is a full-stack web application that allows users to create, edit, delete, and track tasks. Each task can be customized with a name, priority level, due date, and description. Tasks are stored on the backend using a JSON file and can be persisted across sessions.

This project was built to practice working with RESTful routes, Express.js, jQuery, and dynamic DOM manipulation. A priority-based color-coding system helps users visually identify high-, medium-, and low-priority tasks.

<br/>

## Usage 

1. Clone the repo or visit the deployed link.
2. Fill in the task form to add a new task:
   - Task name
   - Priority level (High, Medium, Low)
   - Due date
   - Description
3. Tasks will be dynamically displayed in a table.
4. Edit or delete tasks with the corresponding buttons.
5. Task data persists using a Node.js/Express backend and local JSON storage.

Features include:
- Priority-based row coloring using Bootstrap classes.
- Dynamic date display using Day.js.
- Editing a task pre-fills the form and updates the stored task.

<br />

## Learning Points 

- Implemented a full CRUD Express backend connected to a JSON file for task persistence.
- Practiced using `fs` module to handle file reads/writes in Node.js.
- Used jQuery and jQuery UI for DOM manipulation and form handling.
- Built reusable and modular functions to simplify repeated logic.
- Learned to assign unique IDs using a UUID helper and route them correctly.
- Refined async/await practices for error handling and file operations.

<br />

## Author Info

### Megan Ellman
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://megellman.github.io/portfolio/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/megan-ellman/)
[![github](https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white)](https://github.com/megellman)

<br />

## License

[MIT](https://choosealicense.com/licenses/mit/)
