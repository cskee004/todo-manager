import {Task} from './toDo.js'

// Test 
const t0 = new Task("Take trash out", "The kitchen stinks", 2 , false, "dont forget the recycling", "00/00/00");
const t1 = new Task("Walk the dog", "Dogs need exercise", 3 ,false, "walk around the neighborhood", "00/00/00");
const t2 = new Task("Begin that one project", "description", 1 , false, "notes", "00/00/00");
const t3 = new Task("Fix clogged drain in upstairs bathroom", "why is there so much hair.", 1 , false, "notes", "00/00/00");



export class List {
    constructor(title) {
        this.title = title;
    }

    #taskArr = [];

    getTitle() {
        return this.title;
    }

    getTasks() {
        return this.#taskArr;
    }

    addTask(task) {
        this.#taskArr.push(task);
    }

    removeTask(task) {
        // search for task
        // remove task from array
        
        //console.log({task})

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




const myList = new List("Chris's List");
myList.addTask(t0);
myList.addTask(t1);
myList.addTask(t2);
myList.addTask(t3);

let tempList = myList.getTasks();
console.table(tempList);

myList.removeTask(t0);
console.table(tempList);


// If the selected task titleId == task.titleId, then remove that task. 