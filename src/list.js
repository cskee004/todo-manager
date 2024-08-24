import {Task} from './toDo.js'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'


// Test 
const t0 = new Task("Take trash out", "The kitchen stinks", 2 , false, "dont forget the recycling", "08/22/24");
const t1 = new Task("Walk the dog", "Dogs need exercise", 3 ,false, "walk around the neighborhood", "08/30/24");
const t2 = new Task("Begin that one project", "description", 1 , false, "notes", "09/17/24");
const t3 = new Task("Fix clogged drain in upstairs bathroom", "why is there so much hair.", 1 , false, "notes", "06/14/25");



export class List {
    constructor(title, id) {
        this.title = title;
        this.id = id;
    }

    #taskArr = [];

    getTitle() {
        return this.title;
    }

    getId() {
        return this.id;
    }

    getTasks() {
        return this.#taskArr;
    }

    addTask(title, description, priority, status, note, date) {
        const tempDate = format(new Date(date), 'MM/dd/yyyy');
        let newTask = new Task(title, description, priority, status, note, tempDate)
        this.#taskArr.push(newTask);
    }

    removeTask(task) {

        let tempTasks = this.#taskArr;
        const rmv = task.getId();

        for (let i = 0; i < tempTasks.length; i++) {
            let rmvId = this.#taskArr[i].getId();
            if (rmv == rmvId) {
                this.#taskArr.splice(i, 1);
            }
            
        }
    }
}

// constructor 

// getTitle

// getId

// getTasks

// addTask

//removeTask





