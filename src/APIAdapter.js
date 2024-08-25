import {Task} from './Task.js';
import {List} from './List.js'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

export class APIAdapter {

    #listArr = [];
    id = 0;
    

    createList(listTitle, listId) {
        let newList = new List(listTitle, listId);
        this.#listArr.push(newList);
    }

    addToList(listId, taskTitle, description, priority, status, note, date) {

        const newTask = new Task(taskTitle, description, priority, status, note, date);
        
        for (let i = 0; i < this.#listArr.length; i++) {
            let tempId = this.#listArr[i].getId();
            if (listId == tempId) {
                this.#listArr[i].addTask(newTask);
            }
        }
        
    }

    getList(listId) {
        for (let i = 0; i < this.#listArr.length; i++) {
            let tempId = this.#listArr[i].getId();
            if (listId == tempId) {
                return this.#listArr[i];
            }
        }
    }

    deleteList(listId) {
        for (let i = 0; i < this.#listArr.length; i++) {
            let tempId = this.#listArr[i].getId();
            if (listId == tempId) {
                this.#listArr.splice(i, 1);
            }
        }
    }

    getArr() {
        return this.#listArr;
    }

}

const listId = 1;
const taskTitle = "Take trash out";
const taskDescription = "The kitchen stinks";
const taskPriority = 2;
const taskStatus = false;
const taskNote = "blank"
const taskDate = "08/22/2024"

let current = new APIAdapter();
current.createList("list 1", 1);

current.addToList(listId, taskTitle, taskDescription, taskPriority, taskStatus, taskNote ,taskDate);

const list = current.getList(listId);


