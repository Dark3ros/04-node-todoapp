const Task = require(`../models/task`);


class TaskRepository {

    _task = [];//Todo con guion bajo es privado

    constructor() {
        this._task = [];
    }

    getAllTask() {

    } 

    createTask(tittle) {
        const task = new Task (tittle);
        this._task.push(task);
    }

    deleteTask() {

    }

    completeTask() {

    }



}