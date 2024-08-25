import { ta } from 'date-fns/locale';
import { Lists } from './lists.js';
import { TodoTasks } from './todoTask.js';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

export class Adapter {

    #listsArr = [];
    #tasksArr = [];

    addList(title) {
        const id = this.createId(title);
        let newList = new Lists(id, title);
        this.#listsArr.push(newList);
    }
    
    /**
     * 
     * @param {*} listId 
     * @param {*} title 
     * @param {*} description 
     * @param {*} dueDate 
     * @param {*} note 
     */
    addTask(listId, title, description, dueDate, note) {
        let newTask = new TodoTasks(listId, title, description, dueDate, note);
        this.#tasksArr.push(newTask);
        
    }

    addNote(taskTitle, note) {
        for(const task of this.#tasksArr) {
            if (taskTitle == task.getTitle()) {
                task.addNote(note);
            }
        }
    }

    /**
     * 
     * @param {*} listId 
     * @returns - A shallow copy of all tasks matching the listId
     */
    getTasks(listId) {
        const filteredTasks = this.#tasksArr.filter(task => task.id === listId);
        return filteredTasks;
    }

    /**
     * 
     * @param {*} listId The list to be removed 
     */
    removeList(listId) {
        for (let i = 0; i < this.#listsArr.length; i++) {
            const currentId = this.#listsArr[i].getIdTag();
            if (currentId == listId) {
                this.#listsArr.splice(i, 1);
            }
        }
    }

    /**
     * 
     * @param {*} taskTitle The title of the task to be removed
     */
    removeTask(taskTitle) {
        for (let i = 0; i < this.#tasksArr.length; i++) {
            const currentTitle = this.#tasksArr[i].getTitle();
            console.log({currentTitle})
            if (currentTitle == taskTitle) {
                this.#tasksArr.splice(i, 1);
            }
        }
    }

    createId(title) {
        let id = 0;
        for (let i = 0; i < title.length; i++) {
            const char = title.charCodeAt(i);
            id = (id << 2) - id + char;
            id |= 0;
        }

        return id;
    }

    getLists() {
        return this.#listsArr;
    }
}

const main = new Adapter();
main.addList("Test list 1");
main.addList("Test list 2");
main.addList("Test list 3");
main.addList("Test list 4");

main.addTask(8018677, "The house", "The toddlers endless tantrum caused the entire plane anxiety", "11/03/24", "My note")
main.addTask(8018677, "People keep telling me pink.", "It was a really good Monday for being a Saturday", "12/14/24", "My note")
main.addTask(8018677, "a clown", "The teens wondered what was kept in the red shed on the far edge of the school grounds", "01/25/25", "My note")
main.addTask(8018677, "got really good seats", "Wisdom is easily acquired when hiding under the bed with a saucepan on your head", "03/07/90", "My note")

main.addTask(8018680, "I like to leave work", "Instead of a bachelorette party", "04/15/25", "My note")
main.addTask(8018680, "taking showers in lemonade.", "It was a slippery slope and he was willing to slide all the way to the deepest depths", "06/09/25", "My note")
main.addTask(8018680, "The knives", "I thought red would have felt warmer in summer but I didn't think about the equator", "06/13/25", "My note")
main.addTask(8018680, "cautiously cuddly", "The teenage boy was accused of breaking his arm simply to get out of the test", "06/14/25", "My note")

//let taskToRemove = "I like to leave work";
//main.removeTask(taskToRemove);

//let taskTable = main.getTasks(8018680);
//console.table(taskTable);

//main.removeList(8018677)
//let listTable = main.getLists();
//console.log({listTable});

main.addNote("taking showers in lemonade.", "Taking showers in lemonade has changed my life");
let taskTable = main.getTasks(8018680);
console.log(taskTable)