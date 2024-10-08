import {Task} from './Task.js'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

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

    addTask(task) {
        this.#taskArr.push(task);
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

function ListTest() {

const t0 = new Task("Take trash out", "The kitchen stinks", 2 , false, "dont forget the recycling", "08/22/2024");
const t1 = new Task("Walk the dog", "Dogs need exercise", 3 ,false, "walk around the neighborhood", "08/30/2024");
const t2 = new Task("Begin that one project", "description", 1 , false, "something other than notes", "09/17/2024");
const t3 = new Task("Fix clogged drain in upstairs bathroom", "why is there so much hair.", 1 , false, "notes", "06/14/2025");


// constructor 
const list0 = new List("List module constructor test", 1);
const list1 = new List("List module remove task test", 2);

// getTitle
const testTitle = list0.getTitle()
console.log({testTitle});

// getId
const testId = list0.getId();
console.log({testId});

// addTask
list0.addTask("Fix clogged drain in upstairs bathroom", "why is there so much hair.", 1 , false, "notes", "06/14/2025");
list0.addTask("Begin that one project", "description", 1 , false, "notes", "09/17/24");

// getTasks
const currentTasks = list0.getTasks();
console.table({currentTasks});

//removeTask
list1.addTask("Fix clogged drain in upstairs bathroom", "why is there so much hair.", 1 , false, "notes", "06/14/2025");
list1.addTask("Begin that one project", "description", 1 , false, "something other than notes", "09/17/2024");
list1.addTask("Take trash out", "The kitchen stinks", 2 , false, "dont forget the recycling", "08/22/2024");
list1.removeTask(currentTasks[1]);
const updateTasks = list1.getTasks();
console.table({updateTasks});

// Add note to task
const testNote = "This tests the add note functionality from List module to Task module";
const taskToBeUpdated = currentTasks[1];
taskToBeUpdated.addNote(testNote);
console.table({taskToBeUpdated});

// Check remaining time on a single task
const list2 = new List("List module time check on task", 1);
list2.addTask("Fix clogged drain in upstairs bathroom", "why is there so much hair.", 1 , false, "notes", "06/14/2025");
const listTaskArr = list2.getTasks()
const time = listTaskArr[0].timeRemaining();
console.log({time});

}


