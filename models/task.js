const { v4: uuidv4 } = require('uuid');

class Task {

    id = '';
    tittle = '';
    done = false;
    create = null;
    finish = null;

    constructor(tittle){

        this.id = uuidv4();
        this.tittle = tittle;
        this.done = false;
        this.create= new Date();

    }
}

module.exports = Task;