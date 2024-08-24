import {Task} from './toDo.js';
import {List} from './list.js'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

// Test 
const t0 = new Task("Take trash out", "The kitchen stinks", 2 , false, "dont forget the recycling", "08/22/24");
const t1 = new Task("Walk the dog", "Dogs need exercise", 3 ,false, "walk around the neighborhood", "08/30/24");
const t2 = new Task("Begin that one project", "description", 1 , false, "notes", "09/17/24");
const t3 = new Task("Fix clogged drain in upstairs bathroom", "why is there so much hair.", 1 , false, "notes", "06/14/25");



export class APIAdapter {

    #listArr = [];
    id = 0;
    

    createList(title, id) {
        let newList = new List(title, id);
        this.#listArr.push(newList);
    }

    addToList(id) {
        // find the selected list
        // Get title, description, priority, status, note, date from forms 
        // Pass title, description, priority, status, note, date to selected list 
        let title = "Take trash out";
        let description = "The kitchen stinks"
        let priority = 2;
        let status = false;
        let note = "dont forget the recycling";
        const date = "08/22/24";
        const testDate = format(new Date(date), 'MM/dd/yyyy')
        this.#listArr[id].addTask(title, description, priority, status, note, testDate);
        
    }

    getList(id) {
        for (let i = 0; i < this.#listArr.length; i++) {
            let tempId = this.#listArr[i].getId();
            if (id == tempId) {
                return this.#listArr[i];
            }
        }
    }

    deleteList(id) {
        for (let i = 0; i < this.#listArr.length; i++) {
            let tempId = this.#listArr[i].getId();
            if (id == tempId) {
                return this.#listArr.splice(i, 1);
            }
        }
    }

    getArr() {
        return this.#listArr;
    }

}

// Create lists

// Get lists

// Delete list

// Add task to list



