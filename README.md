# Task Manager

## Table of Contents
- [Task Manager](#task-manager)
  - [Table of Contents](#table-of-contents)
  - [Technology Used](#technology-used)
  - [Description](#description)
  - [Troubleshooting \& Support-Oriented Design](#troubleshooting--support-oriented-design)
    - [Common Failure Scenarios Addressed](#common-failure-scenarios-addressed)
    - [Debugging \& Error Handling Approach](#debugging--error-handling-approach)
    - [Relevance to Technical Support Work](#relevance-to-technical-support-work)
  - [Usage](#usage)
  - [Learning Points](#learning-points)
  - [Author Info](#author-info)
  - [License](#license)

---

## Technology Used

| Technology Used | Resource URL |
| --------------- | ------------ |
| HTML | https://developer.mozilla.org/en-US/docs/Web/HTML |
| CSS | https://developer.mozilla.org/en-US/docs/Web/CSS |
| JavaScript | https://developer.mozilla.org/en-US/docs/Web/JavaScript |
| jQuery | https://jquery.com/ |
| Bootstrap | https://getbootstrap.com/ |
| Node.js | https://nodejs.org/en/ |
| Express | https://expressjs.com/ |
| UUID | https://www.npmjs.com/package/uuid |
| File System (fs) | https://nodejs.org/api/fs.html |
| jQuery UI (Datepicker) | https://jqueryui.com/datepicker/ |

---

## Description

[Visit the Deployed Site](https://task-mananger-7vkh.onrender.com/)

Task Manager is a full-stack web application that allows users to create, edit, delete, and track tasks. Each task includes a name, priority level, due date, and description. Tasks are persisted on the backend using a Node.js and Express server with a JSON-based data store.

The application was built to practice RESTful routing, backend data handling, and frontend-to-backend communication, while maintaining predictable behavior and clear user feedback.

---

## Troubleshooting & Support-Oriented Design

This project was built to mirror common SaaS support scenarios involving data persistence, CRUD operations, and user-driven state changes.

### Common Failure Scenarios Addressed
- Invalid or incomplete task submissions
- Data inconsistencies during create/update/delete operations
- File read/write failures when persisting task data
- UI state becoming out of sync with backend data

### Debugging & Error Handling Approach
- Validated incoming request data before writing updates to storage
- Used structured route handling to isolate backend logic issues
- Debugged file system operations to ensure consistent data persistence
- Ensured UI updates reflected backend changes after each operation

### Relevance to Technical Support Work
- Demonstrates reproducing issues across frontend and backend layers
- Mirrors support workflows involving data integrity and user-reported issues
- Reflects a support mindset of isolating root causes and confirming expected behavior before resolution

---

## Usage

1. Clone the repository or visit the deployed application.
2. Fill in the task form to add a new task:
   - Task name
   - Priority level (High, Medium, Low)
   - Due date
   - Description
3. Tasks are dynamically displayed in a table.
4. Edit or delete tasks using the corresponding action buttons.
5. Task data persists through a Node.js/Express backend using a local JSON file.

**Key Features**
- Priority-based row coloring using Bootstrap classes
- Editable tasks with pre-filled form values
- Persistent data storage across sessions

---

## Learning Points

- Implemented a full CRUD backend using Express and JSON-based storage
- Debugged frontend/backend synchronization issues
- Validated and persisted user-generated data reliably
- Reproduced and resolved issues involving state management and data integrity
- Structured backend routes to simplify troubleshooting and maintenance

---

## Author Info

**Megan Ellman**

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://megellman.github.io/react-portfolio/)  
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/megan-ellman/)  
[![github](https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white)](https://github.com/megellman)

---

## License

[MIT License](https://choosealicense.com/licenses/mit/)
