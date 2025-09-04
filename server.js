const express = require('express');
const path = require('path');
const fs = require('fs');

const uuid = require('./helpers/uuid');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// home route
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
)

// get tasks from database
app.get('/tasks/', (req, res) => {
    console.info(`${req.method} request received`);
    fs.readFile('./db/tasks.json', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    })
})

// create new task
app.post('/tasks/', (req, res) => {
    console.info(`${req.method} request received`);
    console.log(req.body);

    const { taskName, priority, dueDate, description } = req.body;

    if (req.body) {
        const newTask = {
            taskName,
            priority,
            dueDate,
            description,
            id: uuid(),
        };
        fs.readFile('./db/tasks.json', (err, data) => {
            if (err) {
                let objArr = [newTask];
                fs.writeFile('./db/tasks.json', JSON.stringify(objArr), err => {
                    if (err) throw err;
                    res.json({ message: 'Task added!', task: newTask });
                });
            } else {
                const parsedData = JSON.parse(data);
                parsedData.push(newTask);
                fs.writeFile('./db/tasks.json', JSON.stringify(parsedData), err => {
                    if (err) throw err;
                    res.json({ message: 'Task added!', task: newTask });
                });
            }
        });
    } else {
        res.status(400).json({ error: 'Error in adding tasks' });
    }
});

// delete task
app.delete('/tasks/:id', async (req, res) => {
    try {
        console.info(`${req.method} request received`);

        let data = await fs.promises.readFile('./db/tasks.json', 'utf-8');
        let parsedData = JSON.parse(data);

        let index = parsedData.findIndex(x => x.id === req.params.id);
        
        parsedData.splice(index, 1);
        
        if (index === -1) {
            return res.status(404).json({ error: 'Task not found' });
        }
        await fs.promises.writeFile('./db/tasks.json', JSON.stringify(parsedData, null, 2));

        res.status(200).json({ message: 'Task deleted!' });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to delete task' });
    }
});

// update task
app.put('/tasks/:id', async (req, res) => {
    try {
        console.info(`${req.method} request received`);

        let data = await fs.promises.readFile('./db/tasks.json', 'utf-8');
        let parsedData = JSON.parse(data);

        let index = parsedData.findIndex(x => x.id === req.params.id);

        let newVersion = req.body;
        
        parsedData.splice(index, 1, newVersion);
        
        if (index === -1) {
            return res.status(404).json({ error: 'Task not found' });
        }

        await fs.promises.writeFile('./db/tasks.json', JSON.stringify(parsedData, null, 2));

        res.status(200).json({ message: 'Task updated!' });
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to update task' });
    }
});

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);
